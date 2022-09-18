import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import {scaledValue} from '../../utils/design.utils';
import Header from '../../components/Header';
import Button from '../../components/Button';
import OrderItemModal from './Component/OrderItemModal';
import {useNavigation} from '@react-navigation/native';
import OrderTime from './Component/OrderTimeModal';
import dropDownIcon from '../../../assets/images/DropDown.png';
import Tooltip from 'rn-tooltip';
import locationMarkIcon from '../../../assets/images/locationMark.png';
import {
  fetchCurrentCarts,
  showAlertToast,
  showLoading,
} from '../AppStore/actions';
import {getItemFromAsyncStorage} from '../../utils/storage.utils';
import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import {useDispatch} from 'react-redux';
import {fetchUserData} from '../../screens/AppStore/actions';
import {styles} from './styles';
import DeleteCartItemModal from './Component/DeleteCartItemModal';
import {analytic} from '../../utils/analytics';
import {
  weekDays,
  months,
  getValidDeliverySlot,
  AlertMessage,
} from '../../utils/constants';
import crashlytics from '@react-native-firebase/crashlytics';

const DeliveryOptionScreen = props => {
  const dispatch = useDispatch();
  const DELIVERY_SLOT_OPTIONS = getValidDeliverySlot();
  const navigation = useNavigation();
  const [storeCartItems, setStoreCartItems] = useState(null);
  const [cart] = useState(props?.route?.params?.cart);
  const [originalCartVal] = useState(props?.route?.params?.cartValue);
  const [cartValue, setCartValue] = useState(props?.route?.params?.cartValue);
  const [minimumAmount] = useState(props?.route?.params?.minimumAmount);
  const [orderItemModal, setOrderItemModal] = useState(false);
  const [orderTimeModal, setOrderTimeModal] = useState(false);
  const [deliverySlot, setDeliverySlot] = useState(
    DELIVERY_SLOT_OPTIONS[0].data[0],
  );

  const [selectedAddress, setSelectedAddress] = useState(
    props?.route?.params?.selectedAddress,
  );
  const [deliveryCharges] = useState(props?.route?.params?.deliveryCharges);
  const [deleteCartItemModal, setDeleteCartItemModal] = useState(false);
  const [cartItem, setCartItem] = useState(null);
  const [dateFormat, setDateFormat] = useState(DELIVERY_SLOT_OPTIONS[0].title);

  const updateTimeSlot = title => {
    var currentDate = new Date();
    if (title == 'Tomorrow') {
      currentDate.setDate(currentDate.getDate() + 1);
    }
    var currentDateFormat =
      currentDate.getDate() +
      ' ' +
      months[currentDate.getMonth()] +
      ', ' +
      weekDays[currentDate.getDay()];
    setDateFormat(currentDateFormat);
  };

  const loadStoreCartItems = async cartId => {
    dispatch(showLoading(true));
    let cartsItems = await API.graphql({
      query: queries.cartsItemsByCartId,
      variables: {cartId: cartId},
    }).then(res => res?.data?.cartsItemsByCartId?.items);
    cartsItems = cartsItems.filter(cartsItem => cartsItem.storeProduct != null);

    setStoreCartItems(cartsItems);
    dispatch(showLoading(false));
  };

  useEffect(() => {
    loadStoreCartItems(cart?.id);
    updateTimeSlot(DELIVERY_SLOT_OPTIONS[0]?.title);

    if (props?.route?.params?.selectedAddress == null) {
      getItemFromAsyncStorage('selectedAddress').then(address => {
        setSelectedAddress(address);
      });
    }
  }, []);

  useEffect(() => {
    if (cartValue < minimumAmount && deliveryCharges != null) {
      setCartValue(parseInt(cartValue) + parseInt(deliveryCharges));
    }
  }, [props]);

  const removeCartItem = async cartItemId => {
    dispatch(showLoading(true));
    const deleteCartItemDetail = {
      id: cartItemId,
    };
    await API.graphql({
      query: mutations.deleteCartItem,
      variables: {
        input: deleteCartItemDetail,
      },
    })
      .then(resp => resp)
      .catch(error => {
        console.log('deleteItem.error', error);
        crashlytics()?.recordError(error);
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        return null;
      });

    if (storeCartItems?.length == 1) {
      navigation.navigate('Home');
      props?.route?.params?.deleteStoreCart();
      dispatch(fetchCurrentCarts());
    }

    setDeleteCartItemModal(false);
    loadStoreCartItems(cart?.id);
    dispatch(showLoading(false));
    analytic().trackEvent('DeliveryOptionScreen', {
      CTA: 'removeCartItem',
      data: cartItemId,
    });
  };

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <View>
      <Header
        backNavigationIcon={require('../../../assets/images/BackIcon.png')}
        headerTitle="Delivery Option"
        onPress={() => {
          analytic().trackEvent('SelectDeliveryOption', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />

      <View style={styles.textViewDeliveryAddress}>
        <View style={styles.leftView}>
          <View style={styles.leftText}>
            <Image style={styles.locationImage} source={locationMarkIcon} />
            <Text allowFontScaling={false} style={styles.textAddress}>
              Delivery to: {selectedAddress?.tag || ''}
              (Default)
            </Text>
          </View>
          <Text allowFontScaling={false} style={styles.textLandMark}>
            {`${selectedAddress?.address || ''} ${
              selectedAddress?.location || ''
            } ${selectedAddress?.landmark || ''} ${
              selectedAddress?.city || ''
            } ${selectedAddress?.state || ''} ${
              selectedAddress?.pincode || ''
            }`}
          </Text>
        </View>
      </View>
      <View style={styles.deliveryDetail}>
        <View style={styles.deliveryDetailOptionTextView}>
          <Text
            allowFontScaling={false}
            style={styles.deliveryOptionDetailText}>
            Default delivery option
          </Text>
          <View style={styles.rightViewText}>
            <Text
              allowFontScaling={false}
              style={styles.deliveryOptionDetailText}>
              1Shipment
            </Text>
            <Text
              allowFontScaling={false}
              style={styles.deliveryOptionDetailText}>
              {`Delivery charge: Rs ${
                deliveryCharges ? deliveryCharges : '00'
              }`}
            </Text>
          </View>
        </View>
        <View style={styles.outerLowerDeliveryDetail}>
          <View style={styles.lowerDeliveryDetail}>
            <Text
              allowFontScaling={false}
              style={styles.deliveryOptionDetailText}>
              Free delivery
            </Text>

            <TouchableOpacity style={styles.tooltipTouchableOpacity}>
              <Tooltip
                popover={
                  <Text allowFontScaling={false} style={styles.tooltipText}>
                    {cartValue < minimumAmount &&
                      `Please add items worth Rs. ${
                        minimumAmount - originalCartVal
                      } to get free home delivery`}
                    {cartValue >= minimumAmount &&
                      `Since the order value is above Rs.${
                        minimumAmount ? minimumAmount : '0'
                      }, the shipment is free`}
                  </Text>
                }
                backgroundColor="#fff"
                width={scaledValue(675)}
                height={scaledValue(115.8)}
                overlayColor="#00000085">
                <Image
                  style={styles.infoIcon}
                  source={require('../../../assets/images/InfoIcon.png')}
                />
              </Tooltip>
            </TouchableOpacity>
          </View>
          <Button
            width={scaledValue(175)}
            height={scaledValue(39)}
            fSize={scaledValue(24)}
            backgroundColor={'#F8993A'}
            color="#fff"
            fontFamily="Lato-Regular"
            borderColor="#F8993A"
            title={`View ${
              storeCartItems?.length ? storeCartItems?.length : ''
            } Items`}
            onPress={() => {
              analytic().trackEvent('DeliveryOptionScreen', {
                CTA: 'ViewItems',
              });
              setOrderItemModal(true);
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.deliveryTimePeriod}
          onPress={() => {
            analytic().trackEvent('DeliveryOptionScreen', {
              CTA: 'deliveryTimePeriod',
            });
            setOrderTimeModal(true);
          }}>
          <View style={styles.deliveryTimePeriodRightView}>
            <Image
              style={styles.timeIcon}
              source={require('../../../assets/images/TimeIcon.png')}
            />
            <Text
              allowFontScaling={false}
              style={
                styles.deliveryTimePeriodText
              }>{`${dateFormat} ${deliverySlot}`}</Text>
          </View>

          <IconButton
            icon={dropDownIcon}
            size={scaledValue(22.72)}
            color="#FF8800"
            onPress={() => {
              analytic().trackEvent('CartStore', {
                CTA: 'selectDeliveryTime',
              });
              setOrderTimeModal(true);
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.viewForProceedToPayButton}>
        <Button
          width={scaledValue(666)}
          height={scaledValue(103)}
          fSize={scaledValue(30)}
          backgroundColor="#F8993A"
          color="#fff"
          fontFamily="Lato-Semibold"
          lineHeight={scaledValue(36)}
          borderColor={'#F8993A'}
          title="Proceed To Pay"
          onPress={() =>
            navigation.navigate('PaymentMethod', {
              cartValue: cartValue,
              cart: cart,
              dateFormat: dateFormat,
              deliverySlot: deliverySlot,
              deliveryCharges: deliveryCharges,
              selectedAddress: selectedAddress,
            })
          }
        />
      </View>
      {storeCartItems && (
        <OrderItemModal
          visible={orderItemModal}
          onDismiss={() => {
            analytic().trackEvent('DeliveryOptionScreen', {
              CTA: 'hideOrderItemModal',
            });
            setOrderItemModal(false);
          }}
          storeCartItems={storeCartItems}
          cartValue={cartValue}
          setCartItem={setCartItem}
          setDeleteCartItemModal={setDeleteCartItemModal}
          storeCartItemsLength={storeCartItems?.length}
        />
      )}
      <OrderTime
        visible={orderTimeModal}
        onDismiss={() => {
          analytic().trackEvent('DeliveryOptionScreen', {
            CTA: 'hideOrderTimeModal',
          });
          setOrderTimeModal(false);
        }}
        handleDeliverySlotSelection={selectedSlot => {
          setDeliverySlot(selectedSlot.slot);
          updateTimeSlot(selectedSlot.title);
        }}
      />
      {cartItem && (
        <DeleteCartItemModal
          visible={deleteCartItemModal}
          onDismiss={() => {
            analytic().trackEvent('DeliveryOptionScreen', {
              CTA: 'hideDeleteCartItemModal',
            });
            setDeleteCartItemModal(false);
          }}
          removeCartItem={removeCartItem}
          cartItem={cartItem}
        />
      )}
    </View>
  );
};

export default DeliveryOptionScreen;
