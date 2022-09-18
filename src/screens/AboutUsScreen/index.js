/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
import Header from '../../components/Header';
import Back_Navigation_Icon from '../../../assets/images/BackIcon.png';
import {useNavigation} from '@react-navigation/native';
const AboutUs = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.aboutUsView}>
      <Header
        backNavigationIcon={Back_Navigation_Icon}
        headerTitle="About Us"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.aboutUsMainView}>
        <Text allowFontScaling={false} style={styles.aboutUsText}>
          B.Local is an initiative and path-breaking solution that aims to
          promote and support "VOCAL FOR LOCAL". Strategized to facilitate
          digital presence for millions of retail stores that comprise the
          traditional offline retail sector in India.
        </Text>
        <Text allowFontScaling={false} style={styles.aboutUsText}>
          B.Local intends to play a game-changer role and reinstate importance
          of small retail stores. B.Local offers consumers with convenience of
          shopping online from neighborhood stores & deliver within an hour. The
          app encourages local retail stores in the neighborhood to go digital
          by having their presence online and service their customers digitally.
        </Text>
      </View>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  aboutUsView: {
    flex: 1,
  },
  aboutUsText: {
    fontSize: scaledValue(31),
    lineHeight: scaledValue(46),
    marginTop: scaledValue(48),
    width: scaledValue(657),
    fontFamily: 'Lato-Medium',
    color: '#000000',
  },
  aboutUsMainView: {
    flex: 1,
    alignItems: 'center',
  },
});
