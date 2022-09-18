import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Header from '../../components/Header';
import BackIcon from '../../../assets/images/BackIcon.png';
import cashIcon from '../../../assets/images/cash-icon.png';
import onlinePayIcon from '../../../assets/images/online-pay-icon.png';
import PaymentCard from '../../components/PaymentCard';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getItemFromAsyncStorage} from '../../utils/storage.utils';
import {analytic} from '../../utils/analytics';
import {styles} from './styles';
import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import {
  fetchCurrentCarts,
  fetchOrder,
  fetchUserRazorPayPayments,
  showAlertToast,
  showLoading,
} from '../AppStore/actions';
import {getShortId} from '../../utils/common.utils';
import RazorpayCheckout from 'react-native-razorpay';
import Config from 'react-native-config';
import {fetchUserData} from '../../screens/AppStore/actions';
import crashlytics from '@react-native-firebase/crashlytics';
import {AlertMessage} from '../../utils/constants';

const PaymentMethod = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userData = useSelector(state => state?.userData);
  const [cart] = useState(props?.route?.params?.cart);
  const [dateFormat] = useState(props?.route?.params?.dateFormat);
  const [deliverySlot] = useState(props?.route?.params?.deliverySlot);
  const [cartValue] = useState(props?.route?.params?.cartValue);
  const [deliveryCharges] = useState(props?.route?.params?.deliveryCharges);
  const [deliveryAddress] = useState(props?.route?.params?.selectedAddress);

  const initConversation = async (userId, storeId) => {
    const createConversationInput = {
      userId: userId,
      storeId: storeId,
    };

    let conversation = await API.graphql({
      query: queries.conversationsByUserId,
      variables: createConversationInput,
      limit: 10000,
    })
      .then(res => {
        return res?.data?.conversationsByUserId?.items;
      })
      .catch(error => {
        console.log('createConversation.error', error);
        crashlytics()?.recordError(error);
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        return null;
      });
    conversation = conversation.filter(item => item.storeId == storeId);
    createConversationInput.conversationUserId = userId;
    createConversationInput.conversationStoreId = storeId;

    if (conversation == null || !conversation.length)
      await API.graphql({
        query: mutations.createConversation,
        variables: {
          input: createConversationInput,
        },
      }).then(resp => console.log('createConversation.resp', resp));
  };

  const makePayment = async razorpayOrder => {
    try {
      console.log('makePayment.razorpayOrder', razorpayOrder);

      const currentUserId = await getItemFromAsyncStorage('current_user_id');

      var razorpayOptions = {
        description: 'BLocal order of Rs.' + cartValue,
        image:
          'https://blocalappstorage.s3.ap-south-1.amazonaws.com/app/ic_launcher.png',
        currency: 'INR',
        key: Config.RAZOR_PAY_KEY_ID,
        amount: cartValue,
        name: Config.RAZOR_NAME,
        order_id: razorpayOrder.id,
        prefill: {
          email: userData.email ? userData.email : 'payments@blocal.co.in',
          contact: currentUserId,
          name: userData.firstName + userData.lastName,
        },
        theme: {color: '#F5672E'},
      };
      console.log('razorpayOptions', razorpayOptions);

      const razorpayCheckoutResp = await RazorpayCheckout.open(razorpayOptions);

      console.log('razorpayCheckoutResp', razorpayCheckoutResp);

      if (razorpayCheckoutResp) {
        const createOrderInput = {
          id: cart.id,
          userId: currentUserId,
          storeId: cart.storeId,
          cartId: cart.id,
          orderCartId: cart.id,
          orderUserId: currentUserId,
          orderStoreId: cart.storeId,
          orderStatus: 'OPEN',
          paymentType: 'ONLINE',
          deliveryAddress: JSON.stringify(deliveryAddress),
          shortId: getShortId(9),
          razorPayOrder: JSON.stringify(razorpayOrder),
          preferredSlot: dateFormat + ' ' + deliverySlot,
        };

        console.log('createOrderInput', createOrderInput);

        const order = await API.graphql({
          query: mutations.createOrder,
          variables: {input: createOrderInput},
        }).then(resp => resp.data.createOrder);

        console.log('order===', order);

        const updateCartInput = {
          id: cart.id,
          isOrderPlaced: true,
          originalCartValue: cartValue,
          updatedCartValue: cartValue,
          deliveryCharges: deliveryCharges,
        };

        const updatedCart = await API.graphql({
          query: mutations.updateCart,
          variables: {input: updateCartInput},
        });
        console.log('updatedCart', updatedCart);
        const createRazorPayPaymentInput = {
          orderId: cart.id,
          cartId: razorpayOrder.cartId,
          storeId: razorpayOrder.storeId,
          userId: razorpayOrder.userId,
          amount: razorpayOrder.amount,
          currency: 'INR',
          receipt: razorpayOrder.receipt,
          shortOrderId: order.shortId,
          razorpay_order_id: razorpayCheckoutResp.razorpay_order_id,
          razorpay_signature: razorpayCheckoutResp.razorpay_signature,
          razorpay_payment_id: razorpayCheckoutResp.razorpay_payment_id,
          checkoutResponse: JSON.stringify(razorpayCheckoutResp),
          razorPayOrder: JSON.stringify(razorpayOrder),
        };
        console.log('createRazorPayPaymentInput', createRazorPayPaymentInput);

        const createRazorPayPayment = await API.graphql({
          query: mutations.createRazorPayPayment,
          variables: {input: createRazorPayPaymentInput},
        }).then(resp => resp.data.createRazorPayPayment);

        razorpayOrder.checkoutResponse = razorpayCheckoutResp;
        console.log('razorpayOrder.checkoutResponse', razorpayOrder);

        console.log('createRazorPayPayment', createRazorPayPayment);

        await initConversation(currentUserId, cart.storeId);
        navigation.replace('PaymentSuccess', {
          cartValue: cartValue,
          shortId: order?.shortId,
          paymentId: createRazorPayPayment?.razorpay_payment_id,
        });

        dispatch(fetchOrder());
        dispatch(fetchCurrentCarts());

        console.log('createRazorPayPayment', createRazorPayPayment);
        console.log('createRazorPayPaymentInput', createRazorPayPaymentInput);
        dispatch(fetchUserRazorPayPayments());
      } else {
        dispatch(
          showAlertToast({
            alertMessage: 'Payment not processed, please try again.',
          }),
        );
      }
    } catch (error) {
      console.log('makePayment.error', error);
      crashlytics()?.recordError(error);
      dispatch(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  };

  const placeOrder = async () => {
    dispatch(showLoading(true));
    analytic().trackEvent('DeliveryOptionScreen', {
      CTA: 'placeOrder',
    });

    const currentUserId = await getItemFromAsyncStorage('current_user_id');

    const createOrderIdVariables = {
      orderId: cart.id,
      amount: cartValue,
      cartId: cart.id,
      storeId: cart.storeId,
      userId: currentUserId,
    };

    console.log('placeOrder.createOrderIdVariables', createOrderIdVariables);

    const razorpayOrder = await API.graphql({
      query: mutations.createOrderId,
      variables: createOrderIdVariables,
    })
      .then(resp => JSON.parse(resp.data.createOrderId))
      .then(resp => JSON.parse(resp.body));

    console.log('placeOrder.razorpayOrder', razorpayOrder);

    if (razorpayOrder.error != null) {
      dispatch(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
      return;
    }

    razorpayOrder.notes = JSON.stringify(razorpayOrder.notes);
    razorpayOrder.cartId = cart.id;
    razorpayOrder.orderId = cart.id;
    razorpayOrder.storeId = cart.storeId;
    razorpayOrder.userId = currentUserId;
    razorpayOrder.offers = '';

    const createRazorPayOrderResp = await API.graphql({
      query: mutations.createRazorPayOrder,
      variables: {input: razorpayOrder},
    })
      .then(resp => resp.data.createRazorPayOrder)
      .catch(error => {
        console.log('createRazorPayOrder.error', error);
        crashlytics()?.recordError(error);
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        return null;
      });

    console.log('createRazorPayOrderResp', createRazorPayOrderResp);
    dispatch(showLoading(false));

    await makePayment(razorpayOrder);
  };

  const cashOnDelivery = async () => {
    try {
      dispatch(showLoading(true));
      const currentUserId = await getItemFromAsyncStorage('current_user_id');
      const createOrderInput = {
        userId: currentUserId,
        storeId: cart.storeId,
        cartId: cart.id,
        orderCartId: cart.id,
        orderUserId: currentUserId,
        orderStoreId: cart.storeId,
        shortId: getShortId(9),
        preferredSlot: dateFormat + ' ' + deliverySlot,
        orderStatus: 'OPEN',
        paymentType: 'COD',
        deliveryAddress: JSON.stringify(deliveryAddress),
      };
      console.log('CashOnDeliveryInput', createOrderInput);

      const createOrder = await API.graphql({
        query: mutations.createOrder,
        variables: {input: createOrderInput},
      })
        .then(resp => resp.data.createOrder)
        .catch(error => console.log('cashOnDelivery.error', error));

      const updateCartInput = {
        id: cart.id,
        isOrderPlaced: true,
        originalCartValue: cartValue,
        updatedCartValue: cartValue,
        deliveryCharges: deliveryCharges,
      };
      console.log('createOrder', createOrder);

      if (createOrder != null) {
        initConversation(createOrder?.user?.id, createOrder?.store?.id);
        await API.graphql({
          query: mutations.updateCart,
          variables: {input: updateCartInput},
        });
        navigation.replace('Home');
        dispatch(
          showAlertToast({
            alertMessage: 'Order placed with cash on delivery',
          }),
        );
      }
      dispatch(showLoading(false));
    } catch (error) {
      console.log('cashOnDelivery.error', error);
      crashlytics()?.recordError(error);
      dispatch(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  };

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <View style={styles.paymentMethodView}>
      <Header
        backNavigationIcon={BackIcon}
        headerTitle="Select Payment Method"
        onPress={() => {
          analytic().trackEvent('PaymentMethodScreen', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />
      <Text allowFontScaling={false} style={styles.onlinePaymentText}>
        Online payment
      </Text>
      <Text allowFontScaling={false} style={styles.paymentMsgText}>
        After your first payment, we will save your details for future use.
      </Text>
      <ScrollView>
        <View style={styles.digitalPaymentMethodView}>
          <PaymentCard
            paymentTypeText="Pay Online"
            paymentTypeIcon={onlinePayIcon}
            onPress={placeOrder}
          />
          <PaymentCard
            paymentTypeText="Cash on Delivery"
            paymentTypeIcon={cashIcon}
            onPress={cashOnDelivery}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentMethod;
