import {StyleSheet} from 'react-native';
import {OrderStatusMapping} from '../../utils/constants';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  cardView: {
    borderRadius: scaledValue(8),
    width: scaledValue(675),
    paddingTop: scaledValue(19),
    paddingLeft: scaledValue(14),
    paddingBottom: scaledValue(43),
    paddingRight: scaledValue(24.32),
    elevation: scaledValue(2),
    borderWidth: scaledValue(1),
    borderColor: '#CDCDCD',
  },
  statusText: status => ({
    position: 'absolute',
    right: scaledValue(31),
    top: scaledValue(32),
    lineHeight: scaledValue(28),
    fontFamily: 'Lato-Medium',
    color:
      status === OrderStatusMapping.CONFIRMED
        ? '#FF8000'
        : status === OrderStatusMapping.DELIVERED
        ? '#05A649'
        : status === OrderStatusMapping.DELIVERY_IN_PROGRESS
        ? '#B3C20F'
        : '#FF0000',
    letterSpacing: scaledValue(0.68),
    fontSize: scaledValue(23),
  }),

  idText: {
    color: '#000000',
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Medium',
    paddingTop: scaledValue(13),
  },
  dateText: {
    color: 'gray',
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Regular',
    marginTop: scaledValue(8),
  },
  ellipseImage: {
    width: scaledValue(83),
    height: scaledValue(83),
  },
  labelText: {
    fontSize: scaledValue(23),
    color: '#fff',
    textTransform: 'uppercase',
  },
  labelStyles: {
    backgroundColor: '#F89A3A',
    marginRight: scaledValue(19),
  },
  storeNameText: {
    fontSize: scaledValue(24),
    color: '#000000',
    fontFamily: 'Lato-Medium',
    marginTop: scaledValue(31),
    marginBottom: scaledValue(16),
    textTransform: 'capitalize',
  },
  cityText: {
    fontSize: scaledValue(24),
    color: 'gray',
    fontFamily: 'Lato-Regular',
    marginBottom: scaledValue(28),
    width: scaledValue(480),
  },
  phoneIconStyles: {
    marginRight: scaledValue(35.2),
  },
  iconsStyles: {
    flexDirection: 'row',
    position: 'absolute',
    right: scaledValue(24.32),
    bottom: scaledValue(61.78),
  },
  statusMessage: {
    fontSize: scaledValue(24),
    color: '#2F5516',
    fontFamily: 'Lato-Medium',
    textAlign: 'right',
    position: 'absolute',
    bottom: scaledValue(20),
    right: scaledValue(24),
  },
});
