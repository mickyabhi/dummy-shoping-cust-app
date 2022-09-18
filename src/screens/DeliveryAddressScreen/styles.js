import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryAddressHeader: {
    paddingHorizontal: scaledValue(42),
    paddingVertical: scaledValue(18),
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  savedAddressText: {
    color: 'gray',
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Regular',
  },
  defaultAddressText: {
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Medium',
  },
  homeText: {
    color: '#F89939',
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Medium',
  },
  rightSideTextView: {
    flexDirection: 'row',
  },
  chooseAddressText: {
    width: scaledValue(535),
    fontSize: scaledValue(26),
    marginTop: scaledValue(26),
    fontFamily: 'Lato-Regular',
  },
  chooseAddressView: {
    marginBottom: scaledValue(84),
  },
  buttonView: {
    paddingHorizontal: scaledValue(50),
  },
  touchableOpacityStyle: {
    flexDirection: 'row',
  },
});
