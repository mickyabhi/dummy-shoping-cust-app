import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  cartUpperView: {
    flex: 1,
  },
  locationImage: {
    height: scaledValue(31),
    width: scaledValue(24.12),
  },
  locationView: {
    paddingHorizontal: scaledValue(49),
    flexDirection: 'row',
    paddingTop: scaledValue(29.7),
    paddingBottom: scaledValue(22.3),
  },
  locationText: {
    fontSize: scaledValue(20),
    color: 'gray',
    marginHorizontal: scaledValue(20),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(24),
  },
  itemsCardView: {
    paddingHorizontal: scaledValue(48),
  },
  footerViewInScreen: {
    bottom: 0,
  },
  dropDownImg: {
    height: scaledValue(12.46),
    width: scaledValue(21.26),
    marginTop: scaledValue(6.5),
  },
  addMoreView: {
    backgroundColor: '#2F7E26',
    width: scaledValue(97),
    height: scaledValue(97),
  },
  plusIcon: {
    width: scaledValue(122),
    height: scaledValue(122),
  },
  plusIconRight: {
    left: scaledValue(314),
    position: 'absolute',
    bottom: scaledValue(56),
  },
});
