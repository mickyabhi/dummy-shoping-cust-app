import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

const Footer = props => {
  const styles = StyleSheet.create({
    FooterView: {
      flexDirection: 'row',
      width: '100%',
      height: scaledValue(117),
      bottom: 0,
      backgroundColor: props?.deliveryCharges
        ? '#F8993A'
        : props.cartValue < props?.minimumAmount
        ? '#FBCC9C'
        : '#F8993A',
      justifyContent: 'space-between',
      paddingHorizontal: scaledValue(47),
      alignItems: 'center',
    },
    rsText: {
      // marginBottom: scaledValue(15),
      color: '#fff',
      fontSize: scaledValue(30),
      fontFamily: 'Lato-SemiBold',
      lineHeight: scaledValue(36),
    },
    savedRsText: {
      color: '#fff',
      fontSize: scaledValue(22),
      textAlign: 'center',
      fontFamily: 'Lato-Regular',
      lineHeight: scaledValue(27),
    },
    proceedToCheckText: {
      fontSize: scaledValue(30),
      color: '#fff',
      fontFamily: 'Lato-SemiBold',
      lineHeight: scaledValue(36),
    },
    itemCountText: {
      fontSize: scaledValue(22),
      color: '#fff',
    },
  });

  return (
    <>
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.FooterView}
        disabled={
          props?.deliveryCharges
            ? false
            : props?.cartValue < props?.minimumAmount
        }>
        <View style={styles.leftTextView}>
          {props?.itemCount > 0 && (
            <Text allowFontScaling={false} style={styles.itemCountText}>
              {props?.itemCount} item
            </Text>
          )}
          <Text allowFontScaling={false} style={styles.rsText}>
            {props?.cartValue ? `₹ ${props?.cartValue}` : ''}
          </Text>
          {/* {props?.footerTitle !== 'View Cart' && (
            <Text allowFontScaling={false} style={styles.savedRsText}>Saved ₹71</Text>
          )} */}
        </View>
        <Text allowFontScaling={false} style={styles.proceedToCheckText}>
          {props?.footerTitle}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Footer;
