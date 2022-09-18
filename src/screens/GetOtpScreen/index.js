import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import otp_image from '../../../assets/images/otp_image.png';
import edit_image from '../../../assets/images/edit_image.png';
import {scaledValue} from '../../utils/design.utils';
import ButtonUi from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import TextInput from '../../components/InputText';
import {HelperText} from 'react-native-paper';
import {isNumeric, signOutUser} from '../../utils/common.utils';
import {Auth} from 'aws-amplify';
import {setItemInAsyncStorage} from '../../utils/storage.utils';
import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import {useDispatch} from 'react-redux';
import {showLoading} from '../AppStore/actions';
import auth from '@react-native-firebase/auth';
import {analytic} from '../../utils/analytics';
import messaging from '@react-native-firebase/messaging';
import crashlytics from '@react-native-firebase/crashlytics';

const GetOtp = props => {
  const dispatch = useDispatch();

  const phoneNumber = props?.route?.params?.userPhoneNumber.slice(-10);
  const navigation = useNavigation();
  const [otpConfirmation] = useState(props.route.params.confirmationObj);
  const [userPhnNumber] = useState(props.route.params.userPhoneNumber);
  const [time, setTime] = useState(30);
  const [otp, setOtp] = useState('');
  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    }
  }, [time]);

  const performCognitoAuth = async firebaseUser => {
    const isNewUser = firebaseUser?.additionalUserInfo?.isNewUser;
    const firebaseUserId = firebaseUser.user.uid;
    console.log('performCognitoAuth.confirmResp', firebaseUser);
    console.log('performCognitoAuth.firebaseUserId', firebaseUserId);
    console.log('performCognitoAuth.typeof.isNewUser', typeof isNewUser);

    const cognitoUser = await Auth.signUp({
      username: userPhnNumber,
      password: firebaseUserId,
      attributes: {
        phone_number: userPhnNumber,
      },
    })
      .then(() => Auth.signIn(userPhnNumber, firebaseUserId))
      .catch(error => {
        console.log('performCognitoAuth.signUp.error:', error);
        return Auth.signIn(userPhnNumber, firebaseUserId);
      });
    const currentUserId = cognitoUser.attributes.phone_number;

    if (userPhnNumber) {
      let topic = 'CAU' + currentUserId;
      topic = topic.replace('+', '_');
      console.log('subscribeToTopic.topic', topic);

      crashlytics()?.setUserId(userPhnNumber?.replace('+', '_'));

      messaging()
        .subscribeToTopic(topic)
        .then(() => console.log('subscribeToTopic.success', topic))
        .catch(error => {
          crashlytics()?.recordError(error);
          console.log('subscribeToTopic.error', error);
          return null;
        });
    }

    console.log('performCognitoAuth.auth.user', cognitoUser);
    await setItemInAsyncStorage(
      'current_user_id',
      cognitoUser.attributes.phone_number.replace('+', '_'),
    );
    await setItemInAsyncStorage(
      'accessToken',
      cognitoUser.signInUserSession.accessToken.jwtToken,
    );
    await setItemInAsyncStorage(
      'idToken',
      cognitoUser.signInUserSession.idToken.jwtToken,
    );

    const user = await API.graphql({
      query: queries.getUser,
      variables: {id: userPhnNumber?.replace('+', '_')},
    }).catch(error => {
      console.log('getUser.error', error);
      crashlytics()?.recordError(error);
      return null;
    });
    dispatch(showLoading(false));

    if (user?.data?.getUser != null) {
      const checkStoreAdmin = await API.graphql({
        query: queries.storeAdminByUserId,
        variables: {userId: userPhnNumber?.replace('+', '_')},
      })
        .then(resp => resp.data.storeAdminByUserId.items)
        .catch(error => {
          console.log('getStoreAdmin', error);
          crashlytics()?.recordError(error);
          return null;
        });

      if (checkStoreAdmin.length != 0) {
        dispatch(showLoading(false));
        alert(
          'This number is already register as a Merchant. please login with another number',
        );
        await signOutUser().then(navigation.replace('LoginScreen'));
        return;
      }
      navigation.replace('Home');
    } else {
      navigation.replace('DeliveryLocationScreen', {
        signUp: true,
      });
    }
  };

  const hasErrors = () => {
    return !isNumeric(otp);
  };

  const verifyOTP = async () => {
    Keyboard.dismiss();
    dispatch(showLoading(true));

    const confirmationResponse = await otpConfirmation
      .confirm(otp)
      .catch(error => {
        Alert.alert('Invalid OTP');
        crashlytics()?.recordError(error);
        dispatch(showLoading(false));
        console.log(error);
        return null;
      });

    console.log('confirmationResponse', confirmationResponse);

    if (confirmationResponse !== undefined) {
      performCognitoAuth(confirmationResponse);
    } else {
      dispatch(showLoading(false));
      Alert.alert('invalid OTP');
    }
    analytic().trackEvent('GetOTPScreen', {
      CTA: 'verifyOTP',
      data: phoneNumber,
    });
  };

  const resendOtpHandler = async () => {
    try {
      Keyboard.dismiss();
      dispatch(showLoading(true));
      const confirmation = await auth().signInWithPhoneNumber(
        '+91' + phoneNumber,
        true,
      );
      console.log('confirmation', confirmation);
      if (confirmation != null) dispatch(showLoading(false));
      navigation.replace('GetOtp', {
        userPhoneNumber: '+91' + phoneNumber,
        confirmationObj: confirmation,
      });
    } catch (error) {
      crashlytics()?.recordError(error);
      alert(JSON.stringify('error', error));
      dispatch(showLoading(false));
    }
    analytic().trackEvent('GetOTPScreen', {
      CTA: 'resendOtp',
      data: phoneNumber,
    });
  };
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <StatusBar backgroundColor="#F5672E" />
      <Image source={otp_image} style={styles.otpImage} />

      <Text allowFontScaling={false} style={styles.enterOtpText}>
        Please enter OTP sent to your registered mobile number
      </Text>
      <View style={styles.container}>
        <Text allowFontScaling={false} style={styles.textNumber}>
          {userPhnNumber}
        </Text>
        <TouchableOpacity
          onPress={() => {
            analytic().trackEvent('GetOTPScreen', {
              CTA: 'editImage',
            });
            navigation.navigate('LoginScreen', {phoneNumber: userPhnNumber});
          }}>
          <Image source={edit_image} style={styles.editImage} />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          mode="outlined"
          value={otp}
          onChangeText={value => setOtp(value)}
          maxLength={6}
          borderRadius={scaledValue(24)}
        />
        <HelperText type="error" visible={hasErrors()}>
          OTP is invalid!
        </HelperText>
      </View>
      <View style={styles.receiveOtpTextContainer}>
        <Text allowFontScaling={false} style={styles.receiveOtpText}>
          Didn&apos;t receive OTP?
        </Text>
        <TouchableOpacity onPress={resendOtpHandler} disabled={time > 0}>
          <Text allowFontScaling={false} style={styles.resendText}>
            <Text
              allowFontScaling={false}
              style={
                time > 0 ? styles.inActiveResendText : styles.activeResendText
              }>
              RESEND OTP
            </Text>
            {time > 0 && <> in {time} sec</>}
          </Text>
        </TouchableOpacity>
      </View>
      <ButtonUi
        disabled={otp.length !== 6 || !isNumeric(otp)}
        width={scaledValue(592.64)}
        height={scaledValue(106.05)}
        backgroundColor="#F8993A"
        borderColor="#F8993A"
        title="Verify"
        color="#fff"
        fontFamily="Lato-SemiBold"
        lineHeight={scaledValue(36)}
        size={scaledValue(30)}
        borderRadius={scaledValue(24)}
        onPress={verifyOTP}
      />
    </SafeAreaView>
  );
};

export default GetOtp;

const styles = StyleSheet.create({
  otpImage: {
    height: scaledValue(132.19),
    width: scaledValue(152.04),
    marginTop: scaledValue(132),
  },
  enterOtpText: {
    fontSize: scaledValue(26),
    color: '#000000',
    marginTop: scaledValue(104.81),
    width: scaledValue(460),
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(34),
  },
  input: {
    width: scaledValue(578.37),
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#fff',
  },
  editImage: {
    width: scaledValue(41),
    height: scaledValue(41),
    marginTop: scaledValue(45),
  },
  textNumber: {
    color: '#000000',
    fontSize: scaledValue(30),
    marginTop: scaledValue(45),
    paddingHorizontal: scaledValue(23),
    fontFamily: 'Lato-Medium',
    lineHeight: scaledValue(36),
  },
  container: {
    flexDirection: 'row',
    marginBottom: scaledValue(51),
  },
  receiveOtpText: {
    fontSize: scaledValue(26),
    color: '#00000057',
    paddingHorizontal: scaledValue(11),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(32),
  },
  resendText: {
    color: '#FBCC9C',
    fontSize: scaledValue(26),
    fontFamily: 'Lato-Semibold',
  },
  activeResendText: {
    color: '#F8993A',
    fontSize: scaledValue(26),
  },
  inActiveResendText: {
    color: '#FBCC9C',
    fontSize: scaledValue(26),
  },
  resendOtpText: {
    fontSize: scaledValue(26),
    color: '#F8993A',
    fontFamily: 'Lato-SemiBold',
    lineHeight: scaledValue(32),
  },
  receiveOtpTextContainer: {
    flexDirection: 'row',
    marginBottom: scaledValue(27),
    alignItems: 'center',
  },
  safeAreaViewStyle: {
    flex: 1,
    alignItems: 'center',
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
