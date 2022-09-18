import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  paymentMethodView: {
    flex: 1,
  },
  digitalPaymentMethodView: {
    paddingRight: scaledValue(51),
    paddingLeft: scaledValue(25),
  },
  onlinePaymentText: {
    fontSize: scaledValue(30),
    marginTop: scaledValue(42),
    marginLeft: scaledValue(25),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(36),
  },
  paymentMsgText: {
    color: '#575757',
    marginLeft: scaledValue(25),
    fontSize: scaledValue(22),
    marginTop: scaledValue(10),
    marginBottom: scaledValue(70),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(27),
  },
  cardAndNetBankingView: {
    borderBottomColor: 'gray',
    borderTopColor: 'gray',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    paddingRight: scaledValue(51),
    paddingLeft: scaledValue(25),
    marginTop: -0.5,
  },
  otherOptionText: {
    fontSize: scaledValue(30),
    marginTop: scaledValue(30),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(36),
  },
  cashOnDeliveryView: {
    paddingRight: scaledValue(51),
    paddingLeft: scaledValue(25),
  },
});
