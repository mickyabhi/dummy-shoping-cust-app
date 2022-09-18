import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Modal} from 'react-native-paper';
import {scaledValue} from '../../../utils/design.utils';

const DeliveryChargeModal = props => {
  const containerStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    top: scaledValue(505.5),
    left: scaledValue(39),
    right: scaledValue(101.75),
    borderRadius: scaledValue(8),
    width: scaledValue(671),
  };

  const styles = StyleSheet.create({
    textView: {
      fontSize: scaledValue(31),
      color: '#7F7F7F',
    },
    confirmDeleteView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: scaledValue(241),
      marginTop: scaledValue(43),
    },
    noText: {
      fontSize: scaledValue(31),
      textTransform: 'uppercase',
      fontFamily: 'Lato-Bold',
      color: '#FF8800',
    },
    yesText: {
      fontSize: scaledValue(31),
      textTransform: 'uppercase',
      fontFamily: 'Lato-Bold',
      color: '#FF8800',
    },
    modalMainView: {
      paddingHorizontal: scaledValue(50),
      paddingVertical: scaledValue(42),
    },
  });

  return (
    <>
      <Modal
        visible={props?.visible}
        onDismiss={props?.onDismiss}
        contentContainerStyle={containerStyle}>
        <View style={styles.modalMainView}>
          <Text allowFontScaling={false} style={styles.textView}>
            Since the minimum order value is not met, delivery charge of '₹{' '}
            {props?.deliveryCharges}' will be levied on this order
          </Text>
          <View style={styles.confirmDeleteView}>
            <Text
              allowFontScaling={false}
              onPress={() => props.onDismiss()}
              style={styles.yesText}>
              CANCEL
            </Text>

            <Text
              allowFontScaling={false}
              onPress={props.onPress}
              style={styles.noText}>
              PROCEED
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DeliveryChargeModal;
