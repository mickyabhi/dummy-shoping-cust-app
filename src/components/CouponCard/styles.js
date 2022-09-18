import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  couponCodeView: {
    width: scaledValue(589),
    borderRadius: scaledValue(17),
    borderColor: '#D6D6D6',
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: scaledValue(21),
  },
  cardLeftView: {
    paddingVertical: scaledValue(7),
    paddingLeft: scaledValue(34),
    width: scaledValue(426),
  },
  cardRight: {
    width: scaledValue(163),
  },
  couponTitle: {
    fontSize: scaledValue(24),
    marginBottom: scaledValue(12.24),
    lineHeight: scaledValue(29),
  },
  couponDescription: {
    fontSize: scaledValue(16),
    marginBottom: scaledValue(11.76),
    lineHeight: scaledValue(21),
  },
  couponExpireDate: {
    fontSize: scaledValue(14),
    color: 'gray',
    lineHeight: scaledValue(17),
  },
  cardRightView: {
    backgroundColor: '#E5E5E5',
    flex: 1,
    borderTopRightRadius: scaledValue(17),
    borderBottomRightRadius: scaledValue(17),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: scaledValue(45),
    borderBottomLeftRadius: scaledValue(45),
  },
  rsText: {
    fontSize: scaledValue(36),
    marginBottom: scaledValue(13),
  },
});
