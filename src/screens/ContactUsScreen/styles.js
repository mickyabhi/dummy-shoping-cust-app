import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  contactUsView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contactUsCardView: {
    paddingVertical: scaledValue(35),
    flexDirection: 'row',
    paddingHorizontal: scaledValue(67.08),
  },
  contactImg: {
    width: scaledValue(45.26),
    height: scaledValue(77.55),
    alignSelf: 'center',
    marginRight: scaledValue(76.67),
  },
  contactMsgText: {
    fontSize: scaledValue(36),
    lineHeight: scaledValue(57),
    fontFamily: 'Lato-Medium',
  },
  contactText: {
    fontFamily: 'Lato-Bold',
    fontSize: scaledValue(36),
    lineHeight: scaledValue(57),
    color: '#F3901E',
  },
  emailImg: {
    width: scaledValue(78.57),
    height: scaledValue(58.93),
    alignSelf: 'center',
    marginRight: scaledValue(48.78),
  },
});
