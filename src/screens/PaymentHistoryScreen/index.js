import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import BackIcon from '../../../assets/images/BackIcon.png';
import {scaledValue} from '../../utils/design.utils';
import PaymentHistoryCard from './Components/PaymentHistoryCard';
import {useNavigation} from '@react-navigation/native';
import {fetchUserRazorPayPayments} from '../AppStore/actions';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

const PaymentHistoryScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const userRazorPayPayments = useSelector(
    state => state?.userRazorPayPayments,
  );

  useEffect(() => {
    dispatch(fetchUserRazorPayPayments());
  }, []);
  return (
    <View style={styles.paymentHistoryView}>
      <Header
        backNavigationIcon={BackIcon}
        headerTitle="Payment History"
        textButton={`${
          userRazorPayPayments ? userRazorPayPayments?.length : ''
        } Online Payments`}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.paymentHistoryMainView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={userRazorPayPayments?.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          )}
          renderItem={({item}) => <PaymentHistoryCard razorPayPayment={item} />}
        />
      </View>
    </View>
  );
};
export default PaymentHistoryScreen;
const styles = StyleSheet.create({
  paymentHistoryView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  paymentHistoryMainView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: scaledValue(47),
  },
});
