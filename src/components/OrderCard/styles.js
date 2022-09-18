import {StyleSheet} from 'react-native';
import {OrderStatus} from '../../utils/constants';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  cardView: {
    borderRadius: scaledValue(8),
    width: scaledValue(668),
    paddingHorizontal: scaledValue(15),
    paddingTop: scaledValue(13),
    paddingBottom: scaledValue(18),
    elevation: scaledValue(0.5),
    borderColor: '#CDCDCD',
    borderWidth: scaledValue(1),
    marginBottom: scaledValue(20),
  },
  statusText: order => ({
    position: 'absolute',
    right: scaledValue(31),
    top: scaledValue(8),
    lineHeight: scaledValue(28),
    fontFamily: 'Lato-Medium',
    color:
      order?.orderStatus === OrderStatus.CONFIRMED
        ? '#FF8000'
        : order?.orderStatus === OrderStatus.DELIVERY_IN_PROGRESS
        ? '#B3C20F'
        : order?.orderStatus === OrderStatus.DELIVERED
        ? '#05A649'
        : order?.orderStatus === OrderStatus.OPEN
        ? '#FF8000'
        : '#FF0000',
    letterSpacing: scaledValue(0.68),
    fontSize: scaledValue(23),
  }),
  cardTitle: {
    fontSize: scaledValue(28),
    fontFamily: 'Lato-Medium',
    lineHeight: scaledValue(29.2),
    justifyContent: 'center',
    textTransform: 'capitalize',
  },
  cityText: {
    fontSize: scaledValue(28),
    color: 'gray',
    fontFamily: 'Lato-Regular',
    marginTop: scaledValue(4),
    marginBottom: scaledValue(10),
  },
  orderText: {
    color: 'gray',
    fontSize: scaledValue(28),
    fontFamily: 'Lato-Regular',
    marginRight: scaledValue(27),
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: scaledValue(28),
    color: '#000000',
  },

  orderIdTextView: {
    flexDirection: 'row',
    marginTop: scaledValue(10),
    fontFamily: 'Lato-Regular',
  },
  dateTextView: {
    flexDirection: 'row',
    marginTop: scaledValue(10),
    marginBottom: scaledValue(10),
    fontFamily: 'Lato-Regular',
    alignItems: 'center',
  },
  viewItemText: {
    color: '#FF8800',
    fontFamily: 'Lato-Medium',
    fontSize: scaledValue(24),
  },
  timerText: {
    alignItems: 'flex-end',
  },
  cancelOrderText: {
    color: '#FBCC9C',
    fontSize: scaledValue(24),
  },

  scheduledDeliveryTime: {
    position: 'absolute',
    right: scaledValue(14),
    bottom: scaledValue(17),
    color: '#2F5516',
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Medium',
  },
  buttonDesign: {
    right: 0,
    position: 'absolute',
  },
  viewItemTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rateView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: scaledValue(314.27),
  },
  rateContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewText: {fontSize: scaledValue(24), color: '#FF8800'},
  submitReview: {
    marginVertical: scaledValue(35),
    textAlign: 'right',
    color: '#FF8800',
  },
  timer: {
    position: 'absolute',
    right: 0,
    top: scaledValue(18),
    color: '#646464',
    fontFamily: 'Lato-Medium',
    fontSize: scaledValue(24),
  },
  codIconStyle: {
    width: scaledValue(110),
    height: scaledValue(110),
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
