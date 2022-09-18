import {Platform, StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: scaledValue(53.72),
    paddingTop: scaledValue(49),
  },
  shareLocationText: {
    color: '#484848',
    fontSize: scaledValue(42),
    textAlign: 'center',
    width: scaledValue(610),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(55),
    marginHorizontal: scaledValue(17.28),
  },
  addressText: {
    fontSize: scaledValue(26),
    marginTop: scaledValue(49),
    color: '#484848',
    marginBottom: scaledValue(35),
    fontFamily: 'Lato-SemiBold',
    lineHeight: scaledValue(32),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: 'transparent',
    fontSize: scaledValue(26),
    fontFamily: 'Lato-Regular',
    height: scaledValue(106.58),
  },
  cityInput: {
    backgroundColor: 'transparent',
    fontSize: scaledValue(26),
    fontFamily: 'Lato-Regular',
    height: scaledValue(106.58),
    borderBottomWidth: scaledValue(1),
    borderColor: '#0000004D',
  },
  inputContainer: {
    marginTop: scaledValue(57),
    elevation: 1.2,
    paddingHorizontal: scaledValue(15),
    shadowColor: '#0000004D',
    borderRadius: scaledValue(24),
    width: '100%',
  },
  inputTextContainer: {
    marginTop: scaledValue(59),
    paddingHorizontal: scaledValue(15),
    borderRadius: scaledValue(24),
    width: '100%',
    flex: 1,
    ...Platform.select({
      ios: {
        borderWidth: scaledValue(1),
        borderColor: '#0000004D',
      },
      android: {
        elevation: 1.2,
        shadowColor: '#0000004D',
      },
    }),
  },
  buttonStyle: {
    paddingTop: scaledValue(54.5),
    marginBottom: scaledValue(103.9),
  },
  textStyle: {
    fontSize: scaledValue(26),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(32),
  },
});
