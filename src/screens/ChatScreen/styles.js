import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  chatScreenView: {
    flex: 1,
  },
  chatScreenMainView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  chatView: {
    flex: 1,
  },
  orderIdView: {
    height: scaledValue(76),
    justifyContent: 'center',
    zIndex: 2,
  },
  orderIdText: {
    fontSize: scaledValue(24),
    color: '#868686',
    fontFamily: 'Lato-Medium',
    textAlign: 'center',
  },
  inputText: {
    fontSize: scaledValue(26),
    width: scaledValue(535),
    height: scaledValue(100),
  },

  iconView: message => ({
    width: scaledValue(110),
    height: scaledValue(100),
    backgroundColor: message != '' ? '#F8993A' : '#FBCC9C',
    borderRadius: scaledValue(8),
    alignItems: 'center',
    justifyContent: 'center',
  }),
  rightArrowIcon: {
    width: scaledValue(48.64),
    height: scaledValue(48.05),
    tintColor: '#fff',
  },

  mainView: {flex: 1, paddingHorizontal: scaledValue(47)},
  inputMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaledValue(58),
  },
});
