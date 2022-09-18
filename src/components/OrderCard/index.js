import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, AppState, Image} from 'react-native';
import * as subscriptions from '../../graphql/subscriptions';
import {API} from 'aws-amplify';
import {formatDateString, getTimeDifference} from '../../utils/common.utils';
import {fetchOrder} from '../../screens/AppStore/actions';
import {useDispatch} from 'react-redux';
import Rating from '../Rating';
import moment from 'moment';
import codIcon from '../../../assets/images/cod.png';
import {styles} from './styles';
import {
  OrderStatus,
  OrderStatusMapping,
  PaymentType,
} from '../../utils/constants';

const OrderCard = React.memo(props => {
  const dispatch = useDispatch();

  const [order, setOrder] = useState(props?.order);
  const [cancelTimeout, setCancelTimeout] = useState(null);
  const [cancelOrderTimer, setCancelOrderTimer] = useState(null);

  const setOrderCancellationTimer = (force = false) => {
    if (cancelOrderTimer == null || force) {
      const timeDiff = 120 - getTimeDifference(props?.createdAt, 'seconds');
      if (timeDiff > 0) setCancelOrderTimer(timeDiff);
    }
  };

  setOrderCancellationTimer();

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      console.log('AppState.nextAppState', nextAppState);
      if (nextAppState === 'background' && cancelTimeout != null) {
        clearTimeout(cancelTimeout);
      } else {
        setOrderCancellationTimer(true);
      }
    });
    return () => {
      subscription.remove();
      clearTimeout(cancelTimeout);
    };
  }, []);

  useEffect(() => {
    if (cancelOrderTimer == null) return;
    if (cancelOrderTimer > 0) {
      if (cancelTimeout != null) clearTimeout(cancelTimeout);

      const cancelTO = setTimeout(
        () => setCancelOrderTimer(cancelOrderTimer - 1),
        1000,
      );
      setCancelTimeout(cancelTO);
    } else {
      setCancelOrderTimer(null);
    }
  }, [cancelOrderTimer]);

  useEffect(() => {
    setOrder(props?.order);

    const subscription = API.graphql({
      query: subscriptions.onUpdateOrderById,
      variables: {id: props?.order?.id},
    }).subscribe({
      next: ({value}) => {
        dispatch(fetchOrder());
        setOrder(value?.data?.onUpdateOrderById);
      },
      error: error => {
        console.log(JSON.stringify(error));
      },
    });
    clearTimeout(cancelOrderTimer);

    return () => {
      subscription.unsubscribe();
    };
  }, [props]);

  return (
    <View style={styles.cardView}>
      <Text allowFontScaling={false} style={styles.cardTitle}>
        {order?.store?.name}
      </Text>
      <Text allowFontScaling={false} style={styles.statusText(order)}>
        {`• ${OrderStatusMapping[order?.orderStatus]}`}
      </Text>
      <Text allowFontScaling={false} style={styles.cityText}>
        {order?.store?.address}
      </Text>
      <View style={styles.orderIdTextView}>
        <Text allowFontScaling={false} style={styles.orderText}>
          Order ID
        </Text>
        <Text allowFontScaling={false} style={styles.text}>
          {order?.shortId}
        </Text>
      </View>
      {order?.paymentType != PaymentType.COD ||
        (order?.orderStatus == OrderStatus.DELIVERY_IN_PROGRESS && (
          <View style={styles.orderIdTextView}>
            <Text allowFontScaling={false} style={styles.orderText}>
              Order Type
            </Text>
            <Text allowFontScaling={false} style={styles.text}>
              {PaymentType.COD}
            </Text>
          </View>
        ))}
      {order?.razorPayOrder && (
        <View style={styles.orderIdTextView}>
          <Text allowFontScaling={false} style={styles.orderText}>
            Amount
          </Text>
          <Text allowFontScaling={false} style={styles.text}>
            {'Rs.' + JSON.parse(order?.razorPayOrder)?.amount / 100}
          </Text>
        </View>
      )}

      <View style={styles.dateTextView}>
        <Text allowFontScaling={false} style={styles.orderText}>
          Date
        </Text>
        <Text allowFontScaling={false} style={styles.text}>
          {formatDateString(order?.createdAt)}
        </Text>
        {order?.orderStatus == OrderStatus.OPEN && cancelOrderTimer != null && (
          <Text allowFontScaling={false} style={styles.timer}>
            {moment.unix(cancelOrderTimer).utc().format(' mm : ss ')}
          </Text>
        )}

        {order?.orderStatus == OrderStatus.DELIVERY_IN_PROGRESS && (
          <View style={styles.buttonDesign}>{props?.button}</View>
        )}
      </View>

      {order?.paymentType !== PaymentType.COD ||
        (order?.orderStatus == OrderStatus.CONFIRMED && (
          <Image source={codIcon} style={styles.codIconStyle} />
        ))}

      <View style={styles.viewItemTextContainer}>
        {order?.orderStatus == OrderStatus.DELIVERED && (
          <>
            {!props.rateOrderHandler && (
              <TouchableOpacity onPress={props?.onViewItemsClicked}>
                <Text allowFontScaling={false} style={styles.viewItemText}>
                  {props?.viewItemText}
                </Text>
              </TouchableOpacity>
            )}
            {!props.rateOrderHandler && (
              <>
                <Text
                  allowFontScaling={false}
                  onPress={props?.onPress}
                  style={styles.viewItemText}>
                  {props?.rateOrderText}
                </Text>
              </>
            )}
          </>
        )}

        {order?.orderStatus == OrderStatus.CANCELLED && (
          <>
            <Text
              allowFontScaling={false}
              onPress={props?.onViewItemsClicked}
              style={styles.viewItemText}>
              {props?.viewItemText}
            </Text>
          </>
        )}

        {order?.orderStatus == OrderStatus.DECLINED && (
          <>
            <Text
              allowFontScaling={false}
              onPress={props?.onViewItemsClicked}
              style={styles.viewItemText}>
              {props?.viewItemText}
            </Text>
          </>
        )}

        {order?.orderStatus == OrderStatus.OPEN && (
          <>
            <Text
              allowFontScaling={false}
              onPress={props?.onViewItemsClicked}
              style={styles.viewItemText}>
              {props?.viewItemText}
            </Text>

            {cancelOrderTimer != null && (
              <Text
                allowFontScaling={false}
                onPress={props?.onPressCancelOrder}
                style={styles.viewItemText}>
                {props?.cardBottomRightText}
              </Text>
            )}
          </>
        )}

        {order?.orderStatus == OrderStatus.CONFIRMED && (
          <>
            <Text
              allowFontScaling={false}
              onPress={props?.onViewItemsClicked}
              style={styles.viewItemText}>
              {props?.viewItemText}
            </Text>
          </>
        )}
      </View>

      {order?.orderStatus == OrderStatus.DELIVERED &&
        props?.rateOrderHandler && (
          <Rating
            activeRate={props?.activeRate}
            setActiveRate={props?.setActiveRate}
            setShowReviewTextInput={props?.setShowReviewTextInput}
            setRateOrderHandler={props?.setRateOrderHandler}
            setReview={props?.setReview}
            setActiveRate={props?.setActiveRate}
            showReviewTextInput={props?.showReviewTextInput}
            reviewMessage={props?.reviewMessage}
            setReviewMessage={props?.setReviewMessage}
            orderRating={props.orderRating}
          />
        )}

      {order?.orderStatus == OrderStatus.DELIVERY_IN_PROGRESS && (
        <>
          <Text
            allowFontScaling={false}
            onPress={props?.onViewItemsClicked}
            style={styles.viewItemText}>
            {props?.viewItemText}
          </Text>
          <Text allowFontScaling={false} style={styles.scheduledDeliveryTime}>
            Scheduled delivery time:
            {`${props?.order?.preferredSlot?.slice(11)}`}
          </Text>
        </>
      )}
    </View>
  );
});

export default OrderCard;
