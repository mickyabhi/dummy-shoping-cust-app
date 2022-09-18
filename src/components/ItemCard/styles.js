import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  itemCardView: noImage => ({
    flexDirection: 'row',
    justifyContent: noImage == true ? 'flex-start' : 'space-between',
    alignItems: 'center',
    paddingVertical: scaledValue(22),
    borderBottomWidth: scaledValue(0.5),
    borderBottomColor: '#00000018',
  }),
  itemImage: {
    width: scaledValue(100),
    height: scaledValue(100),
  },
  ButtonUi: {
    justifyContent: 'flex-end',
  },
  textItemName: isEmptyCartImage => ({
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Medium',
    lineHeight: scaledValue(29),
    width: isEmptyCartImage !== true ? scaledValue(350) : scaledValue(480),
  }),
  textPrice: {
    fontSize: scaledValue(24),
    fontFamily: 'Lato-SemiBold',
    lineHeight: scaledValue(29),
  },
  textPercentage: {
    fontSize: scaledValue(18),
    color: '#F8993A',
    fontFamily: 'Lato-Medium',
    lineHeight: scaledValue(22),
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountText: {
    fontSize: scaledValue(18),
    marginLeft: scaledValue(25),
    textDecorationLine: 'line-through',
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(22),
  },
  textsView: noImage => ({
    justifyContent: 'space-between',
    marginLeft: noImage == true ? scaledValue(23) : null,
  }),
  deleteIconStyle: {
    width: scaledValue(25.18),
    height: scaledValue(32.83),
  },
});
