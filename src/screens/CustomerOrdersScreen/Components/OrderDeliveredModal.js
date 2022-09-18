import * as React from 'react';
import {Modal, Text} from 'react-native-paper';
import {scaledValue} from '../../../utils/design.utils';
import {StyleSheet, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import checkIcon from '../../../../assets/images/tick_image.png';

const OrderDeliveredModal = props => {
  const containerStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    top: scaledValue(505.5),
    left: scaledValue(101.25),
    right: scaledValue(101.75),
    borderRadius: scaledValue(8),
  };
  return (
    <Modal
      visible={props.visible}
      onDismiss={props.onDismiss}
      contentContainerStyle={containerStyle}>
      <LinearGradient
        colors={['#F78326', '#F8993A', '#F78326']}
        style={styles.linearGradient}>
        <View style={styles.modalMainView}>
          <Image source={checkIcon} style={styles.checkIconStyle} />
          <Text allowFontScaling={false} style={styles.orderDeliveredText}>
            Order delivered
          </Text>
          <Text allowFontScaling={false} style={styles.orderDeliveredText}>
            Thank you for being vocal for local
          </Text>
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default OrderDeliveredModal;

const styles = StyleSheet.create({
  modalMainView: {
    paddingVertical: scaledValue(29),
    alignItems: 'center',
  },
  orderDeliveredText: {
    textAlign: 'center',
    fontSize: scaledValue(29),
    color: '#fff',
    fontFamily: 'Lato-Medium',
  },
  checkIconStyle: {
    width: scaledValue(165),
    height: scaledValue(165),
    marginBottom: scaledValue(29),
  },
  linearGradient: {
    borderRadius: scaledValue(8),
  },
});
