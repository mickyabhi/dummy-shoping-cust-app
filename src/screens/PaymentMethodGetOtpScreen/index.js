import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import TextInput from '../../components/InputText';
import {scaledValue} from '../../utils/design.utils';
import ButtonUi from '../../components/Button';
import BackIcon from '../../../assets/images/BackIcon.png';
import {useNavigation} from '@react-navigation/native';
import {isNumeric} from '../../utils/common.utils';
import {HelperText} from 'react-native-paper';
import {analytic} from '../../utils/analytics';
const PaymentMethodGetOtp = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');
  const hasErrors = () => {
    return !isNumeric(text);
  };
  return (
    <View style={styles.paymentMethodGetOtpView}>
      <Header
        backNavigationIcon={BackIcon}
        headerTitle="Login to Mobikwik"
        onPress={() => {
          analytic().trackEvent('paymentMethodGetOtpScreen', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />
      <View style={styles.paymentMethodGetOtpMainView}>
        <Text allowFontScaling={false} style={styles.phnNumText}>
          MobiKwik has sent an SMS with an activation code to: +91 9482297822
        </Text>
        <Text allowFontScaling={false} style={styles.inputCodeText}>
          Please enter activation code manually
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          mode="outlined"
          maxLength={6}
          onChangeText={text => setText(text)}
          value={text}
          borderRadius={scaledValue(24)}
        />
        <HelperText
          style={styles.helperText}
          type="error"
          visible={hasErrors()}>
          Phone Number is invalid!
        </HelperText>
        <View style={styles.emptyView} />
        <ButtonUi
          width={scaledValue(666)}
          height={scaledValue(103)}
          color={'#fff'}
          backgroundColor={'#F8993A'}
          borderColor={'#F8993A'}
          title={'Done'}
          fSize={scaledValue(30)}
          borderRadius={scaledValue(8)}
          onPress={() => {
            analytic().trackEvent('paymentMethodGetOTPScreen', {
              CTA: 'paymentDone',
            });
            navigation.replace('PaymentSuccess');
          }}
          disabled={text?.length !== 6 || !isNumeric(text)}
        />
        <Text allowFontScaling={false} style={styles.resendOtp}>
          Resent OTP
        </Text>
      </View>
    </View>
  );
};

export default PaymentMethodGetOtp;

const styles = StyleSheet.create({
  paymentMethodGetOtpView: {
    flex: 1,
  },
  paymentMethodGetOtpMainView: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: scaledValue(578.37),
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#fff',
  },
  phnNumText: {
    marginTop: scaledValue(65),
    fontSize: scaledValue(29),
    color: '#6E7989',
    width: scaledValue(578),
    lineHeight: scaledValue(44),
    textAlign: 'center',
  },
  inputCodeText: {
    color: '#6E7989',
    fontSize: scaledValue(29),
    marginTop: scaledValue(50),
    lineHeight: scaledValue(44),
    marginBottom: scaledValue(67.56),
  },
  resendOtp: {
    color: '#F8993A',
    marginTop: scaledValue(90),
    fontSize: scaledValue(29),
    lineHeight: scaledValue(44),
  },
  emptyView: {
    height: scaledValue(30.56),
  },
  helperText: {
    width: scaledValue(578.37),
  },
});
