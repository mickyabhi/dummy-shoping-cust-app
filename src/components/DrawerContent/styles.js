import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  phnNumberText: {
    marginVertical: scaledValue(9),
    fontSize: scaledValue(20),
    color: '#fff',
  },
  userNameText: {
    paddingTop: scaledValue(25),
    fontSize: scaledValue(30),
    color: '#fff',
  },
  emailText: {
    fontSize: scaledValue(20),
    color: '#fff',
  },
  profileImg: {
    backgroundColor: '#F89A3A',
  },
  profileView: {
    paddingLeft: scaledValue(44),
    paddingTop: scaledValue(25),
    paddingBottom: scaledValue(25),
  },
  editButtonView: {
    position: 'absolute',
    right: scaledValue(28),
    top: scaledValue(68),
  },
  avatarImage: {
    backgroundColor: '#F89A3A',
  },
  rateUsImg: {
    width: scaledValue(42),
    height: scaledValue(42),
  },
  shareImg: {
    width: scaledValue(38),
    height: scaledValue(45),
  },
  logoutImg: {
    width: scaledValue(36.91),
    height: scaledValue(36.91),
  },
  labelStyle: {
    color: '#fff',
  },
  refundPolicyImg: {
    width: scaledValue(38),
    height: scaledValue(38),
  },
  privacyPolicyIcon: {
    width: scaledValue(27.32),
    height: scaledValue(35.86),
  },
  versionTextView: {
    paddingTop: scaledValue(25),
    paddingBottom: scaledValue(25),
    fontSize: scaledValue(20),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: '#fff',
  },
});
