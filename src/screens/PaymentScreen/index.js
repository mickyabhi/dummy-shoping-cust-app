import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../../components/Header';
import {scaledValue} from '../../utils/design.utils';
import ButtonUi from '../../components/Button';
import BackIcon from '../../../assets/images/BackIcon.png';
import {useNavigation} from '@react-navigation/native';
import ApplyCouponModal from './Component/ApplyCouponModal';
import TextInput from '../../components/InputText';
import {analytic} from '../../utils/analytics';
const Payment = () => {
  const [showApplyCouponModal, setShowApplyCouponModal] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.paymentScreenView}>
      <Header
        backNavigationIcon={BackIcon}
        headerTitle="Payment"
        onPress={() => {
          analytic().trackEvent('PaymentScreen', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />
      <View style={styles.paymentScreenMainView}>
        <View style={styles.orderPaymentView}>
          <Text allowFontScaling={false} style={styles.orderPaymentText}>
            Order Payment
          </Text>
          <Text allowFontScaling={false} style={styles.rsText}>
            ₹ 739
          </Text>
        </View>
        <ButtonUi
          width={scaledValue(347)}
          height={scaledValue(60)}
          color={'#fff'}
          fontFamily="Lato-Medium"
          backgroundColor={'#00A74E'}
          borderColor={'#00A74E'}
          title={'Check Eligible coupons'}
          fSize={scaledValue(28)}
          onPress={() => {
            analytic().trackEvent('PaymentScreen', {
              CTA: 'showAppliedCoupon',
            });
            setShowApplyCouponModal(true);
          }}
        />
        <Text allowFontScaling={false} style={styles.orText}>
          or
        </Text>
        <Text allowFontScaling={false} style={styles.couponCodeText}>
          Have a coupon code?
        </Text>
        <View style={styles.couponApplyView}>
          <TextInput
            style={styles.applyCouponCodeInputText}
            label="Enter Coupon code"
            mode="outlined"
            borderRadius={scaledValue(10)}
          />
          <ButtonUi
            title="Apply"
            backgroundColor={'#F8993A'}
            borderColor={'#F8993A'}
            fontFamily="Lato-Semibold"
            width={scaledValue(168.94)}
            height={scaledValue(71.88)}
            borderRadius={scaledValue(10)}
            color={'#fff'}
          />
        </View>
        <View style={styles.appliedCouponView}>
          <View style={styles.onlinePaymentTextView}>
            <Text allowFontScaling={false} style={styles.leftTextAppliedCoupon}>
              Online Payment
            </Text>
            <Text
              allowFontScaling={false}
              style={styles.rightTextAppliedCoupon}>
              ₹ 739
            </Text>
          </View>
          <View style={styles.appliedCouponTextView}>
            <Text allowFontScaling={false} style={styles.leftTextAppliedCoupon}>
              Applied Coupon
            </Text>
            <Text
              allowFontScaling={false}
              style={styles.rightTextAppliedCoupon}>
              - ₹50
            </Text>
          </View>
        </View>
        <View style={styles.paymentTextView}>
          <Text allowFontScaling={false} style={styles.orderPaymentText2}>
            Order Payment
          </Text>
          <Text allowFontScaling={false} style={styles.rsText2}>
            ₹ 739
          </Text>
        </View>
        <ButtonUi
          title="Proceed To Pay"
          width={scaledValue(666)}
          height={scaledValue(103)}
          color="#fff"
          fontFamily="Lato-Semibold"
          borderColor="#F8993A"
          backgroundColor="#F8993A"
          onPress={() => {
            analytic().trackEvent('PaymentScreen', {
              CTA: 'proceedToPay',
            });
            navigation.navigate('PaymentMethod');
          }}
        />
      </View>
      <ApplyCouponModal
        visible={showApplyCouponModal}
        onDismiss={() => {
          analytic().trackEvent('PaymentScreen', {
            CTA: 'hideApplyCouponModal',
          });
          setShowApplyCouponModal(false);
        }}
      />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  paymentScreenView: {
    flex: 1,
  },
  paymentScreenMainView: {
    flex: 1,
    paddingVertical: scaledValue(62),
    paddingHorizontal: scaledValue(43),
  },
  orderPaymentView: {
    width: scaledValue(663),
    height: scaledValue(108),
    borderRadius: scaledValue(21),
    backgroundColor: '#F8993A',
    paddingHorizontal: scaledValue(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaledValue(54),
  },
  orderPaymentText: {
    fontSize: scaledValue(28),
    color: '#fff',
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(34),
  },
  rsText: {
    fontSize: scaledValue(32),
    color: '#fff',
    fontFamily: 'Lato-Semibold',
    lineHeight: scaledValue(39),
  },
  orText: {
    fontSize: scaledValue(29),
    lineHeight: scaledValue(35),
    marginBottom: scaledValue(28),
    marginTop: scaledValue(30),
    marginLeft: scaledValue(7),
    fontFamily: 'Lato-Regular',
  },
  couponCodeText: {
    fontSize: scaledValue(26),
    lineHeight: scaledValue(32),
    marginLeft: scaledValue(7),
    color: '#4A4A4A',
    marginBottom: scaledValue(13.77),
    fontFamily: 'Lato-Regular',
  },
  applyCouponCodeInputText: {
    width: scaledValue(484.67),
    height: scaledValue(67.88),
    fontSize: scaledValue(25),
    fontFamily: 'Lato-Regular',
    color: 'black',
    backgroundColor: '#fff',
  },
  couponApplyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: scaledValue(60),
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    alignItems: 'flex-end',
  },
  appliedCouponView: {
    borderColor: 'gray',
    borderBottomWidth: 0.5,
    paddingVertical: scaledValue(26.24),
  },
  paymentTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaledValue(20),
    marginBottom: scaledValue(54.27),
    marginTop: scaledValue(25.76),
  },
  orderPaymentText2: {
    fontSize: scaledValue(28),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(34),
  },
  rsText2: {
    fontSize: scaledValue(32),
    fontFamily: 'Lato-Medium',
    lineHeight: scaledValue(39),
  },
  onlinePaymentTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaledValue(16),
    paddingHorizontal: scaledValue(12),
  },
  appliedCouponTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaledValue(12),
  },
  leftTextAppliedCoupon: {
    color: '#4A4A4A',
    fontSize: scaledValue(26),
  },
  rightTextAppliedCoupon: {
    fontSize: scaledValue(23),
  },
});
