import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  textViewDeliveryAddress: {
    paddingHorizontal: scaledValue(30),
    paddingTop: scaledValue(31),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textAddress: {
    color: 'gray',
    fontSize: scaledValue(22),
    marginBottom: scaledValue(20),
    textTransform: 'capitalize',
  },
  textLandMark: {
    width: scaledValue(529),
    color: 'gray',
    fontSize: scaledValue(22),
    marginBottom: scaledValue(43),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(32),
  },
  deliveryDetail: {
    height: scaledValue(279),
    width: '100%',
    paddingHorizontal: scaledValue(30),
    paddingTop: scaledValue(18),
    paddingBottom: scaledValue(32),
    backgroundColor: '#F8F8F8',
  },
  locationImage: {
    height: scaledValue(31),
    width: scaledValue(24.12),
    marginRight: scaledValue(20.88),
  },
  leftText: {
    flexDirection: 'row',
  },
  deliveryDetailOptionTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: scaledValue(10),
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  rightViewText: {
    alignItems: 'flex-end',
  },
  deliveryOptionDetailText: {
    fontSize: scaledValue(24),
    marginRight: scaledValue(2.77),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(29),
  },
  lowerDeliveryDetail: {
    paddingVertical: scaledValue(24),
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    width: scaledValue(25.17),
    height: scaledValue(25.17),
  },
  outerLowerDeliveryDetail: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryTimePeriod: {
    width: '100%',
    height: scaledValue(73),
    borderWidth: scaledValue(1),
    borderColor: '#707070',
    borderRadius: scaledValue(4),
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: scaledValue(26),
    justifyContent: 'space-between',
    marginTop: scaledValue(6),
  },
  timeIcon: {
    width: scaledValue(22),
    height: scaledValue(22),
    marginRight: scaledValue(24),
    alignSelf: 'center',
  },
  dropDownIcon: {
    width: scaledValue(22.72),
    height: scaledValue(13.31),
    tintColor: '#FF8800',
  },
  deliveryTimePeriodRightView: {
    flexDirection: 'row',
  },
  deliveryTimePeriodText: {
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(29),
  },
  viewForProceedToPayButton: {
    height: '100%',
    alignItems: 'center',
    paddingVertical: scaledValue(43),
  },
  tooltipText: {
    color: '#000',
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Regular',
  },
  tooltipTouchableOpacity: {
    width: scaledValue(42),
    height: scaledValue(40),
    borderRadius: scaledValue(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
