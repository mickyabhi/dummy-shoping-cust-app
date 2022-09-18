import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  ItemCategoriesCardView: {
    width: scaledValue(190),
    height: scaledValue(100),
    borderColor: '#BFBFBF',
    borderWidth: 1,
    borderRadius: scaledValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaledValue(15),
  },
  ItemCategoriesCardViewSelected: {
    width: scaledValue(190),
    height: scaledValue(100),
    borderColor: '#F8993A',
    borderWidth: 1,
    borderRadius: scaledValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaledValue(15),
  },
  itemCategoriesNameText: {
    fontSize: scaledValue(24),
    textAlign: 'center',
    fontFamily: 'Lato-Medium',
    lineHeight: scaledValue(29),
  },
  ItemCategoriesIcon: {
    width: scaledValue(54.05),
    height: scaledValue(49),
  },
});
