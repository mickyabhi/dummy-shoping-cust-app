import React from 'react';
import {Text, View} from 'react-native';
import {OrderStatus} from '../../utils/constants';
import {styles} from './styles';

const TableHeader = props => {
  return (
    <View style={styles.itemsHeaderView}>
      {props?.status === OrderStatus.CANCELLED && (
        <>
          <Text allowFontScaling={false} style={styles.itemText}>
            {props.item}
          </Text>
          <Text allowFontScaling={false} style={styles.itemPricePerUnitText}>
            {props.pricePerUnit}
          </Text>
          <Text allowFontScaling={false} style={styles.orderedQuantityText}>
            {props.orderedQuantity}
          </Text>
          <Text allowFontScaling={false} style={styles.totalOrderText}>
            {props.totalOrder}
          </Text>
        </>
      )}
      {props?.status === OrderStatus.OPEN && (
        <>
          <Text allowFontScaling={false} style={styles.itemText}>
            {props.item}
          </Text>
          <Text allowFontScaling={false} style={styles.itemPricePerUnitText}>
            {props.pricePerUnit}
          </Text>
          <Text allowFontScaling={false} style={styles.orderedQuantityText}>
            {props.orderedQuantity}
          </Text>
          <Text allowFontScaling={false} style={styles.totalOrderText}>
            {props.totalOrder}
          </Text>
        </>
      )}
      {props?.status === OrderStatus.CONFIRMED && (
        <>
          <Text allowFontScaling={false} style={styles.itemText}>
            {props.item}
          </Text>
          <Text allowFontScaling={false} style={styles.itemPricePerUnitText}>
            {props.pricePerUnit}
          </Text>
          <Text allowFontScaling={false} style={styles.orderedQuantityText}>
            {props.orderedQuantity}
          </Text>
          <Text allowFontScaling={false} style={styles.totalOrderText}>
            {props.totalOrder}
          </Text>
        </>
      )}
      {props?.status === OrderStatus.DELIVERY_IN_PROGRESS && (
        <>
          <Text
            allowFontScaling={false}
            style={styles.DeliveryInProgressItemText}>
            {props.item}
          </Text>
          <Text allowFontScaling={false} style={styles.itemPriceText}>
            {props.priceUnit}
          </Text>
          <Text allowFontScaling={false} style={styles.itemAvailabilityText}>
            {props.availability}
          </Text>
          <Text allowFontScaling={false} style={styles.itemQuantityText}>
            {props.quantity}
          </Text>
          <Text allowFontScaling={false} style={styles.itemTotalText}>
            {props.total}
          </Text>
        </>
      )}
      {props?.status === OrderStatus.DELIVERED && (
        <>
          <Text allowFontScaling={false} style={styles.deliveredItem}>
            {props.item}
          </Text>
          <Text allowFontScaling={false} style={styles.deliveredPriceText}>
            {props.deliveredPrice}
          </Text>
          <Text allowFontScaling={false} style={styles.orderedQty}>
            {props.orderedQty}
          </Text>
          <Text allowFontScaling={false} style={styles.deliveredQtyText}>
            {props.deliveredQty}
          </Text>
          <Text allowFontScaling={false} style={styles.itemTotalText}>
            {props.deliveredTotal}
          </Text>
        </>
      )}
    </View>
  );
};

export default TableHeader;
