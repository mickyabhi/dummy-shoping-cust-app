import React, {useState, useEffect} from 'react';
import {Modal, Text} from 'react-native-paper';
import {scaledValue} from '../../../utils/design.utils';
import {FlatList, StyleSheet, View} from 'react-native';
import ItemCard from '../../../components/ItemCard';
import deleteImage from '../../../../assets/images/delete_image.png';

const OrderItemModal = props => {
  const [storeCartItems, setStoreCartItems] = useState(null);

  useEffect(() => {
    setStoreCartItems(props?.storeCartItems);
  }, [props]);

  const containerStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    top: scaledValue(472),
    left: scaledValue(42),
    right: scaledValue(42),
    borderRadius: scaledValue(8),
  };

  return (
    <Modal
      visible={props.visible}
      onDismiss={props.onDismiss}
      contentContainerStyle={containerStyle}>
      <View style={styles.modalMainView}>
        <View style={styles.modalHeadingView}>
          <Text allowFontScaling={false} style={styles.itemText}>{`${
            props.storeCartItemsLength ? props.storeCartItemsLength : ''
          } Items`}</Text>
          <Text allowFontScaling={false} style={styles.itemPriceText}>
            ₹{props?.cartValue}
          </Text>
        </View>
        <FlatList
          data={storeCartItems}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ItemCard
              noImage
              storeProduct={item?.storeProduct}
              onPress={() => {
                props.onDismiss();
              }}
            />
          )}
        />
      </View>
    </Modal>
  );
};
export default OrderItemModal;
const styles = StyleSheet.create({
  modalHeadingView: {
    height: scaledValue(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#707070',
    paddingHorizontal: scaledValue(33.06),
    paddingVertical: scaledValue(21),
  },
  itemText: {color: 'gray', fontSize: scaledValue(24)},
  itemPriceText: {fontSize: scaledValue(28)},
  modalMainView: {
    paddingHorizontal: scaledValue(33.06),
    height: scaledValue(500),
  },
});
