import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Header from '../../components/Header';
import PaymentIcon from '../../../assets/images/payment_m_icon.png';
import {scaledValue} from '../../utils/design.utils';
import Input from '../../components/InputText';
import {TextInput, HelperText} from 'react-native-paper';
import mobile_image from '../../../assets/images/mobile_image.png';
import ButtonUi from '../../components/Button';
import BackIcon from '../../../assets/images/BackIcon.png';
import {useNavigation} from '@react-navigation/native';
import {isNumeric} from '../../utils/common.utils';
import {analytic} from '../../utils/analytics';
const PaymentLogin = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');
  const hasErrors = () => {
    return !isNumeric(text);
  };
  return (
    <View style={styles.paymentLoginView}>
      <Header
        backNavigationIcon={BackIcon}
        headerTitle="Login to Mobikwik"
        onPress={() => {
          analytic().trackEvent('PaymentLoginScreen', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />
      <View style={styles.paymentLoginMainView}>
        <Image source={PaymentIcon} style={styles.paymentMethodIcon} />
        <Text allowFontScaling={false} style={styles.paymentMethodName}>
          Please login to your MobiKwik account
        </Text>
        <Input
          style={styles.input}
          onChangeText={text => setText(text)}
          label="Enter your mobile number"
          value={text}
          keyboardType="numeric"
          maxLength={10}
          mode="outlined"
          position={<TextInput.Icon name={mobile_image} color="#F8993A" />}
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
          title={'Login'}
          fSize={scaledValue(30)}
          borderRadius={scaledValue(8)}
          onPress={() => {
            analytic().trackEvent('PaymentMethodLoginScreen', {
              CTA: 'Login',
            });
            navigation.navigate('PaymentMethodGetOtp');
          }}
          disabled={text?.length !== 10 || !isNumeric(text)}
        />
      </View>
    </View>
  );
};

export default PaymentLogin;

const styles = StyleSheet.create({
  paymentLoginView: {
    flex: 1,
  },
  paymentLoginMainView: {
    flex: 1,
    alignItems: 'center',
  },
  paymentMethodIcon: {
    width: scaledValue(110),
    height: scaledValue(78),
    marginTop: scaledValue(69),
  },
  paymentMethodName: {
    fontSize: scaledValue(29),
    lineHeight: scaledValue(44),
    color: '#6E7989',
    marginBottom: scaledValue(65.12),
    marginTop: scaledValue(49),
  },
  input: {
    width: scaledValue(578.37),
    backgroundColor: '#fff',
  },
  emptyView: {
    height: scaledValue(31.12),
  },
  helperText: {
    width: scaledValue(578.37),
  },
});
