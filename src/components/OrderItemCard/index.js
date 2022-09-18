import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import API from '@aws-amplify/api';
import * as queries from '../../graphql/queries';
import {Switch} from 'react-native-paper';
import {styles} from './styles';
import {AlertMessage, OrderStatus} from '../../utils/constants';
import crashlytics from '@react-native-firebase/crashlytics';
import {useDispatch} from 'react-redux';
import {showAlertToast} from '../../screens/AppStore/actions';

const OrderItemCard = props => {
  const dispatch = useDispatch();

  console.log('totalOrder', props?.totalOrder);
  console.log('total', props?.total);

  const [product, setProduct] = useState([]);
  const [isEnabled, setIsEnabled] = useState(props?.availability);

  useEffect(() => {
    if (props?.quantity == 0) {
      setIsEnabled(false);
    }
  }, [props]);

  const loadProduct = async productId => {
    if (productId != null) {
      const prd = await API.graphql({
        query: queries.getProduct,
        variables: {id: productId},
      })
        .then(resp => resp?.data?.getProduct)
        .catch(error => {
          crashlytics()?.recordError(error);
          console.log('prd.error', error);
          dispatch(
            showAlertToast({
              alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
            }),
          );
          return null;
        });
      if (prd) setProduct(prd);
    }
  };

  useEffect(() => {
    loadProduct(props?.productId);
  }, [props?.productId]);
  return (
    <View style={styles.orderItemsDetailView(props)}>
      <View style={styles.itemView}>
        <Text
          allowFontScaling={false}
          numberOfLines={3}
          style={styles.productText}>
          {props.itemName || product?.description}
        </Text>
      </View>
      {props?.orderStatus == OrderStatus.CONFIRMED && (
        <>
          <View style={styles.priceView}>
            <Text allowFontScaling={false} style={styles.orderItemPriceText}>
              {props?.itemPrice?.toFixed(2) || props?.price}
            </Text>
          </View>
          <View style={styles.quantityView}>
            <Text allowFontScaling={false} style={styles.quantityText}>
              {props?.orderedQty || props?.quantity}
            </Text>
          </View>
          <View style={styles.totalTextView}>
            <Text allowFontScaling={false} style={styles.totalText}>
              {props?.totalOrder?.toFixed(2) || props?.total}
            </Text>
          </View>
        </>
      )}
      {props?.orderStatus == OrderStatus.OPEN && (
        <>
          <View style={styles.priceView}>
            <Text allowFontScaling={false} style={styles.orderItemPriceText}>
              {props?.itemPrice?.toFixed(2) || props?.price}
            </Text>
          </View>
          <View style={styles.quantityView}>
            <Text allowFontScaling={false} style={styles.quantityText}>
              {props?.orderedQty || props?.quantity}
            </Text>
          </View>
          <View style={styles.totalTextView}>
            <Text allowFontScaling={false} style={styles.totalText}>
              {props?.totalOrder?.toFixed(2) || props?.total}
            </Text>
          </View>
        </>
      )}
      {props?.orderStatus == OrderStatus.CANCELLED && (
        <>
          <View style={styles.priceView}>
            <Text allowFontScaling={false} style={styles.orderItemPriceText}>
              {props?.itemPrice?.toFixed(2) || props?.price}
            </Text>
          </View>
          <View style={styles.quantityView}>
            <Text allowFontScaling={false} style={styles.quantityText}>
              {props?.orderedQty}
            </Text>
          </View>
          <View style={styles.totalTextView}>
            <Text allowFontScaling={false} style={styles.totalText}>
              {props?.totalOrder?.toFixed(2) || props?.total}
            </Text>
          </View>
        </>
      )}

      {props?.orderStatus == OrderStatus.DECLINED && (
        <>
          <View style={styles.priceView}>
            <Text allowFontScaling={false} style={styles.orderItemPriceText}>
              {props?.itemPrice?.toFixed(2) || props?.price}
            </Text>
          </View>
          <View style={styles.quantityView}>
            <Text allowFontScaling={false} style={styles.quantityText}>
              {props?.orderedQty}
            </Text>
          </View>
          <View style={styles.totalTextView}>
            <Text allowFontScaling={false} style={styles.totalText}>
              {props?.totalOrder?.toFixed(2) || props?.total}
            </Text>
          </View>
        </>
      )}

      {props?.orderStatus === OrderStatus.DELIVERY_IN_PROGRESS && (
        <>
          <View style={styles.deliveryInProgressItmPriceView}>
            <Text
              allowFontScaling={false}
              style={styles.deliveryInProgressItmPriceText}>
              {props?.price?.toFixed(2)}
            </Text>
          </View>
          <View style={styles.availabilityView}>
            <Switch
              trackColor={{false: '#CACACA', true: '#FBCC9C'}}
              thumbColor={isEnabled ? '#F99732' : '#9E9E9E'}
              ios_backgroundColor="#3e3e3e"
              value={isEnabled}
            />
          </View>
          <View style={styles.deliveryInProgressQtyView}>
            <Text allowFontScaling={false} style={styles.orderItemQuantityText}>
              {props?.quantity}
            </Text>
          </View>
          <View style={styles.orderItemTotalView}>
            <Text allowFontScaling={false} style={styles.orderItemTotalText}>
              {props?.total?.toFixed(2)}
            </Text>
          </View>
        </>
      )}
      {props?.orderStatus === OrderStatus.DELIVERED && (
        <>
          <View style={styles.deliveredItmPriceView}>
            <Text allowFontScaling={false} style={styles.deliveredItmPriceText}>
              {props?.price?.toFixed(2)}
            </Text>
          </View>
          <View style={styles.orderedQtyView}>
            {props?.orderedQty && (
              <Text allowFontScaling={false} style={styles.orderedQtyText}>
                {props.orderedQty}
              </Text>
            )}
          </View>
          <View style={styles.deliveredQtyView}>
            <Text allowFontScaling={false} style={styles.deliveredQtyText}>
              {props.quantity}
            </Text>
          </View>
          <View style={styles.deliveredTotalView}>
            <Text allowFontScaling={false} style={styles.deliveredTotalText}>
              {props?.total?.toFixed(2)}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};
export default OrderItemCard;
