import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  paymentSuccessView: {
    flex: 1,
  },
  paymentSuccessMainView: {
    flex: 1,
    backgroundColor: '#F26522',
    alignItems: 'center',
  },
  designImage: {
    width: '100%',
    height: scaledValue(948.8),
    bottom: 0,
    position: 'absolute',
  },
  tickImage: {
    width: scaledValue(221),
    height: scaledValue(221),
    marginTop: scaledValue(113),
  },
  paymentIdText: {
    color: '#fff',
    fontSize: scaledValue(32),
    lineHeight: scaledValue(47),
    width: scaledValue(366),
    textAlign: 'center',
    marginTop: scaledValue(29),
    fontFamily: 'Lato-Medium',
  },
  paymentScreenSecondary: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  emptyView: {
    height: scaledValue(215.54),
  },
  orderCard: {
    height: scaledValue(226.55),
    marginBottom: scaledValue(71.45),
    borderRadius: scaledValue(15),
    elevation: 0.6,
    paddingHorizontal: scaledValue(45),
    justifyContent: 'space-around',
  },
  orderCardTextView: {
    flexDirection: 'row',
  },
  rsRightText: {
    fontSize: scaledValue(31),
    lineHeight: scaledValue(37),
    fontFamily: 'Lato-Medium',
  },
  orderIdRightText: {
    fontSize: scaledValue(31),
    lineHeight: scaledValue(37),
    fontFamily: 'Lato-Medium',
  },
  orderStatusRightText: {
    fontSize: scaledValue(31),
    lineHeight: scaledValue(37),
    fontFamily: 'Lato-Medium',
  },
  rsLeftText: {
    color: 'gray',
    fontSize: scaledValue(31),
    lineHeight: scaledValue(37),
    marginRight: scaledValue(84.64),
    fontFamily: 'Lato-Medium',
  },
  orderLeftText: {
    color: 'gray',
    fontSize: scaledValue(31),
    lineHeight: scaledValue(37),
    marginRight: scaledValue(123),
    fontFamily: 'Lato-Medium',
  },
  orderStatusLeftText: {
    color: 'gray',
    fontSize: scaledValue(31),
    lineHeight: scaledValue(37),
    marginRight: scaledValue(198),
    fontFamily: 'Lato-Medium',
  },
});
