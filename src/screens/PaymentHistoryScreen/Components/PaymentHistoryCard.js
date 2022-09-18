import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scaledValue} from '../../../utils/design.utils';
import downloadIcon from '../../../../assets/images/download-icon.png';
import {formatDateString} from '../../../utils/common.utils';
import * as queries from '../../../graphql/queries';
import {API} from 'aws-amplify';
import {useDispatch} from 'react-redux';
import {AlertMessage, OrderStatus} from '../../../utils/constants';

const PaymentHistoryCard = props => {
  const dispatch = useDispatch();
  const [razorPayPayment] = useState(props?.razorPayPayment);
  const [order, setOrder] = useState(null);

  const loadOrder = async orderId => {
    const order = await API.graphql({
      query: queries.getOrder,
      variables: {id: orderId},
    })
      .then(resp => resp.data.getOrder)
      .catch(error => {
        console.log('loadOrder.error', error);
        crashlytics()?.recordError(error);
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        return null;
      });
    setOrder(order);
  };

  useEffect(() => {
    loadOrder(razorPayPayment?.orderId);
  }, [razorPayPayment]);

  return (
    <View style={styles.paymentHistoryCard}>
      <Text allowFontScaling={false} style={styles.cardTitleText}>
        {order?.store?.name}
      </Text>
      <View>
        <View style={styles.orderIdView}>
          <Text allowFontScaling={false} style={styles.paymentHistoryTypeText}>
            Order ID
          </Text>
          <Text allowFontScaling={false} style={styles.orderIdText}>
            {order?.shortId}
          </Text>
        </View>
        <View style={styles.orderIdView}>
          <Text allowFontScaling={false} style={styles.paymentHistoryTypeText}>
            Amount
          </Text>
          <Text allowFontScaling={false} style={styles.orderIdText}>
            {'₹' + razorPayPayment?.amount / 100}
          </Text>
        </View>
        <View style={styles.paymentHistoryTextView}>
          <Text allowFontScaling={false} style={styles.paymentHistoryTypeText}>
            Transaction ID
          </Text>
          <Text allowFontScaling={false} style={styles.transactionIdText}>
            {razorPayPayment?.razorpay_payment_id}
          </Text>
        </View>
        <View style={styles.paymentHistoryTextView}>
          <Text allowFontScaling={false} style={styles.paymentHistoryTypeText}>
            Date
          </Text>
          <Text allowFontScaling={false} style={styles.dateText}>
            {formatDateString(razorPayPayment?.createdAt)}
          </Text>
        </View>
        <View style={styles.paymentHistoryTextView}>
          <Text allowFontScaling={false} style={styles.paymentHistoryTypeText}>
            Payment Status
          </Text>
          <Text allowFontScaling={false} style={styles.paymentStatusText}>
            {order?.orderStatus == OrderStatus?.CANCELLED
              ? 'Refund'
              : 'Success'}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default PaymentHistoryCard;
const styles = StyleSheet.create({
  paymentHistoryCard: {
    width: scaledValue(668),
    paddingTop: scaledValue(17),
    paddingBottom: scaledValue(21),
    paddingRight: scaledValue(39),
    paddingLeft: scaledValue(15),
    borderRadius: scaledValue(8),
    borderWidth: scaledValue(1),
    elevation: scaledValue(1),
    borderColor: '#CDCDCD',
    shadowColor: '#00000029',
    marginBottom: scaledValue(28),
  },
  cardTitleText: {
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Medium',
    marginBottom: scaledValue(21),
  },
  paymentHistoryTypeText: {
    fontFamily: 'Lato-Regular',
    fontSize: scaledValue(24),
    color: 'gray',
  },
  orderIdView: {
    flexDirection: 'row',
    marginBottom: scaledValue(15),
  },
  paymentHistoryTextView: {
    flexDirection: 'row',
    marginBottom: scaledValue(11),
  },
  orderIdText: {
    fontFamily: 'Lato-Regular',
    fontSize: scaledValue(24),
    marginLeft: scaledValue(109),
  },
  transactionIdText: {
    fontFamily: 'Lato-Regular',
    fontSize: scaledValue(24),
    marginLeft: scaledValue(50),
  },
  dateText: {
    fontFamily: 'Lato-Regular',
    fontSize: scaledValue(24),
    marginLeft: scaledValue(151),
  },
  paymentStatusText: {
    fontFamily: 'Lato-Medium',
    fontSize: scaledValue(24),
    color: '#058375',
    marginLeft: scaledValue(38),
  },
  downloadIcon: {
    width: scaledValue(65),
    height: scaledValue(65),
  },
  downloadIconView: {
    position: 'absolute',
    bottom: scaledValue(94),
    right: scaledValue(39),
  },
});
