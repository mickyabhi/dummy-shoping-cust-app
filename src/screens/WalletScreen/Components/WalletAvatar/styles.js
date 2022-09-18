import {StyleSheet} from 'react-native';
import {scaledValue} from '../../../../utils/design.utils';

export const styles = StyleSheet.create({
  receivedView: isLast => ({
    alignItems: 'center',
    borderRightWidth: isLast ? null : scaledValue(2),
    borderColor: '#4A4A4A',
    width: scaledValue(150),
  }),
  detailText: color => ({
    fontSize: scaledValue(25),
    fontFamily: 'Lato-Semibold',
    color: color,
    marginTop: scaledValue(7),
    textAlign: 'center',
  }),
});
