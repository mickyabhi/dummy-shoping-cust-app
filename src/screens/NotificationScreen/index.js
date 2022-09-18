import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from '../../components/Header';
import NotificationCard from './Components/NotificationCard';
import giftIcon from '../../../assets/images/gift_icon.png';
import bellIcon from '../../../assets/images/notificationBell.png';
import {scaledValue} from '../../utils/design.utils';
import Back_Navigation_Icon from '../../../assets/images/BackIcon.png';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getTimeDiff} from '../../utils/common.utils';
import * as mutations from '../../graphql/mutations';
import {fetchNotification, showLoading} from '../AppStore/actions';
import {API} from 'aws-amplify';
import crashlytics from '@react-native-firebase/crashlytics';

const NotificationScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const notifications = useSelector(state => state?.notifications);
  const user = useSelector(state => state?.userData);

  const updateReadNotification = async notificationId => {
    dispatch(showLoading(true));
    const notificationObj = {
      id: notificationId,
      isRead: true,
    };

    await API.graphql({
      query: mutations.updateNotification,
      variables: {input: notificationObj},
    })
      .then(resp =>
        dispatch(fetchNotification(resp.data.updateNotification.topic)),
      )
      .catch(error => {
        console.log('updateNotification.error', error);
        crashlytics()?.recordError(error);
        return null;
      });
    dispatch(showLoading(false));
  };

  console.log('notifications', notifications);

  const markAllAsReadHandler = () => {
    dispatch(showLoading(true));
    notifications.forEach(async item => {
      const notificationObj = {
        id: item?.id,
        isRead: true,
      };

      await API.graphql({
        query: mutations.updateNotification,
        variables: {input: notificationObj},
      })
        .then(resp => resp.data.updateNotification.topic)
        .catch(error => {
          console.log('updateReadNotification.error', error);
          crashlytics()?.recordError(error);
          return null;
        });
    });
    dispatch(fetchNotification('CAU' + user.id.replace('+', '_')));
    dispatch(showLoading(false));
  };

  return (
    <View style={styles.notificationView}>
      <Header
        backNavigationIcon={Back_Navigation_Icon}
        headerTitle="Notifications"
        textButton="Mark all as read"
        markAllAsReadHandler={markAllAsReadHandler}
        onPress={() => navigation.goBack()}
      />

      <FlatList
        data={notifications?.sort(
          (a, b) => new Date(b?.createdAt) - new Date(a?.createdAt),
        )}
        renderItem={({item}) => (
          <NotificationCard
            giftIcon={giftIcon}
            description={item?.body}
            time={getTimeDiff(item?.createdAt)}
            bellIcon={bellIcon}
            status={item?.title}
            width={scaledValue(70.77)}
            height={scaledValue(66.26)}
            isRead={item?.isRead}
            onPress={() => {
              const metaData = JSON.parse(item?.metaData);
              if (metaData?.orderId != null) {
                navigation.navigate('OrdersDetailScreen', {
                  orderId: metaData?.orderId,
                });
              }
              updateReadNotification(item?.id);
            }}
          />
        )}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  notificationView: {
    flex: 1,
  },
});
