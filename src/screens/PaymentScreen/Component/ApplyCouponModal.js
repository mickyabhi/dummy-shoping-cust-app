import * as React from 'react';
import {Modal} from 'react-native-paper';
import {scaledValue} from '../../../utils/design.utils';
import {View, StyleSheet, Text} from 'react-native';
import CouponCard from '../../../components/CouponCard';
const ApplyCouponModal = props => {
  const containerStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    top: scaledValue(472),
    left: scaledValue(42),
    right: scaledValue(42),
    borderRadius: scaledValue(14),
  };
  return (
    <Modal
      visible={props.visible}
      onDismiss={props.onDismiss}
      contentContainerStyle={containerStyle}>
      <View style={styles.applyCouponModalView}>
        <Text allowFontScaling={false} style={styles.eligibleCouponText}>
          Eligible Coupons
        </Text>
        <CouponCard />
        <CouponCard />
        <CouponCard />
      </View>
    </Modal>
  );
};

export default ApplyCouponModal;
const styles = StyleSheet.create({
  applyCouponModalView: {
    alignItems: 'center',
    paddingBottom: scaledValue(18),
    paddingTop: scaledValue(31.18),
  },
  eligibleCouponText: {
    marginBottom: scaledValue(29.82),
  },
});
