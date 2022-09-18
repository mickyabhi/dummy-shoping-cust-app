import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {styles} from './styles';
const PaymentCard = props => {
  return (
    <TouchableOpacity
      style={styles.paymentCardView(props)}
      onPress={props.onPress}>
      <Image
        source={props.paymentTypeIcon}
        style={styles.paymentTypeImage(props)}
      />
      <View style={styles.paymentMethodView}>
        <Text allowFontScaling={false} style={styles.paymentMethodName}>
          {props.paymentTypeText}
        </Text>
        {/* <Text allowFontScaling={false} style={styles.paymentMethodDescription}>
            Link your Phonepe account to use this payment method
          </Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default PaymentCard;
