import * as React from 'react';
import {Dialog, Button, Paragraph} from 'react-native-paper';
import {StyleSheet, ToastAndroid} from 'react-native';
import {scaledValue} from '../../../utils/design.utils';
import {clearReducer, showLogOutModal} from '../../AppStore/actions';
import {useDispatch} from 'react-redux';
import crashlytics from '@react-native-firebase/crashlytics';
import {useNavigation} from '@react-navigation/native';
import {analytic} from '../../../utils/analytics';
import {signOutUser} from '../../../utils/common.utils';

const LogoutModal = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const logOutHandler = async () => {
    try {
      analytic().trackEvent('HomePage', {
        CTA: 'logoutDone',
      });

      await signOutUser();
      navigation.navigate('LoginScreen');
      dispatch(clearReducer(false));
      props.onDismiss();

      ToastAndroid.show('Logged out', ToastAndroid.SHORT);
    } catch (error) {
      crashlytics()?.recordError(error);
      console.log('error signout', error);
      ToastAndroid.show('Oops! Something went wrong!', ToastAndroid.SHORT);
    }
    navigation.navigate('LoginScreen');
  };

  return (
    <Dialog visible={props.visible} onDismiss={props.onDismiss}>
      <Dialog.Title style={styles.logoutText}>Logout</Dialog.Title>
      <Dialog.Content>
        <Paragraph style={styles.text}>
          Are you sure you want to logout?
        </Paragraph>
      </Dialog.Content>
      <Dialog.Actions style={styles.dialogActions}>
        <Button
          color="#F79939"
          onPress={() => {
            dispatch(showLogOutModal(false));
          }}>
          CANCEL
        </Button>
        <Button color="#F79939" onPress={logOutHandler}>
          OK
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
};
export default LogoutModal;

const styles = StyleSheet.create({
  logoutText: {
    fontFamily: 'Lato-Semibold',
    fontSize: scaledValue(31),
    marginBottom: scaledValue(26),
    color: '#000000',
  },
  text: {
    fontFamily: 'Lato-Semibold',
    fontSize: scaledValue(31),
    color: 'gray',
  },
  cancelText: {
    fontFamily: 'Lato-Bold',
    fontSize: scaledValue(31),
  },
  okText: {
    fontFamily: 'Lato-Bold',
    fontSize: scaledValue(31),
  },
  dialogActions: {
    justifyContent: 'space-around',
    marginBottom: scaledValue(44),
  },
});
