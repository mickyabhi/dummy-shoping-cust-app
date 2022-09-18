import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';
import {scaledValue} from '../../utils/design.utils';
import {RadioButton} from 'react-native-paper';
import Button from '../../components/Button';
import plusCircle from '../../../assets/images/plus_circle.png';
import BackIcon from '../../../assets/images/BackIcon.png';
import {useNavigation} from '@react-navigation/native';
import {analytic} from '../../utils/analytics';
import {styles} from './styles';
const DeliveryAddressScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('one');
  return (
    <View style={styles.container}>
      <Header
        backNavigationIcon={BackIcon}
        headerTitle="Choose Delivery Address"
        onPress={() => {
          analytic().trackEvent('DeliveryAddressScreen', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />
      <View style={styles.deliveryAddressHeader}>
        <Text allowFontScaling={false} style={styles.savedAddressText}>
          Saved address
        </Text>
        <View style={styles.rightSideTextView}>
          <Text allowFontScaling={false} style={styles.defaultAddressText}>
            Default Address:
          </Text>
          <Text allowFontScaling={false} style={styles.homeText}>
            {'\u00A0'}Home
          </Text>
        </View>
      </View>
      <View style={styles.chooseAddressView}>
        <RadioButton.Group
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          <TouchableOpacity
            style={styles.touchableOpacityStyle}
            onPress={() => {
              setValue('one');
            }}>
            <RadioButton.Item value="one" color="#F8993A" />
            <Text allowFontScaling={false} style={styles.chooseAddressText}>
              314, A Block, 3rd Floor, KHB Quarters, Nandini Layout, Opposite to
              Nandini club -560086 Bangalore, KA.
            </Text>
          </TouchableOpacity>
        </RadioButton.Group>
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Add Address"
          fSize={scaledValue(30)}
          width={scaledValue(650)}
          height={scaledValue(118)}
          borderColor="gray"
          buttonImage={plusCircle}
        />
      </View>
    </View>
  );
};
export default DeliveryAddressScreen;
