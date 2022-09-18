import React, {useEffect, useState} from 'react';
import {Modal, Text} from 'react-native-paper';
import {scaledValue} from '../../../utils/design.utils';
import {FlatList, StyleSheet, View, TouchableOpacity} from 'react-native';
import ItemCard from '../../../components/ItemCard';
import {Divider} from 'react-native-paper';

const DeleteCartItemModal = props => {
  const [cartItemId, setCartItemId] = useState(null);

  useEffect(() => {
    setCartItemId(props?.cartItem?.id);
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
        <Text allowFontScaling={false} style={styles.deleteText}>
          Are you sure you want to delete this item
        </Text>
        <Divider style={styles.divider} />
        <ItemCard
          storeProduct={props?.cartItem?.storeProduct}
          isEmptyCartImage
        />
        <View style={styles.confirmView}>
          <TouchableOpacity onPress={() => props?.removeCartItem(cartItemId)}>
            <Text allowFontScaling={false} style={styles.textYes}>
              Yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.onDismiss()}>
            <Text allowFontScaling={false} style={styles.textCancel}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default DeleteCartItemModal;
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
  modalMainView: {paddingHorizontal: scaledValue(33.06)},
  deleteText: {
    fontSize: scaledValue(35),
    fontFamily: 'Lato-Semibold',
    textAlign: 'center',
    marginHorizontal: scaledValue(117),
    marginTop: scaledValue(35),
  },
  divider: {
    backgroundColor: '#000',
    marginTop: scaledValue(35),
  },
  confirmView: {
    flexDirection: 'row',
    paddingHorizontal: scaledValue(112),
    justifyContent: 'space-between',
    paddingVertical: scaledValue(36),
  },
  textYes: {
    fontSize: scaledValue(36),
    color: '#FF8800',
  },
  textCancel: {
    fontSize: scaledValue(36),
  },
});
