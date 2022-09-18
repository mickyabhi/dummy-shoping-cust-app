import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scaledValue} from '../../../utils/design.utils';
import Button from '../../../components/Button';
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import API from '@aws-amplify/api';

const CartStoreCard = props => {
  const [storeCartItems, setStoreCartItems] = useState(null);
  const [cartValue, setCartValue] = useState(0);
  const [store, setStore] = useState(null);

  const loadStore = async storeId => {
    const str = await API.graphql({
      query: queries.getStore,
      variables: {id: storeId},
    }).then(res => {
      return res?.data?.getStore;
    });
    setStore(str);
  };

  const loadStoreCartItems = async cartId => {
    let cartsItems = await API.graphql({
      query: queries.cartsItemsByCartId,
      variables: {cartId: cartId, limit: 10000},
    }).then(res => res?.data?.cartsItemsByCartId?.items);
    cartsItems = cartsItems?.filter(
      cartsItem => cartsItem?.storeProduct != null,
    );

    setStoreCartItems(cartsItems);

    let originalCartValue = 0;
    cartsItems?.forEach(cartsItem => {
      if (cartsItem?.storeProduct?.sellingPrice)
        originalCartValue +=
          cartsItem?.storeProduct.sellingPrice * cartsItem?.quantity;
    });
    setCartValue(originalCartValue);
  };

  useEffect(() => {
    loadStoreCartItems(props?.cart?.id);
    loadStore(props?.cart?.storeId);
  }, []);

  return (
    <View style={styles.CartStoreCardView}>
      <View style={styles.storeTitleView}>
        <Text allowFontScaling={false} style={styles.storeNameText}>
          {store?.name}
        </Text>
        <Text allowFontScaling={false} style={styles.cardSmallerText}>
          {store?.city}
        </Text>
      </View>
      <Text allowFontScaling={false} style={styles.subTitle}>
        {store?.category}
      </Text>
      <View style={styles.storeTitleView}>
        <View style={styles.orderValueTextView}>
          <Text allowFontScaling={false} style={styles.storeNameText}>
            Order Value:
          </Text>
          <Text allowFontScaling={false} style={styles.rsText}>
            {' '}
            ₹{cartValue?.toFixed(2)}
          </Text>
        </View>
        <Text allowFontScaling={false} style={styles.itemCountText}>
          {storeCartItems?.length} Items
        </Text>
      </View>
      <View style={styles.buttonsView}>
        <Button
          borderRadius={scaledValue(8)}
          backgroundColor="gray"
          borderColor="gray"
          title="Delete cart"
          color="#fff"
          width={scaledValue(300)}
          height={scaledValue(57)}
          onPress={props.onPressDelete}
        />
        <Button
          borderRadius={scaledValue(8)}
          backgroundColor="#F8993A"
          borderColor="#F8993A"
          title="View Items"
          color="#fff"
          width={scaledValue(300)}
          height={scaledValue(57)}
          onPress={props.onPress}
        />
      </View>
    </View>
  );
};
export default CartStoreCard;
const styles = StyleSheet.create({
  CartStoreCardView: {
    width: scaledValue(668),
    borderRadius: scaledValue(8),
    paddingTop: scaledValue(19),
    paddingHorizontal: scaledValue(19),
    paddingBottom: scaledValue(28),
    borderWidth: scaledValue(1),
    borderColor: '#CDCDCD',
    shadowColor: '#CDCDCD',
    // elevation: scaledValue(4),
    marginBottom: scaledValue(24),
  },
  storeTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  storeNameText: {
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Semibold',
  },
  rsText: {
    fontSize: scaledValue(30),
    fontFamily: 'Lato-Semibold',
  },
  orderValueTextView: {
    flexDirection: 'row',
    fontSize: scaledValue(24),
  },
  buttonsView: {
    flexDirection: 'row',
    width: scaledValue(628),
    justifyContent: 'space-between',
    marginTop: scaledValue(14),
  },
  cardSmallerText: {
    color: '#CDCDCD',
    fontSize: scaledValue(18),
    fontFamily: 'Lato-Semibold',
  },
  subTitle: {
    color: '#CDCDCD',
    fontSize: scaledValue(18),
    marginBottom: scaledValue(14),
    marginTop: scaledValue(3),
  },
  itemCountText: {
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Regular',
  },
});
