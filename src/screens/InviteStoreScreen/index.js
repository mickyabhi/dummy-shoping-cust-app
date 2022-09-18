import React, {useEffect, useState} from 'react';
import {TextInput, HelperText} from 'react-native-paper';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {StyleSheet, View, Keyboard} from 'react-native';
import Input from '../../components/InputText';
import {scaledValue} from '../../utils/design.utils';
import BackIcon from '../../../assets/images/BackIcon.png';
import pin_image from '../../../assets/images/pin_image.png';
import StoreIcon from '../../../assets/images/store_Icon.png';
import city_image from '../../../assets/images/city_image.png';
import mobile_image from '../../../assets/images/mobile_image.png';
import location_image from '../../../assets/images/location_image.png';
import InviteSuccessfullModal from './Components/InviteSuccessfullModal';
import {isEmptyString, isNumeric} from '../../utils/common.utils';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {submitInviteStore, fetchUserData} from '../AppStore/actions';
import {analytic} from '../../utils/analytics';

const InviteStore = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const user = useSelector(state => state?.userData);
  const [shouldDisableSubmitButton, setShouldDisableSubmitButton] =
    useState(true);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteDetails, setInviteDetails] = useState({
    storeName: '',
    mobileNumber: '',
    storeArea: '',
    city: '',
    pinCode: '',
  });

  useEffect(() => {
    setShouldDisableSubmitButton(
      inviteDetails.storeName.length < 3 ||
        inviteDetails?.mobileNumber?.length !== 10 ||
        !isNumeric(inviteDetails?.mobileNumber) ||
        isEmptyString(inviteDetails?.storeArea) ||
        isEmptyString(inviteDetails?.city) ||
        inviteDetails?.pinCode?.length !== 6 ||
        !isNumeric(inviteDetails?.pinCode),
    );
  }, [inviteDetails]);
  const hasErrors = () => {
    return !isNumeric(inviteDetails?.mobileNumber);
  };

  const hasMobileError = () => {
    return !isNumeric(inviteDetails.pinCode);
  };

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const submitInvite = () => {
    const inviteStoreDetail = {
      userId: user?.id,
      storeName: inviteDetails?.storeName,
      mobileNumber: inviteDetails?.mobileNumber,
      storeArea: inviteDetails?.storeArea,
      city: inviteDetails?.city,
      pincode: inviteDetails?.pinCode,
    };

    dispatch(submitInviteStore(inviteStoreDetail));
    setInviteDetails({
      storeName: '',
      mobileNumber: '',
      storeArea: '',
      city: '',
      pinCode: '',
    });
    setShowInviteModal(true);
    Keyboard.dismiss();
    analytic().trackEvent('InviteStore', {
      CTA: 'submitInvite',
    });
  };

  return (
    <>
      <View style={styles.inviteStoreView}>
        <Header
          backNavigationIcon={BackIcon}
          headerTitle="Invite Store"
          onPress={() => {
            analytic().trackEvent('InviteStoreScreen', {
              CTA: 'BackIcon',
            });
            navigation.goBack();
          }}
        />
        <View style={styles.inviteStoreMainView}>
          <View style={styles.textInputView}>
            <Input
              label="Store Name"
              name="StoreName"
              maxLength={25}
              mode="flat"
              style={styles.input}
              onChangeText={value =>
                setInviteDetails({...inviteDetails, storeName: value})
              }
              value={inviteDetails?.storeName}
              position={
                <TextInput.Icon
                  name={mobile_image}
                  style={styles.imagePinStyle}
                  color="#F8993A"
                />
              }
            />
            <Input
              label="Merchant Mobile Number"
              name="MerchantMobileNumber"
              keyboardType="numeric"
              maxLength={10}
              mode="flat"
              style={styles.input}
              onChangeText={value =>
                setInviteDetails({...inviteDetails, mobileNumber: value})
              }
              value={inviteDetails?.mobileNumber}
              position={
                <TextInput.Icon
                  name={StoreIcon}
                  style={styles.imagePinStyle}
                  color="#F8993A"
                />
              }
            />
            {hasErrors() && (
              <HelperText type="error" visible={hasErrors()}>
                Mobile Number is invalid!
              </HelperText>
            )}
            <Input
              label="Store Area"
              name="StoreArea"
              maxLength={50}
              mode="flat"
              style={styles.input}
              onChangeText={value =>
                setInviteDetails({...inviteDetails, storeArea: value})
              }
              value={inviteDetails?.storeArea}
              position={
                <TextInput.Icon
                  name={location_image}
                  style={styles.imagePinStyle}
                  color="#F8993A"
                />
              }
            />
            <Input
              label="City"
              name="City"
              maxLength={50}
              mode="flat"
              style={styles.input}
              onChangeText={value =>
                setInviteDetails({...inviteDetails, city: value})
              }
              value={inviteDetails?.city}
              position={
                <TextInput.Icon
                  name={city_image}
                  style={styles.imagePinStyle}
                  color="#F8993A"
                />
              }
            />
            <Input
              label="Pin code"
              name="PinCode"
              keyboardType="numeric"
              maxLength={6}
              mode="flat"
              style={styles.input}
              onChangeText={value =>
                setInviteDetails({...inviteDetails, pinCode: value})
              }
              value={inviteDetails?.pinCode}
              underlineColor="transparent"
              position={
                <TextInput.Icon
                  name={pin_image}
                  style={styles.imagePinStyle}
                  color="#F8993A"
                />
              }
            />
            {hasMobileError() && (
              <HelperText type="error" visible={hasMobileError()}>
                Pin Code is invalid!
              </HelperText>
            )}
          </View>
          <Button
            width={scaledValue(642.56)}
            height={scaledValue(106.05)}
            backgroundColor="#F8993A"
            borderColor="#F8993A"
            title="Submit"
            color="#fff"
            fontFamily="Lato-SemiBold"
            lineHeight={scaledValue(36)}
            size={scaledValue(30)}
            borderRadius={scaledValue(24)}
            disabled={shouldDisableSubmitButton}
            onPress={submitInvite}
          />
        </View>
      </View>
      <InviteSuccessfullModal
        visible={showInviteModal}
        onDismiss={() => {
          analytic().trackEvent('InviteStoreScreen', {
            CTA: 'hideInviteSucessfulModal',
          });
          setShowInviteModal(false);
        }}
      />
    </>
  );
};

export default InviteStore;

const styles = StyleSheet.create({
  inviteStoreView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inviteStoreMainView: {
    flex: 1,
    alignItems: 'center',
  },
  textInputView: {
    width: scaledValue(642.56),
    elevation: scaledValue(1),
    shadowColor: '#0000004D',
    borderWidth: scaledValue(1),
    borderColor: '#0000004D',
    borderRadius: scaledValue(24),
    marginBottom: scaledValue(40.5),
    marginTop: scaledValue(56),
    paddingHorizontal: scaledValue(15),
  },
  input: {
    backgroundColor: 'transparent',
    fontSize: scaledValue(26),
    fontFamily: 'Lato-Regular',
    height: scaledValue(106.58),
  },
});
