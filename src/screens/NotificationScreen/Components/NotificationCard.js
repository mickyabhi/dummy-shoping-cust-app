import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scaledValue} from '../../../utils/design.utils';

const NotificationCard = props => {
  const styles = StyleSheet.create({
    cardContainer: {
      borderBottomWidth: 1,
      borderBottomColor: props?.isRead === true ? '#F2F2F2' : '#fff',
      backgroundColor: props?.isRead === true ? '#fff' : '#F2F2F2',
    },
    notificationCardView: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: scaledValue(25.87),
      paddingVertical: scaledValue(46.09),
    },
    cardImage: {
      width: props.width,
      height: props.height,
    },
    cardDescriptionText: {
      width: scaledValue(456),
      fontSize: scaledValue(24),
    },
    cardTimeText: {
      fontSize: scaledValue(20),
      color: '#6E7989',
    },
    bellIcon: {
      width: scaledValue(17.14),
      height: scaledValue(19.28),
    },
    cardStatusText: {
      fontSize: scaledValue(20),
      color: '#6E7989',
    },
    cardStatusView: {
      flexDirection: 'row',
      paddingLeft: scaledValue(112.84),
      alignItems: 'center',
      marginBottom: scaledValue(46.09),
    },
  });
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={props.onPress}
      disabled={props?.disabled}>
      <View style={styles.notificationCardView}>
        <Image source={props?.giftIcon} style={styles.cardImage} />
        <Text allowFontScaling={false} style={styles.cardDescriptionText}>
          {props?.description}
        </Text>
        <Text allowFontScaling={false} style={styles.cardTimeText}>
          {props?.time}
        </Text>
      </View>
      <View style={styles.cardStatusView}>
        <Image
          source={props?.bellIcon}
          style={styles.bellIcon}
          tintColor="#6E7989"
        />
        <Text allowFontScaling={false} style={styles.cardStatusText}>
          {' '}
          {props?.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
