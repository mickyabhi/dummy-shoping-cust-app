import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  relatedItemCardView: {
    width: scaledValue(214),
    height: scaledValue(258),
    borderRadius: scaledValue(8),
    borderColor: '#D1D1D1',
    borderWidth: 1,
    padding: scaledValue(15),
    marginRight: scaledValue(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgRelatedItemCard: {
    width: scaledValue(106),
    height: scaledValue(72),
    marginBottom: scaledValue(8),
  },
  itemNameCard2Text: {
    fontSize: scaledValue(16),
    fontFamily: 'Lato-Medium',
    lineHeight: scaledValue(22),
    textAlign: 'center',
  },
  centerTextsView: {
    flexDirection: 'row',
    marginBottom: scaledValue(8),
    marginTop: scaledValue(8),
    alignItems: 'center',
  },
  relatedItemCardRs: {
    fontSize: scaledValue(15),
    marginRight: scaledValue(30),
    fontFamily: 'Lato-Semibold',
    lineHeight: scaledValue(18),
  },
  itemRealRs: {
    fontSize: scaledValue(12),
    textAlign: 'center',
    textDecorationLine: 'line-through',
  },
  itemDiscount: {
    fontSize: scaledValue(14),
    color: '#F78B1E',
    marginBottom: scaledValue(6),
    fontFamily: 'Lato-Medium',
    lineHeight: scaledValue(17),
  },
});
