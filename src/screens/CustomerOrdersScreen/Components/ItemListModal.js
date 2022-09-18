import * as React from 'react';
import {Modal} from 'react-native-paper';
import {scaledValue} from '../../../utils/design.utils';
import {StyleSheet, View} from 'react-native';
import ItemCard from '../../../components/ItemCard';

const ItemListModal = props => {
  return (
    <Modal
      visible={props.visible}
      onDismiss={props.onDismiss}
      contentContainerStyle={styles.containerStyle}>
      <View style={styles.modalMainView}>
        <ItemCard cardImage={null} />
        <ItemCard cardImage={null} />
        <ItemCard cardImage={null} />
      </View>
    </Modal>
  );
};

export default ItemListModal;

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
  containerStyle: {
    backgroundColor: 'white',
    position: 'absolute',
    top: scaledValue(472),
    left: scaledValue(42),
    right: scaledValue(42),
    borderRadius: scaledValue(8),
  },
  itemText: {
    color: 'gray',
    fontSize: scaledValue(24),
  },
  itemPriceText: {
    fontSize: scaledValue(28),
  },
  modalMainView: {
    paddingHorizontal: scaledValue(33.06),
  },
});
