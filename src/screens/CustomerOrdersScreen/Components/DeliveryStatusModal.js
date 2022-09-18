import React from 'react';
import {Modal, Text, RadioButton} from 'react-native-paper';
import {scaledValue} from '../../../utils/design.utils';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import API from '@aws-amplify/api';
import * as mutations from '../../../graphql/mutations';
import {AlertMessage, OrderStatus} from '../../../utils/constants';
import {sendNotificationToTopic} from '../../../utils/services';
import crashlytics from '@react-native-firebase/crashlytics';
import {useDispatch} from 'react-redux';
import {showLoading, fetchOrder} from '../../AppStore/actions';

const DeliveryStatusModal = props => {
  const dispatch = useDispatch();

  const containerStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    top: scaledValue(505.5),
    left: scaledValue(50),
    right: scaledValue(50),
    borderRadius: scaledValue(8),
    width: scaledValue(650),
  };

  const styles = StyleSheet.create({
    modalMainView: {
      paddingLeft: scaledValue(41.88),
      paddingRight: scaledValue(84),
      paddingTop: scaledValue(37.21),
      paddingBottom: scaledValue(44),
    },
    radioButtonView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    deliveryStatusText: {
      fontSize: scaledValue(30),
      marginBottom: scaledValue(52.79),
      fontFamily: 'Lato-Semibold',
    },
    radioLabel: {
      fontSize: scaledValue(26),
      fontFamily: 'Lato-Medium',
    },
    noText: {
      fontSize: scaledValue(36),
      textTransform: 'uppercase',
      fontFamily: 'Lato-Semibold',
      color: props?.deliveredConfirmHandler === 'no' ? '#FF8800' : '#000',
    },
    yesText: {
      fontSize: scaledValue(36),
      textTransform: 'uppercase',
      fontFamily: 'Lato-Semibold',
      color: props?.deliveredConfirmHandler === 'yes' ? '#FF8800' : '#000',
    },
    confirmDeliveredView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: scaledValue(126),
      marginTop: scaledValue(40),
    },
    delayMessageText: {
      fontSize: scaledValue(26),
      fontFamily: 'Lato-Medium',
    },
  });

  const updateOrderStatus = async orderId => {
    if (orderId != null) {
      const updateOrderInput = {
        id: orderId,
        orderStatus: OrderStatus.DELIVERED,
      };

      await API.graphql({
        query: mutations.updateOrder,
        variables: {input: updateOrderInput},
      }).catch(error => {
        console.log('updateOrder.error', error);
        crashlytics()?.recordError(error);
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        return null;
      });
      dispatch(fetchOrder());
    }
  };
  const delayInDeliveryHandler = () => {
    props?.setRadioValue('first');
    props?.setRadioHandler(false);
    sendNotificationToTopic(
      'Delay In Delivery',
      'Customer marked order as Delay In Delivery for order id ' +
        props?.orderShortId +
        '. Plz Check',
      'STR_' + props?.storeId,
      {orderId: props?.orderId},
    );
  };

  const openConfirmDeliveryModal = () => {
    props?.setRadioValue('second');
    props?.setRadioHandler(true);
  };

  return (
    <Modal
      visible={props.visible}
      onDismiss={props.onDismiss}
      contentContainerStyle={containerStyle}>
      <View style={styles.modalMainView}>
        {props?.radioValue === 'first' ? (
          <>
            <Text allowFontScaling={false} style={styles.deliveryStatusText}>
              Delay in delivery
            </Text>
            <Text allowFontScaling={false} style={styles.delayMessageText}>
              Regret delay in delivery. We have notified the merchant to deliver
              soon.
            </Text>
          </>
        ) : (
          <>
            <Text allowFontScaling={false} style={styles.deliveryStatusText}>
              Delivery status
            </Text>
            <TouchableOpacity
              style={styles.radioButtonView}
              onPress={delayInDeliveryHandler}>
              <RadioButton
                value="first"
                color="#F8993A"
                status={props.radioValue == 'first' ? 'checked' : 'unchecked'}
                onPress={delayInDeliveryHandler}
              />
              <Text allowFontScaling={false} style={styles.radioLabel}>
                Delay in delivery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.radioButtonView}
              onPress={openConfirmDeliveryModal}>
              <RadioButton
                value="second"
                color="#F8993A"
                status={props.radioValue == 'second' ? 'checked' : 'unchecked'}
                onPress={openConfirmDeliveryModal}
              />
              <Text allowFontScaling={false} style={styles.radioLabel}>
                Confirm if delivered
              </Text>
            </TouchableOpacity>
          </>
        )}

        {props?.radioHandler && (
          <View style={styles.confirmDeliveredView}>
            <TouchableOpacity
              onPress={() => {
                props?.setDeliveredConfirmHandler('no');
                props.onDismiss();
              }}>
              <Text allowFontScaling={false} style={styles.noText}>
                no
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                updateOrderStatus(props?.orderId);
                props?.setDeliveredConfirmHandler('yes');
                props?.setOrderDeliveredModal(true);
                sendNotificationToTopic(
                  'Order Confirm',
                  'We have received the order ' +
                    props?.orderShortId +
                    ' Check Order Id',
                  'STR_' + props?.storeId,
                  {orderId: props?.orderId},
                );
              }}>
              <Text allowFontScaling={false} style={styles.yesText}>
                yes
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default DeliveryStatusModal;
