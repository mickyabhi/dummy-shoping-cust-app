import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  View,
  Keyboard,
  Alert,
} from 'react-native';
import blocal_logo from '../../../assets/images/blocal_logo.png';
import mobile_image from '../../../assets/images/mobile_image.png';
import {scaledValue} from '../../utils/design.utils';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Input from '../../components/InputText';
import {TextInput, HelperText} from 'react-native-paper';
import {isNumeric} from '../../utils/common.utils';
import auth from '@react-native-firebase/auth';
import Geolocation from '@react-native-community/geolocation';
import {showLoading, showAlertToast} from '../AppStore/actions';
import {useDispatch} from 'react-redux';
import {setItemInAsyncStorage} from '../../utils/storage.utils';
import {analytic} from '../../utils/analytics';
import {AlertMessage, ErrorMessage} from '../../utils/constants';
import crashlytics from '@react-native-firebase/crashlytics';

const Login = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [phnNumber, setPhnNumber] = useState('' || editNumber);
  const [editNumber] = useState(showEditNumber?.slice(3));
  const [showEditNumber] = useState(props?.route?.params?.phoneNumber);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(data => {
      setLocation({
        latitude: data?.coords?.latitude?.toString(),
        longitude: data?.coords?.longitude?.toString(),
      });
    });
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      setItemInAsyncStorage('latitude', location.latitude);
      setItemInAsyncStorage('longitude', location.longitude);
      if (phnNumber?.length == 10) signInWithPhoneNumber();
    }
  }, [location]);

  const signInWithPhoneNumber = async () => {
    analytic().trackEvent('loginScreen', {
      CTA: 'getOtpButton',
      data: phnNumber,
    });

    if (location?.latitude == null) {
      Geolocation.getCurrentPosition(data => {
        setLocation({
          latitude: data?.coords?.latitude?.toString(),
          longitude: data?.coords?.longitude?.toString(),
        });
      });
    }
    try {
      Keyboard.dismiss();
      dispatch(showLoading(true));
      if (phnNumber != null) {
        const confirmation = await auth().signInWithPhoneNumber(
          '+91' + phnNumber,
          true,
        );
        if (confirmation != null) {
          dispatch(showLoading(false));
          navigation.replace('GetOtp', {
            userPhoneNumber: '+91' + phnNumber,
            confirmationObj: confirmation,
          });
        }
      }
    } catch (error) {
      crashlytics()?.recordError(error);
      dispatch(showLoading(false));
      if (error.code === ErrorMessage.NETWORK) {
        dispatch(
          showAlertToast({
            alertMessage: AlertMessage.NETWORK_CONNECTION_MESSAGE,
          }),
        );
      } else if (error.code === ErrorMessage.INVALID_PHONE_NUMBER) {
        dispatch(
          showAlertToast({
            alertMessage: AlertMessage.INVALID_PHONE_NUMBER_MESSAGE,
          }),
        );
      } else if (error.code === ErrorMessage.OTP_REQUEST) {
        dispatch(
          showAlertToast({
            alertMessage: AlertMessage.OTP_REQUEST_MESSAGE,
          }),
        );
      } else {
        dispatch(
          showAlertToast({
            alertMessage: error?.message,
          }),
        );
      }
      console.log('SignInWithPhoneNumber.error', error);
    }
  };

  const hasErrors = () => {
    return phnNumber ? !isNumeric(phnNumber) : null;
  };

  return (
    <SafeAreaView style={styles.logInScreenView}>
      <StatusBar backgroundColor="#F5672E" />
      <Image source={blocal_logo} style={styles.logoImage} />
      <Text allowFontScaling={false} style={styles.textHi}>
        Hi!
      </Text>
      <Text allowFontScaling={false} style={styles.textWelcome}>
        Welcome to b.local
      </Text>
      <View>
        <Input
          style={styles.input}
          label={'Enter your mobile number'}
          onChangeText={value => setPhnNumber(value)}
          value={phnNumber}
          keyboardType="numeric"
          borderRadius={scaledValue(24)}
          maxLength={10}
          mode="outlined"
          position={<TextInput.Icon name={mobile_image} color="#FF8800D9" />}
        />
        <HelperText type="error" visible={hasErrors()}>
          Phone Number is invalid!
        </HelperText>
      </View>
      <View style={styles.emptyView} />
      <Button
        width={scaledValue(592.64)}
        height={scaledValue(106.05)}
        backgroundColor="#F8993A"
        borderColor="#F8993A"
        title="Get OTP"
        color="#fff"
        fontFamily="Lato-Bold"
        lineHeight={scaledValue(36)}
        size={scaledValue(30)}
        borderRadius={scaledValue(24)}
        disabled={phnNumber?.length !== 10 || !isNumeric(phnNumber)}
        onPress={signInWithPhoneNumber}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logInScreenView: {
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    height: scaledValue(114.18),
    width: scaledValue(385.43),
    marginTop: scaledValue(124),
  },
  textHi: {
    fontSize: scaledValue(50),
    color: '#000000',
    marginTop: scaledValue(142.82),
  },
  textWelcome: {
    fontSize: scaledValue(36),
    color: '#00000057',
    marginTop: scaledValue(19),
    marginBottom: scaledValue(64),
    fontFamily: 'Lato-Regular',
  },
  input: {
    width: scaledValue(578.37),
    fontSize: scaledValue(26),
    fontFamily: 'Lato-Regular',
    backgroundColor: '#fff',
  },
  emptyView: {
    height: scaledValue(31.12),
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
});
