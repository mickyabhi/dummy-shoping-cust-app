import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  itemsHeaderView: {
    flexDirection: 'row',
    backgroundColor: '#F89A3A',
    paddingHorizontal: scaledValue(30),
    paddingVertical: scaledValue(28),
    alignItems: 'center',
    borderTopRightRadius: scaledValue(8),
    borderTopLeftRadius: scaledValue(8),
    justifyContent: 'space-between',
  },

  itemAvailabilityText: {
    color: '#fff',
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Regular',
    marginRight: scaledValue(20),
    width: scaledValue(110),
  },
  itemPricePerUnitText: {
    color: '#fff',
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Regular',
    width: scaledValue(80),
    marginLeft: scaledValue(45),
    lineHeight: scaledValue(25),
  },
  itemPriceText: {
    color: '#fff',
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Regular',
    width: scaledValue(80),
    marginRight: scaledValue(20),
    lineHeight: scaledValue(25),
  },
  deliveredPriceText: {
    color: '#fff',
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Regular',
    width: scaledValue(80),
    lineHeight: scaledValue(25),
  },
  itemText: {
    color: '#fff',
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Regular',
  },
  deliveredItem: {
    color: '#fff',
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Regular',
    marginRight: scaledValue(100),
  },
  DeliveryInProgressItemText: {
    color: '#fff',
    fontSize: scaledValue(21),
    marginRight: scaledValue(110),
    width: scaledValue(71),
    fontFamily: 'Lato-Regular',
  },
  itemQuantityText: {
    color: '#fff',
    fontSize: scaledValue(21),
    marginRight: scaledValue(20),
    fontFamily: 'Lato-Regular',
    width: scaledValue(90),
  },
  deliveredQtyText: {
    color: '#fff',
    fontSize: scaledValue(21),
    marginRight: scaledValue(30),
    fontFamily: 'Lato-Regular',
    width: scaledValue(95),
  },
  orderedQuantityText: {
    color: '#fff',
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Regular',
    width: scaledValue(95),
  },
  orderedQty: {
    color: '#fff',
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Regular',
    width: scaledValue(95),
    marginLeft: scaledValue(20),
  },
  itemTotalText: {
    color: '#fff',
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Regular',
    marginRight: scaledValue(22),
  },
  totalOrderText: {
    color: '#fff',
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Regular',
    marginRight: scaledValue(32),
  },
});
