import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  userProfileView: {
    flex: 1,
  },
  userProfileMainView: {
    flex: 1,
    alignItems: 'center',
  },
  touchableViewUserProfileIcon: {
    marginTop: scaledValue(84.81),
    marginBottom: scaledValue(80.06),
  },
  userProfileImage: {
    width: scaledValue(167.13),
    height: scaledValue(167.13),
  },
  inputContainer: {
    width: scaledValue(642.56),
    borderWidth: scaledValue(1),
    borderColor: '#0000004D',
    borderRadius: scaledValue(24),
    marginBottom: scaledValue(72.5),
    paddingHorizontal: scaledValue(15),
  },
  input: {
    backgroundColor: 'transparent',
    fontSize: scaledValue(26),
    fontFamily: 'Lato-Regular',
    height: scaledValue(106.58),
  },
  avatarImage: {
    width: scaledValue(173.03),
    height: scaledValue(167.17),
    backgroundColor: '#FFFFFF',
  },
  userImage: {
    width: scaledValue(173.03),
    height: scaledValue(167.17),
    backgroundColor: '#FFFFFF',
    borderRadius: scaledValue(173.03 / 2),
  },
  loaderView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    width: scaledValue(30),
    height: scaledValue(30),
    position: 'absolute',
    right: scaledValue(-8),
    bottom: scaledValue(10),
  },
});
