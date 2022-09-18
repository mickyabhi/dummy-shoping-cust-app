import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  subCategoryView: {
    width: scaledValue(200),
    height: scaledValue(100),
    borderColor: '#BFBFBF',
    borderWidth: 1,
    borderRadius: scaledValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaledValue(15),
  },
  subCategoryViewSelected: {
    width: scaledValue(200),
    height: scaledValue(100),
    borderColor: '#F8993A',
    borderWidth: 1,
    borderRadius: scaledValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaledValue(15),
  },
  subCategoryText: {
    fontSize: scaledValue(24),
    textAlign: 'center',
    fontFamily: 'Lato-Medium',
    lineHeight: scaledValue(29),
  },
});
