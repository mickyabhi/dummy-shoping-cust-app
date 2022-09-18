import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scaledValue} from '../../../utils/design.utils';
import {useNavigation} from '@react-navigation/native';
import {API} from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import {useDispatch} from 'react-redux';
import {
  fetchUserData,
  showAlertToast,
  showLoading,
} from '../../AppStore/actions';
import {AlertMessage} from '../../../utils/constants';
const AddressCard = props => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const deleteUserAddress = {
    id: props?.addressCardData?.id,
  };

  const deleteAddressDetails = async () => {
    await API.graphql({
      query: mutations.deleteAddress,
      variables: {input: deleteUserAddress},
    })
      .then(dispatch(fetchUserData()))
      .catch(error => {
        dispatch(showLoading(false));
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        crashlytics()?.recordError(error);
        console.log('deleteAddressDetails.error', error);
      });
  };
  const styles = StyleSheet.create({
    addressCardView: {
      paddingTop: scaledValue(40),
      flexDirection: 'row',
    },
    cardTitleText: {
      fontSize: scaledValue(26),
      lineHeight: scaledValue(30),
      fontFamily: 'Lato-Bold',
      marginBottom: scaledValue(3),
      textTransform: 'capitalize',
      width: scaledValue(390),
    },
    addressCardImg: {
      marginHorizontal: scaledValue(50),
      width: props?.imageWidth,
      height: props?.imageHeight,
    },
    addressText: {
      color: 'gray',
      lineHeight: scaledValue(32),
      fontFamily: 'Lato-Medium',
      fontSize: scaledValue(24),
      width: props?.editIcon ? scaledValue(388) : scaledValue(545),
    },
    addressTextView: {
      paddingBottom: scaledValue(40),
      flexDirection: 'row',
    },
    editIconView: {
      borderWidth: scaledValue(2),
      borderColor: '#F8993A',
      alignItems: 'center',
      justifyContent: 'center',
      width: scaledValue(43.11),
      height: scaledValue(43.11),
      marginLeft: scaledValue(44.53),
    },
    editIcon: {
      width: scaledValue(24.01),
      height: scaledValue(24.05),
      tintColor: '#F8993A',
    },
    cancelIconView: {
      borderWidth: scaledValue(2),
      borderColor: props.userAddressLength == 1 ? '#DCDCDC' : 'gray',
      alignItems: 'center',
      justifyContent: 'center',
      width: scaledValue(43.11),
      height: scaledValue(43.11),
      marginLeft: scaledValue(39.95),
    },
    cancelIcon: {
      width: scaledValue(24.01),
      height: scaledValue(24.05),
      tintColor: props.userAddressLength == 1 ? '#DCDCDC' : 'gray',
    },
    iconsMainView: {flexDirection: 'row'},
  });

  return (
    <>
      {props?.addressCardData?.latitude != null && (
        <TouchableOpacity
          disabled={!props.onPress}
          style={styles.addressCardView}
          onPress={props.onPress}>
          <Image source={props?.image} style={styles.addressCardImg} />
          <View style={styles.addressTextView}>
            <View>
              <Text
                allowFontScaling={false}
                style={styles.cardTitleText}
                numberOfLines={1}>
                {props?.addressCardData?.tag}
              </Text>
              <Text allowFontScaling={false} style={styles.addressText}>
                {`${
                  props?.addressCardData?.address
                    ? props?.addressCardData?.address
                    : ''
                } ${
                  props?.addressCardData?.location
                    ? props?.addressCardData?.location
                    : ''
                } ${
                  props?.addressCardData?.landmark
                    ? props?.addressCardData?.landmark
                    : ''
                } ${
                  props?.addressCardData?.city
                    ? props?.addressCardData?.city
                    : ''
                } ${
                  props?.addressCardData?.state
                    ? props?.addressCardData?.state
                    : ''
                } ${
                  props?.addressCardData?.pincode
                    ? props?.addressCardData?.pincode
                    : ''
                }`}
              </Text>
            </View>
            {props?.editIcon && (
              <View style={styles.iconsMainView}>
                <TouchableOpacity
                  style={styles.editIconView}
                  onPress={() =>
                    navigation.replace('ManageAddressScreen', {
                      addressData: props?.addressCardData,
                    })
                  }>
                  <Image source={props?.editIcon} style={styles.editIcon} />
                </TouchableOpacity>

                <TouchableOpacity
                  disabled={props.userAddressLength == 1}
                  onPress={deleteAddressDetails}
                  style={styles.cancelIconView}>
                  <Image source={props?.cancelIcon} style={styles.cancelIcon} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default AddressCard;
