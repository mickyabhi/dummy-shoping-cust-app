import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  paymentCardView: props => ({
    borderBottomWidth:
      props.borderWidth === undefined ? 0.4 : props.borderWidth,
    borderBottomColor: 'gray',
    flexDirection: 'row',
    height: scaledValue(163),
    alignItems: 'center',
  }),
  paymentTypeImage: props => ({
    width: scaledValue(77),
    height:
      props.paymentTypeText === 'Pay Online'
        ? scaledValue(90)
        : scaledValue(42),
    marginRight: scaledValue(25),
  }),
  paymentMethodName: {
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Semibold',
  },
  paymentMethodDescription: {
    color: '#575757',
    fontSize: scaledValue(22),
    width: scaledValue(476),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(27),
  },
  paymentMethodView: {
    width: scaledValue(476),
  },
});
