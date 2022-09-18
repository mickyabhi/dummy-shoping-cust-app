/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {Text, View, Linking, Platform} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
import {Avatar} from 'react-native-paper';
import phoneIcon from '../../../assets/images/phone_icon.png';
import msgIcon from '../../../assets/images/msg_icon.png';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {OrderStatusMapping} from '../../utils/constants';
const OrderDetailsCard = props => {
  const [storeName] = useState(props?.storeName?.split(' '));
  const [storeImage, setStoreImage] = useState(null);

  useEffect(() => {
    props.storeImage ? setStoreImage(props.storeImage[0]) : null;
  }, [props?.storeImage]);

  const navigation = useNavigation();

  const makeCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${props?.phoneNumber}`;
    } else {
      phoneNumber = `telprompt:${props?.phoneNumber}`;
    }

    Linking.openURL(phoneNumber);
  };
  return (
    <View style={styles.cardView}>
      <View style={{flexDirection: 'row'}}>
        <Avatar.Text
          size={scaledValue(83)}
          label={storeName[0]?.charAt(0) + storeName[1]?.charAt(0)}
          labelStyle={styles.labelText}
          style={styles.labelStyles}
        />
        <View>
          <Text allowFontScaling={false} style={styles.idText}>
            Order ID: {props?.order?.shortId}
          </Text>
          <Text allowFontScaling={false} style={styles.dateText}>
            Date: {props?.date}
          </Text>
        </View>
      </View>
      <Text allowFontScaling={false} style={styles.statusText(props?.status)}>
        • {props?.status}
      </Text>
      <Text allowFontScaling={false} style={styles.storeNameText}>
        Store Name: {props?.storeName}
      </Text>
      <Text allowFontScaling={false} numberOfLines={2} style={styles.cityText}>
        {props?.city}
      </Text>
      <View style={styles.iconsStyles}>
        <IconButton
          style={styles.phoneIconStyles}
          icon={phoneIcon}
          color={'#F78326'}
          size={scaledValue(28.16)}
          onPress={makeCall}
        />
        <IconButton
          icon={msgIcon}
          color={'#F78326'}
          size={scaledValue(28.16)}
          onPress={() => {
            navigation.replace('ChatScreen', {
              order: props?.order,
              storeId: props?.order?.storeId,
              storeImg: storeImage,
            });
          }}
        />
      </View>
      {props?.status == OrderStatusMapping.DELIVERED && (
        <Text allowFontScaling={false} style={styles.statusMessage}>{`${
          props?.fulfillment ? props?.fulfillment : '0'
        } out of ${
          props?.orderedQty ? props?.orderedQty : '0'
        } items delivered`}</Text>
      )}
      {props?.status == OrderStatusMapping.DELIVERY_IN_PROGRESS && (
        <Text
          allowFontScaling={false}
          style={
            styles.statusMessage
          }>{`Ordered items delivered by ${props?.order?.preferredSlot?.slice(
          11,
        )} Today`}</Text>
      )}
    </View>
  );
};

export default OrderDetailsCard;
