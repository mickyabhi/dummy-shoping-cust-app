/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
import Header from '../../components/Header';
import Back_Navigation_Icon from '../../../assets/images/BackIcon.png';
import {useNavigation} from '@react-navigation/native';
import {analytic} from '../../utils/analytics';

const PrivacyPolicy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.privacyPolicyView}>
      <Header
        backNavigationIcon={Back_Navigation_Icon}
        headerTitle="Privacy Policy"
        onPress={() => {
          analytic().trackEvent('PrivacyPolicy', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />
      <View style={styles.privacyPolicyMainView}>
        <Text allowFontScaling={false} style={styles.privacyPolicyText}>
          We ensure that all registered users and merchant details are preserved
          in our secure server, protecting your privacy. However these details
          will be used by the company for internal use to determine the
          preferences of application users, monitor the fraud and improve the
          service quality. Kindly note that the policy is subject to change at
          any time without any prior notice.
        </Text>
      </View>
    </View>
  );
};
export default PrivacyPolicy;
const styles = StyleSheet.create({
  privacyPolicyView: {
    flex: 1,
  },
  privacyPolicyText: {
    fontSize: scaledValue(31),
    lineHeight: scaledValue(46),
    marginTop: scaledValue(48),
    width: scaledValue(661),
  },
  privacyPolicyMainView: {
    flex: 1,
    alignItems: 'center',
  },
});
