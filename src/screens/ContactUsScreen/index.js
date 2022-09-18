import React from 'react';
import {
  View,
  TouchableOpacity,
  Platform,
  Text,
  Image,
  Linking,
} from 'react-native';
import Header from '../../components/Header';
import backIcon from '../../../assets/images/BackIcon.png';
import emailImg from '../../../assets/images/emailImg.png';
import mobileIcon from '../../../assets/images/contactUsMobileIcon.png';
import {useNavigation} from '@react-navigation/native';
import {analytic} from '../../utils/analytics';
import {styles} from './styles';
const ContactUs = () => {
  const navigation = useNavigation();
  const mailTo = () => {
    analytic().trackEvent('ContactUs', {
      CTA: 'mailBlocal',
    });
    Linking.openURL(`mailto:support@blocal.co.in`);
  };

  const makeCall = () => {
    analytic().trackEvent('ContactUs', {
      CTA: 'callBlocal',
    });
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${9108601005}`;
    } else {
      phoneNumber = `telprompt:${9108601005}`;
    }
    Linking.openURL(phoneNumber);
  };
  return (
    <View style={styles.contactUsView}>
      <Header
        backNavigationIcon={backIcon}
        headerTitle="Contact Us"
        onPress={() => {
          analytic().trackEvent('ContactUs', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />
      <TouchableOpacity style={styles.contactUsCardView} onPress={makeCall}>
        <Image
          style={styles.contactImg}
          source={mobileIcon}
          tintColor="#F8993D"
        />
        <View>
          <Text allowFontScaling={false} style={styles.contactMsgText}>
            Our Toll-free Number
          </Text>
          <Text allowFontScaling={false} style={styles.contactText}>
            9108601005
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactUsCardView} onPress={mailTo}>
        <Image style={styles.emailImg} source={emailImg} tintColor="#F8993A" />
        <View>
          <Text allowFontScaling={false} style={styles.contactMsgText}>
            Send Email To
          </Text>
          <Text allowFontScaling={false} style={styles.contactText}>
            support@blocal.co.in
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ContactUs;
