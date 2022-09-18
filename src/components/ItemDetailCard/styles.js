import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  itemDetailView: {
    flex: 1,
    paddingTop: scaledValue(23),
    paddingHorizontal: scaledValue(47),
    paddingBottom: scaledValue(38),
  },
  textItemsName: {
    fontSize: scaledValue(30),
    marginBottom: scaledValue(13),
    fontFamily: 'Lato-Medium',
    lineHeight: scaledValue(36),
  },
  textPrices: {
    fontSize: scaledValue(28),
    marginRight: scaledValue(12.46),
    fontFamily: 'Lato-Medium',
    lineHeight: scaledValue(34),
  },
  discountsText: {
    fontSize: scaledValue(22),
    alignSelf: 'center',
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(27),
    textDecorationLine: 'line-through',
  },
  textsPercentage: {
    fontSize: scaledValue(22),
    color: '#F78B1E',
    fontFamily: 'Lato-Medium',
    lineHeight: scaledValue(27),
  },
  pricesView: {
    flexDirection: 'row',
    marginBottom: scaledValue(7),
  },
  ItemDetail: {
    flex: 1,
    marginTop: scaledValue(38),
  },
  imagesView: {
    marginTop: scaledValue(38),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: scaledValue(48),
  },
  smallImg: {
    width: scaledValue(128),
    height: scaledValue(97),
    marginBottom: scaledValue(15),
  },
  bigImg: {
    width: scaledValue(448),
    height: scaledValue(348),
  },
  DotsMainView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveredMsgText: {
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(29),
  },
});
