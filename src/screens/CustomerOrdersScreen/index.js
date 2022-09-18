import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Snackbar} from 'react-native-paper';
import Header from '../../components/Header';
import DeliveryStatusModal from './Components/DeliveryStatusModal';
import BackIcon from '../../../assets/images/BackIcon.png';
import ItemsAvatar from '../../components/ItemsAvatar';
import OrderedIcon from '../../../assets/images/ordered_icon.png';
import OrderedActive from '../../../assets/images/orderedActive.png';
import DeliveredIcon from '../../../assets/images/delivered_icon.png';
import DeliveredActive from '../../../assets/images/deliveredActive.png';
import DeliveryInProgressActive from '../../../assets/images/deliveryInProgressActive.png';
import AllOrdersIcon from '../../../assets/images/allOrders.png';
import AllOrdersActive from '../../../assets/images/allOrdersActive.png';
import DeliveryInProgress from '../../../assets/images/inprogress.png';
import {scaledValue} from '../../utils/design.utils';
import OrderCard from '../../components/OrderCard';
import Button from '../../components/Button';
import OrderDeliveredModal from './Components/OrderDeliveredModal';
import {useNavigation} from '@react-navigation/native';
import CancelOrderModal from './Components/CancelOrderModal';
import {useSelector, useDispatch} from 'react-redux';
import {fetchOrder, submitRating, fetchRating} from '../AppStore/actions';
import {analytic} from '../../utils/analytics';
import {OrderStatus} from '../../utils/constants';

const Orders = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [activeButton, setActiveButton] = useState('All orders');
  const [deliveryStatusSelectModal, setDeliveryStatusSelectModal] =
    useState(false);
  const [radioHandler, setRadioHandler] = useState(false);
  const [deliveredConfirmHandler, setDeliveredConfirmHandler] = useState(null);
  const [orderDeliveredModal, setOrderDeliveredModal] = useState(false);
  const [showCancelOrderModal, setShowCancelOrderModal] = useState(false);
  const userOrders = useSelector(state => state?.userOrders);
  const existRating = useSelector(state => state?.rating);
  const [radioValue, setRadioValue] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [orderShortId, setOrderShortId] = useState(null);
  const [storeId, setStoreId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [rateOrderHandler, setRateOrderHandler] = useState(null);
  const [showReviewTextInput, setShowReviewTextInput] = useState(false);
  const [reviewMessage, setReviewMessage] = useState(null);
  const [visibleSnackBar, setVisibleSnackBar] = useState(false);
  const [cancelOrderId, setCancelOrderId] = useState(null);
  const onDismissSnackBar = () => setVisibleSnackBar(false);
  const [orderCancelled, setOrderCancelled] = useState('first');
  const [cartId, setCartId] = useState(null);
  const [activeRate, setActiveRate] = useState(0);

  useEffect(() => {
    existRating && setActiveRate(existRating[0]?.rating);
    existRating && setReviewMessage(existRating[0]?.reviewMessage);
  }, [existRating]);

  const filterOrder = () => {
    if (activeButton == 'All orders') {
      return userOrders;
    } else if (activeButton != 'All orders') {
      return userOrders
        ?.filter(elem => {
          return elem?.orderStatus == activeButton;
        })
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  };

  const rateOrder = id => {
    setRateOrderHandler(id);
  };

  const orderRating = () => {
    const ratingDetail = {
      orderId: rateOrderHandler,
      userId: userId,
      storeId: storeId,
      rating: activeRate,
      reviewMessage: reviewMessage,
    };
    dispatch(submitRating(ratingDetail));
    setVisibleSnackBar(!visibleSnackBar);
  };

  useEffect(() => {
    filterOrder();
  }, [activeButton]);

  useEffect(() => {
    orderDeliveredModal === true ? setDeliveryStatusSelectModal(false) : null;
  }, [orderDeliveredModal]);

  useEffect(() => {
    dispatch(fetchOrder());
  }, []);

  return (
    <View style={styles.ordersView}>
      <Header
        backNavigationIcon={BackIcon}
        headerTitle="My Orders"
        onPress={() => {
          analytic().trackEvent('OrderScreen', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />
      <View style={styles.itemsAvatar}>
        <ItemsAvatar
          onPress={() => {
            analytic().trackEvent('OrderScreen', {
              CTA: 'ordered',
            });
            setActiveButton(OrderStatus.CONFIRMED || OrderStatus.OPEN);
          }}
          color={activeButton !== OrderStatus.CONFIRMED ? '#868686' : '#FF8000'}
          avatarImage={
            activeButton !== OrderStatus.CONFIRMED ? OrderedIcon : OrderedActive
          }
          title="Ordered"
          imageSize={scaledValue(76)}
        />

        <ItemsAvatar
          onPress={() => {
            analytic().trackEvent('OrderScreen', {
              CTA: 'deliveryInProgress',
            });
            setActiveButton(OrderStatus.DELIVERY_IN_PROGRESS);
          }}
          color={
            activeButton !== OrderStatus.DELIVERY_IN_PROGRESS
              ? '#868686'
              : '#B3C20F'
          }
          avatarImage={
            activeButton !== OrderStatus.DELIVERY_IN_PROGRESS
              ? DeliveryInProgress
              : DeliveryInProgressActive
          }
          title="Delivery in Progress"
          imageSize={scaledValue(76)}
        />
        <ItemsAvatar
          onPress={() => {
            analytic().trackEvent('OrderScreen', {
              CTA: 'delivered',
            });
            setActiveButton(OrderStatus.DELIVERED);
          }}
          color={activeButton !== OrderStatus.DELIVERED ? '#868686' : '#05A649'}
          avatarImage={
            activeButton !== OrderStatus.DELIVERED
              ? DeliveredIcon
              : DeliveredActive
          }
          title="Delivered"
          imageSize={scaledValue(76)}
        />
        <ItemsAvatar
          onPress={() => {
            analytic().trackEvent('OrderScreen', {
              CTA: 'allOrders',
            });
            setActiveButton('All orders');
          }}
          color={activeButton !== 'All orders' ? '#868686' : '#32879C'}
          avatarImage={
            activeButton !== 'All orders' ? AllOrdersIcon : AllOrdersActive
          }
          title="All orders "
          imageSize={scaledValue(76)}
        />
      </View>
      <View style={styles.ordersLowerView}>
        <FlatList
          data={filterOrder()?.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          )}
          renderItem={({item}) => (
            <OrderCard
              order={item}
              createdAt={item.createdAt}
              button={
                <Button
                  title="Status"
                  backgroundColor="#FF8800"
                  borderColor="#FF8800"
                  color="#FFFFFF"
                  onPress={() => {
                    analytic().trackEvent('OrderScreen', {
                      CTA: 'orderStatus',
                    });
                    setDeliveryStatusSelectModal(true);
                    setOrderId(item.id);
                    setStoreId(item?.storeId);
                    setOrderShortId(item?.shortId);
                  }}
                  fontFamily="Lato-Medium"
                  width={scaledValue(150)}
                  height={scaledValue(52)}
                  borderRadius={scaledValue(3)}
                  zIndex={1}
                />
              }
              viewItemText="View items"
              onViewItemsClicked={() => {
                analytic().trackEvent('OrderScreen', {
                  CTA: 'viewItems',
                });
                navigation.navigate('OrdersDetailScreen', {
                  order: item,
                  shortId: item?.shortId,
                });
              }}
              cardBottomRightText="Cancel Order"
              rateOrderText="Rate Order"
              onPressCancelOrder={() => {
                analytic().trackEvent('OrderScreen', {
                  CTA: 'cancelOrder',
                });
                setShowCancelOrderModal(true);
                setCancelOrderId(item?.id);
                setOrderShortId(item?.shortId);
                setStoreId(item?.storeId);
                setCartId(item?.cartId);
              }}
              setRateOrderHandler={setRateOrderHandler}
              rateOrderHandler={rateOrderHandler === item?.id}
              setActiveRate={setActiveRate}
              activeRate={activeRate}
              setShowReviewTextInput={setShowReviewTextInput}
              showReviewTextInput={showReviewTextInput}
              setReviewMessage={setReviewMessage}
              reviewMessage={reviewMessage}
              onPress={() => {
                analytic().trackEvent('OrderScreen', {
                  CTA: 'rateOrder',
                });
                rateOrder(item?.id);
                setStoreId(item?.storeId);
                setUserId(item?.userId);
                dispatch(fetchRating(item.id));
              }}
              orderRating={orderRating}
            />
          )}
        />
      </View>

      <DeliveryStatusModal
        visible={deliveryStatusSelectModal}
        onDismiss={() => {
          analytic().trackEvent('OrderScreen', {
            CTA: 'hideDeliveryStatusModal',
          });
          setDeliveryStatusSelectModal(false);
          setRadioValue(null);
          setRadioHandler(false);
          setDeliveredConfirmHandler(null);
        }}
        setOrderDeliveredModal={setOrderDeliveredModal}
        radioHandler={radioHandler}
        setRadioHandler={setRadioHandler}
        deliveredConfirmHandler={deliveredConfirmHandler}
        setDeliveredConfirmHandler={setDeliveredConfirmHandler}
        radioValue={radioValue}
        setRadioValue={setRadioValue}
        orderId={orderId}
        orderShortId={orderShortId}
        storeId={storeId}
      />
      <OrderDeliveredModal
        visible={orderDeliveredModal}
        onDismiss={() => {
          analytic().trackEvent('OrderScreen', {
            CTA: 'hideOrderDeliveredModal',
          });
          setOrderDeliveredModal(false);
          setRadioValue(null);
          setRadioHandler(false);
          setDeliveredConfirmHandler(null);
        }}
      />
      <CancelOrderModal
        cartId={cartId}
        cancelOrderId={cancelOrderId}
        visible={showCancelOrderModal}
        setOrderCancelled={setOrderCancelled}
        orderCancelled={orderCancelled}
        orderShortId={orderShortId}
        storeId={storeId}
        onDismiss={() => {
          analytic().trackEvent('OrderScreen', {
            CTA: 'hideCancelOrderModal',
          });
          setShowCancelOrderModal(false);
          setOrderCancelled('first');
        }}
      />
      <Snackbar
        visible={visibleSnackBar}
        onDismiss={onDismissSnackBar}
        duration={1000}>
        Thanks for Rating !
      </Snackbar>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  ordersView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemsAvatar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaledValue(58),
    marginBottom: scaledValue(38),
    marginTop: scaledValue(47),
  },
  ordersLowerView: {
    flex: 1,
    alignItems: 'center',
  },
});
