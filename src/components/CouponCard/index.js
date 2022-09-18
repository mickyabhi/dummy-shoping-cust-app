import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
import Button from '../Button';
import {styles} from './styles';
const CouponCode = () => (
  <TouchableOpacity style={styles.couponCodeView}>
    <View style={styles.cardLeftView}>
      <Text allowFontScaling={false} style={styles.couponTitle}>
        Coupon code ICICI50
      </Text>
      <Text allowFontScaling={false} style={styles.couponDescription}>
        On shopping of 500 get instant 50rs off by using ICICI account or Cr/Db
        card
      </Text>
      <Text allowFontScaling={false} style={styles.couponExpireDate}>
        Expires on 6/02/2021
      </Text>
    </View>
    <View style={styles.cardRightView}>
      <Text allowFontScaling={false} style={styles.rsText}>
        ₹50
      </Text>
      <Button
        borderColor="#00A74E"
        backgroundColor="#00A74E"
        width={scaledValue(101)}
        height={scaledValue(41)}
        title="Apply"
        color="#fff"
        fSize={scaledValue(22)}
      />
    </View>
  </TouchableOpacity>
);

export default CouponCode;
