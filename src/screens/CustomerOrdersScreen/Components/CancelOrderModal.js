import API from '@aws-amplify/api';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Modal} from 'react-native-paper';
import {scaledValue} from '../../../utils/design.utils';
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';
import {useDispatch, useSelector} from 'react-redux';
import {fetchOrder, fetchRazorPayOrderByOrderId} from '../../AppStore/actions';
import {AlertMessage, OrderStatus} from '../../../utils/constants';
import {getItemFromAsyncStorage} from '../../../utils/storage.utils';
import crashlytics from '@react-native-firebase/crashlytics';

const CancelOrderModal = props => {
  const razorPayOrder = useSelector(state =>
    JSON.stringify(state?.razorPayOrder),
  );
  const razorPayPayment = useSelector(state =>
    JSON.stringify(state?.razorPayPayment),
  );

  console.log('razorPayOrder', razorPayOrder);
  console.log('razorPayPayment', razorPayPayment);

  const [cartValue, setCartValue] = useState(0);
  const dispatch = useDispatch();

  const cancelOrder = async () => {
    const userId = await getItemFromAsyncStorage('current_user_id');

    const updateOrderInput = {
      id: props?.cancelOrderId,
      orderStatus: OrderStatus.CANCELLED,
    };

    const updatedOrder = await API.graphql({
      query: mutations.updateOrder,
      variables: {input: updateOrderInput},
    })
      .then(resp => resp.data.updateOrder)
      .catch(error => {
        console.log('updateOrder.error', error);
        crashlytics()?.recordError(error);
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        return null;
      });

    dispatch(fetchOrder());

    if (updatedOrder.orderStatus == OrderStatus.CANCELLED) {
      const createRefundOrderInput = {
        orderId: props.cancelOrderId,
        cartId: props.cartId,
        userId: userId,
        storeId: props.storeId,
        refundAmount: cartValue,
        razorPayOrder: razorPayOrder,
        refundReason: 'CANCELLED_BY_CUSTOMER',
        refundStatus: 'PENDING',
        razorPayPayment: razorPayPayment,
        shortOrderId: props.orderShortId,
        notes: razorPayOrder,
      };

      console.log('createRefundOrderInput', createRefundOrderInput);

      const refund = await API.graphql({
        query: mutations.createRefundOrder,
        variables: {input: createRefundOrderInput},
      })
        .then(resp => resp?.data)
        .catch(error => {
          crashlytics()?.recordError(error);
          console.log('CancelOrder.error: ', error);
          dispatch(
            showAlertToast({
              alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
            }),
          );
          return null;
        });
      console.log('refund', refund);
    }
    props.setOrderCancelled('second');
  };

  const loadCart = async cartId => {
    if (cartId != null) {
      let cart = await API.graphql({
        query: queries.getCart,
        variables: {id: cartId},
      })
        .then(res => res?.data?.getCart)
        .catch(error => {
          console.log('LoadCart.error: ', error);
          crashlytics()?.recordError(error);
          dispatch(
            showAlertToast({
              alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
            }),
          );
          return null;
        });

      setCartValue(cart?.originalCartValue?.toFixed(2));
    }
  };

  useEffect(() => {
    loadCart(props?.cartId);
    dispatch(fetchRazorPayOrderByOrderId(props?.cancelOrderId, props?.cartId));
  }, [props?.cartId]);

  return (
    <Modal
      visible={props.visible}
      onDismiss={props.onDismiss}
      contentContainerStyle={styles.containerStyle}>
      {props?.orderCancelled === 'first' && (
        <View style={styles.modalMainView}>
          <Text allowFontScaling={false} style={styles.cancelOrderText}>
            Cancel Order
          </Text>
          <Text allowFontScaling={false} style={styles.confirmText}>
            Are you sure you want to cancel?
          </Text>
          <View style={styles.confirmMainView}>
            <TouchableOpacity onPress={props.onDismiss}>
              <Text allowFontScaling={false} style={styles.confirmCancelOkText}>
                CANCEL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={cancelOrder}>
              <Text allowFontScaling={false} style={styles.confirmCancelOkText}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {props?.orderCancelled === 'second' && (
        <View style={styles.orderedCancelledMain}>
          <View style={styles.orderedCancelledView}>
            <Text allowFontScaling={false} style={styles.orderedCancelledText}>
              Order Cancelled
            </Text>
          </View>
          <Text allowFontScaling={false} style={styles.orderCancelDescription}>
            Refund of Rs.{cartValue} towards the order number
            {' ' + props?.orderShortId} will be processed within 48 hours & the
            amount will be credited to your original mode of payment.
          </Text>
        </View>
      )}
    </Modal>
  );
};

export default CancelOrderModal;

const styles = StyleSheet.create({
  modalMainView: {
    paddingVertical: scaledValue(33),
  },
  cancelOrderText: {
    fontSize: scaledValue(31),
    color: '#000',
    fontFamily: 'Lato-Semibold',
    marginHorizontal: scaledValue(55),
  },
  confirmText: {
    color: 'gray',
    marginTop: scaledValue(26),
    marginLeft: scaledValue(55),
    fontSize: scaledValue(31),
    fontFamily: 'Lato-Semibold',
  },
  confirmMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaledValue(59),
    paddingHorizontal: scaledValue(100),
  },
  confirmCancelOkText: {
    fontSize: scaledValue(31),
    fontFamily: 'Lato-Bold',
    color: '#F79939',
  },
  orderedCancelledText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: scaledValue(31),
    fontFamily: 'Lato-Semibold',
  },
  orderedCancelledView: {
    backgroundColor: '#F3901E',
    paddingVertical: scaledValue(26),
    borderTopLeftRadius: scaledValue(8),
    borderTopRightRadius: scaledValue(8),
  },
  orderCancelDescription: {
    textAlign: 'center',
    color: 'gray',
    marginHorizontal: scaledValue(16),
    marginTop: scaledValue(21),
    marginBottom: scaledValue(44),
    fontSize: scaledValue(31),
  },
  containerStyle: {
    backgroundColor: 'white',
    position: 'absolute',
    top: scaledValue(505.5),
    left: scaledValue(39),
    right: scaledValue(101.75),
    borderRadius: scaledValue(8),
    width: scaledValue(671),
  },
});
