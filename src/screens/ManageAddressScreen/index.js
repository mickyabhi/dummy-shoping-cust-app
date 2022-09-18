import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/InputText';
import backIcon from '../../../assets/images/BackIcon.png';
import {scaledValue} from '../../utils/design.utils';
import {isEmptyString, isNumeric} from '../../utils/common.utils';
import CityModal from '../AddressScreen/Components/CityModal';
import {
  TextInput,
  HelperText,
  RadioButton,
  TouchableRipple,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import user_image from '../../../assets/images/user_image.png';
import home_image from '../../../assets/images/home_image.png';
import location_image from '../../../assets/images/location_image.png';
import landmark_image from '../../../assets/images/landmark_image.png';
import city_image from '../../../assets/images/city_image.png';
import pin_image from '../../../assets/images/pin_image.png';
import Button from '../../components/Button';
import dropDownIcon from '../../../assets/images/gray_DropDown.png';
import {getItemFromAsyncStorage} from '../../utils/storage.utils';
import {API} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import UpdateConfirmModal from './Component/UpdateConfirmModal';
import {showAlertToast, showLoading} from '../AppStore/actions';
import {useDispatch} from 'react-redux';
import {analytic} from '../../utils/analytics';
import {styles} from './styles';
import {AlertMessage} from '../../utils/constants';
import crashlytics from '@react-native-firebase/crashlytics';

const ManageAddressScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [showCityValue, setShowCityValue] = useState(null);
  const [shouldDisableSaveButton, setShouldDisableSaveButton] = useState(true);
  const [showSelectedCityModal, setShowSelectedCityModal] = useState(false);
  const [showUpdateAddressModal, setUpdateAddressModal] = useState(false);
  const [value, setValue] = useState(
    props?.route?.params?.addressData?.tag || 'home',
  );
  const [address, setAddress] = useState(null);
  const [addressData] = useState(props?.route?.params?.addressData);

  useEffect(() => {
    setShouldDisableSaveButton(
      isEmptyString(address?.name) ||
        isEmptyString(address?.lastName) ||
        isEmptyString(address?.address) ||
        isEmptyString(address?.location) ||
        isEmptyString(showCityValue) ||
        isEmptyString(address?.state) ||
        address?.pinCode?.length !== 6 ||
        !isNumeric(address?.pinCode),
    );
  }, [address, showCityValue]);

  useEffect(() => {
    setAddress({
      name: '' || addressData?.careOf,
      lastName: '' || addressData?.careOfLastName,
      address: '' || addressData?.address,
      location: '' || addressData?.location,
      landMark: '' || addressData?.landmark,
      city: '' || setShowCityValue(addressData?.city),
      state: '' || addressData?.state,
      pinCode: '' || addressData?.pincode,
    });
  }, [addressData]);

  const submitUserAddress = async () => {
    try {
      dispatch(showLoading(true));
      analytic().trackEvent('ManageAddress', {
        CTA: 'updateUserAddress',
      });
      const currentUserId = await getItemFromAsyncStorage('current_user_id');
      const updateAddressInput = {
        id: addressData?.id,
        careOf: address?.name,
        careOfLastName: address?.lastName,
        tag: value,
        address: address?.address,
        location: address?.location,
        landmark: address?.landMark,
        city: showCityValue,
        state: address?.state,
        pincode: address?.pinCode,
        contactNumber: addressData?.id,
      };

      const createAddressInput = {
        careOf: address?.name,
        careOfLastName: address?.lastName,
        tag: value,
        address: address?.address,
        location: address?.location,
        landmark: address?.landMark,
        city: showCityValue,
        state: address?.state,
        pincode: address?.pinCode,
        addressUserId: currentUserId,
        userId: currentUserId,
        contactNumber: currentUserId,
      };

      console.log('createAddressInput', createAddressInput);

      if (addressData == undefined) {
        await API.graphql({
          query: mutations.createAddress,
          variables: {input: createAddressInput},
        }).then(resp => resp?.data?.createAddress);
      } else {
        await API.graphql({
          query: mutations.updateAddress,
          variables: {input: updateAddressInput},
        }).then(resp => resp?.data?.updateAddress);
      }
      dispatch(showLoading(false));
      navigation.replace('CustomerAddressScreen');
    } catch (error) {
      crashlytics()?.recordError(error);
      dispatch(showLoading(false));
      setUpdateAddressModal(false);
      dispatch(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
      console.log('submitUserAddress.error', error);
    }
  };

  const hasErrors = () => {
    return address?.pinCode ? !isNumeric(address?.pinCode) : null;
  };

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <Header
        backNavigationIcon={backIcon}
        headerTitle="Manage Your Address"
        onPress={() => {
          analytic().trackEvent('ManageAddress', {
            CTA: 'backIcon',
          });
          navigation.navigate('Home');
        }}
      />
      <ScrollView style={styles.container}>
        <Text allowFontScaling={false} style={styles.addressText}>
          Address Type
        </Text>
        <RadioButton.Group
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          <View style={styles.radioContainer}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => {
                analytic().trackEvent('ManageAddress', {
                  CTA: 'home',
                });
                setValue('home');
              }}>
              <RadioButton value="home" color="#F8993A" />
              <Text allowFontScaling={false} style={styles.textStyle}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.row}
              onPress={() => {
                analytic().trackEvent('ManageAddress', {
                  CTA: 'office',
                });
                setValue('office');
              }}>
              <RadioButton value="office" color="#F8993A" />
              <Text allowFontScaling={false} style={styles.textStyle}>
                Office
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.row}
              onPress={() => {
                analytic().trackEvent('ManageAddress', {
                  CTA: 'others',
                });
                setValue('others');
              }}>
              <RadioButton value="others" color="#F8993A" />
              <Text allowFontScaling={false} style={styles.textStyle}>
                Others
              </Text>
            </TouchableOpacity>
          </View>
        </RadioButton.Group>
        <View style={styles.inputTextContainer}>
          <Input
            label={'Name'}
            mode="flat"
            maxLength={25}
            style={styles.input}
            name="Name"
            onChangeText={value => setAddress({...address, name: value})}
            value={address?.name}
            position={
              <TextInput.Icon
                name={user_image}
                style={styles.imageNameStyle}
                color="#F8993A"
              />
            }
          />

          <Input
            label={'Last Name'}
            mode="flat"
            maxLength={25}
            style={styles.input}
            name="lastName"
            onChangeText={value => setAddress({...address, lastName: value})}
            value={address?.lastName}
            position={
              <TextInput.Icon
                name={user_image}
                style={styles.imageNameStyle}
                color="#F8993A"
              />
            }
          />

          <Input
            label="Flat, House no., Building, Apartment"
            mode="flat"
            style={styles.input}
            name="Address"
            onChangeText={value => setAddress({...address, address: value})}
            value={address?.address}
            position={
              <TextInput.Icon
                name={home_image}
                style={styles.imageStyle}
                color="#F8993A"
              />
            }
          />
          <Input
            label="Area, Colony, Street, Sector"
            mode="flat"
            name="Location"
            maxLength={50}
            style={styles.input}
            onChangeText={value => setAddress({...address, location: value})}
            value={address?.location}
            position={
              <TextInput.Icon
                name={location_image}
                style={styles.imageStyle}
                color="#F8993A"
              />
            }
          />
          <Input
            label="Landmark (Optional)"
            mode="flat"
            style={styles.input}
            maxLength={50}
            name="LandMark"
            onChangeText={value => setAddress({...address, landMark: value})}
            value={address?.landMark}
            position={
              <TextInput.Icon
                name={landmark_image}
                style={styles.imageStyle}
                color="#F8993A"
              />
            }
          />
          <TouchableRipple
            onPress={() => {
              analytic().trackEvent('ManageAddress', {
                CTA: 'showCityModal',
              });
              setShowSelectedCityModal(true);
            }}
            rippleColor="#f1f1f1">
            <Input
              label="City"
              mode="flat"
              name="City"
              maxLength={50}
              style={styles.cityInput}
              changeColor={!isNumeric(address?.city) ? '#ff6961' : '#F8993A'}
              value={showCityValue}
              disabled={true}
              position={
                <TextInput.Icon
                  name={city_image}
                  style={styles.imageCityStyle}
                  color="#F8993A"
                />
              }
              right={
                <TextInput.Icon
                  color="#F8993A"
                  name={dropDownIcon}
                  size={scaledValue(22)}
                  onPress={() => {
                    analytic().trackEvent('ManageAddress', {
                      CTA: 'showSelectedCityModal',
                    });
                    setShowSelectedCityModal(true);
                  }}
                />
              }
            />
          </TouchableRipple>

          <Input
            label="State"
            mode="flat"
            style={styles.input}
            maxLength={50}
            name="State"
            onChangeText={value => setAddress({...address, state: value})}
            value={address?.state}
            position={
              <TextInput.Icon
                name={city_image}
                style={styles.imageStyle}
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
            onChangeText={value => setAddress({...address, pinCode: value})}
            value={address?.pinCode}
            underlineColor="transparent"
            position={
              <TextInput.Icon
                name={pin_image}
                style={styles.imagePinStyle}
                color="#F8993A"
              />
            }
          />
          {hasErrors() && (
            <HelperText type="error" visible={hasErrors()}>
              Pin Code is invalid!
            </HelperText>
          )}
        </View>
        <View style={styles.buttonStyle}>
          <Button
            width={scaledValue(642.56)}
            height={scaledValue(106.05)}
            backgroundColor="#F8993A"
            borderColor="#F8993A"
            title={addressData == undefined ? 'Save Address' : 'Update Address'}
            color="#fff"
            fontFamily="Lato-SemiBold"
            lineHeight={scaledValue(36)}
            size={scaledValue(30)}
            borderRadius={scaledValue(24)}
            onPress={() => {
              analytic().trackEvent('ManageAddress', {
                CTA: 'Save/UpdateAddress',
              });
              addressData == undefined
                ? submitUserAddress()
                : setUpdateAddressModal(true);
            }}
            disabled={shouldDisableSaveButton}
          />
        </View>
      </ScrollView>
      <CityModal
        visible={showSelectedCityModal}
        onDismiss={() => {
          analytic().trackEvent('ManageAddress', {
            CTA: 'hideCityModal',
          });
          setShowSelectedCityModal(false);
        }}
        setShowCityValue={setShowCityValue}
      />

      <UpdateConfirmModal
        visible={showUpdateAddressModal}
        onDismiss={() => {
          analytic().trackEvent('ManageAddress', {
            CTA: 'hideUpdateAddressModal',
          });
          setUpdateAddressModal(false);
        }}
        submitUserAddress={submitUserAddress}
      />
    </SafeAreaView>
  );
};

export default ManageAddressScreen;
