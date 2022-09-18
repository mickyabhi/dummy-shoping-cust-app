import {StyleSheet} from 'react-native';
import {scaledValue} from '../../../utils/design.utils';

export const styles = StyleSheet.create({
  dropDownValue: {
    padding: scaledValue(15),
    borderBottomColor: 'gray',
    borderBottomWidth: scaledValue(1),
  },
  dropDownValueNoBorder: {
    padding: scaledValue(15),
  },
  pickerContainer: {
    paddingHorizontal: scaledValue(30),
    paddingVertical: scaledValue(20),
  },
  divider: {
    borderWidth: scaledValue(1),
    borderColor: 'grey',
  },
  cityView: {
    padding: scaledValue(15),
  },
});
