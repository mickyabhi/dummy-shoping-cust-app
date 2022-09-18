import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  addressScreenView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardView: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 4,
    flexDirection: 'row',
    height: scaledValue(146),
    alignItems: 'center',
  },
  addAddressImage: {
    height: scaledValue(53),
    width: scaledValue(45),
    marginLeft: scaledValue(51),
    marginRight: scaledValue(39),
  },
  addAddressText: {
    fontSize: scaledValue(30),
    fontFamily: 'Lato-Semibold',
  },
  saveAddressView: {
    paddingTop: scaledValue(48.28),
    paddingBottom: scaledValue(48.28),
    paddingLeft: scaledValue(135.5),
  },
  saveAddressText: {
    textTransform: 'uppercase',
    color: 'gray',
    fontSize: scaledValue(16),
    fontFamily: 'Lato-Bold',
  },
  divider: {
    backgroundColor: '#0000004D',
    width: scaledValue(614.5),
    marginLeft: scaledValue(135.5),
  },
});
