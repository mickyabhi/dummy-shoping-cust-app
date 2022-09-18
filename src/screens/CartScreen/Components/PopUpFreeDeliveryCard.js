/* eslint-disable no-undef */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {scaledValue} from '../../../utils/design.utils';
import infoIcon from '../../../../assets/images/InfoIcon.png';
const PopUpForFreeDelivery = props => {
  const freeDeliveryAmount = props?.minimumAmount - props?.cartValue;

  return (
    <View>
      {freeDeliveryAmount > 0 && (
        <>
          <View style={styles.popUpView}>
            <Image style={styles.infoIcon} source={infoIcon} />
            <Text
              allowFontScaling={false}
              style={styles.popUpForFreeDeliveryText}>
              Please add items worth Rs.
              {freeDeliveryAmount ? freeDeliveryAmount?.toFixed(2) : null} to
              get free home delivery.
            </Text>
          </View>
        </>
      )}
    </View>
  );
};
export default PopUpForFreeDelivery;
const styles = StyleSheet.create({
  popUpView: {
    width: '100%',
    height: scaledValue(76),
    backgroundColor: '#FFEDED',
    marginTop: scaledValue(15),
    borderWidth: scaledValue(1),
    borderColor: '#707070',
    borderRadius: scaledValue(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIcon: {
    height: scaledValue(25.17),
    width: scaledValue(25.17),
  },
  popUpForFreeDeliveryText: {
    fontSize: scaledValue(22),
    marginLeft: scaledValue(15.06),
    color: '#4C4C4C',
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(27),
  },
});
