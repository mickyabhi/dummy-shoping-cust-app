import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  CountButtonView: {
    width: scaledValue(156),
    height: scaledValue(56),
    borderWidth: 1,
    borderRadius: scaledValue(8),
    borderColor: '#FD7609',
    flexDirection: 'row',
  },
  countButtonTitle: {
    color: '#fff',
  },
  subtractionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countView: {
    flex: 1,
    backgroundColor: '#F78B1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: '#F78B1E',
  },
});
