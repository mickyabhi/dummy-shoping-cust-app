import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  orderItemsDetailView: props => ({
    flexDirection: 'row',
    borderBottomWidth: props.isLast ? null : scaledValue(1),
    borderBottomColor: '#C2C2C2',
    alignItems: 'center',
    paddingVertical: scaledValue(24),
    justifyContent: 'space-between',
    paddingHorizontal: scaledValue(17),
  }),
  itemView: {
    width: scaledValue(133),
  },
  productText: {
    fontSize: scaledValue(21),
    width: scaledValue(140),
    lineHeight: scaledValue(26),
    fontFamily: 'Lato-Regular',
  },
  priceView: {
    width: scaledValue(90),
    marginLeft: scaledValue(30),
  },
  orderItemPriceText: {
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Medium',
  },
  quantityView: {
    width: scaledValue(90),
    marginLeft: scaledValue(45),
  },
  quantityText: {
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Medium',
  },
  totalTextView: {
    width: scaledValue(100),
    marginLeft: scaledValue(45),
  },
  totalText: {
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Medium',
  },

  deliveryInProgressItmPriceView: {
    width: scaledValue(90),
    marginLeft: scaledValue(50),
  },
  deliveryInProgressItmPriceText: {
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Medium',
  },
  availabilityView: {
    width: scaledValue(20),
    marginLeft: scaledValue(50),
  },
  deliveryInProgressQtyView: {
    width: scaledValue(30),
    marginLeft: scaledValue(50),
  },
  orderItemQuantityText: {
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Medium',
  },
  orderItemTotalView: {
    width: scaledValue(90),
    marginLeft: scaledValue(40),
  },
  orderItemTotalText: {
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Semibold',
  },

  deliveredItmPriceView: {
    width: scaledValue(90),
    marginLeft: scaledValue(40),
  },
  deliveredItmPriceText: {
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Medium',
  },
  orderedQtyView: {
    width: scaledValue(80),
    marginLeft: scaledValue(40),
  },
  orderedQtyText: {
    width: scaledValue(100),
    fontSize: scaledValue(23),
  },
  deliveredQtyView: {
    width: scaledValue(80),
    marginLeft: scaledValue(40),
  },
  deliveredQtyText: {
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Medium',
  },
  deliveredTotalView: {
    width: scaledValue(90),
    marginLeft: scaledValue(40),
  },
  deliveredTotalText: {
    fontSize: scaledValue(21),
    fontFamily: 'Lato-Medium',
  },
});
