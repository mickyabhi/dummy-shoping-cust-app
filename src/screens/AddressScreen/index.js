import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
import Input from '../../components/InputText';
import user_image from '../../../assets/images/user_image.png';
import home_image from '../../../assets/images/home_image.png';
import location_image from '../../../assets/images/location_image.png';
import landmark_image from '../../../assets/images/landmark_image.png';
import city_image from '../../../assets/images/city_image.png';
import pin_image from '../../../assets/images/pin_image.png';
import Button from '../../components/Button';
import dropDownIcon from '../../../assets/images/gray_DropDown.png';
import {useNavigation} from '@react-navigation/native';
import {
  TextInput,
  HelperText,
  RadioButton,
  TouchableRipple,
} from 'react-native-paper';
import {isEmptyString, isNumeric, isNameValid} from '../../utils/common.utils';
import CityModal from './Components/CityModal';
import {getItemFromAsyncStorage} from '../../utils/storage.utils';
import API from '@aws-amplify/api';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import {showAlertToast, showLoading} from '../AppStore/actions';
import {useDispatch} from 'react-redux';
import {analytic} from '../../utils/analytics';
import crashlytics from '@react-native-firebase/crashlytics';
import {styles} from './styles';
import {AlertMessage} from '../../utils/constants';

const Address = props => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [radioValue, setRadioValue] = useState('home');
  const [shouldDisableSaveButton, setShouldDisableSaveButton] = useState(true);
  const [showSelectedCityModal, setShowSelectedCityModal] = useState(false);
  const [showCityValue, setShowCityValue] = useState(null);
  const [autoAddress, setAutoAddress] = useState(null);
  const [address, setAddress] = useState({
    name: '',
    lastName: '',
    address: '',
    location: '',
    landMark: '',
    city: '',
    state: '',
    pinCode: '',
  });

  useEffect(() => {
    setAddress({
      address: autoAddress?.address || '',
      location: autoAddress?.location || '',
      landMark: autoAddress?.landmark,
      pinCode: autoAddress?.pincode || '',
      city: setShowCityValue(autoAddress?.city || ''),
      state: autoAddress?.state || '',
    });
  }, [autoAddress]);

  useEffect(() => {
    setAutoAddress(props?.route?.params?.address);
  }, [props]);

  useEffect(() => {
    setShouldDisableSaveButton(
      isEmptyString(address?.name) ||
        isEmptyString(address?.lastName) ||
        isEmptyString(address?.address) ||
        isEmptyString(address?.location) ||
        isEmptyString(showCityValue) ||
        isEmptyString(address?.state) ||
        address?.pinCode?.length !== 6 ||
        !isNumeric(address?.pinCode) ||
        !isNameValid(address?.name) ||
        !isNameValid(address?.lastName),
    );
  }, [address, showCityValue]);

  const submitUserAddress = async () => {
    try {
      dispatch(showLoading(true));
      const currentUserId = await getItemFromAsyncStorage('current_user_id');

      let user = await API.graphql({
        query: queries.getUser,
        variables: {id: currentUserId},
      }).then(resp => resp?.data?.getUser);

      const createAndUpdateUserInput = {
        id: currentUserId,
        primaryNumber: currentUserId,
        firstName: address?.name,
        lastName: address?.lastName,
      };

      if (user == null) {
        user = await API.graphql({
          query: mutations.createUser,
          variables: {input: createAndUpdateUserInput},
        }).then(resp => resp?.data?.createUser);
        dispatch(showLoading(false));
        navigation.replace('Home');
      } else {
        user = await API.graphql({
          query: mutations.updateUser,
          variables: {input: createAndUpdateUserInput},
        }).then(resp => resp?.data?.updateUser);
      }

      const createAddressInput = {
        tag: radioValue,
        address: address?.address,
        location: address?.location,
        landmark: address?.landMark,
        city: showCityValue,
        state: address?.state,
        careOf: address?.name,
        careOfLastName: address?.lastName,
        pincode: address?.pinCode,
        latitude: autoAddress?.latitude,
        longitude: autoAddress?.longitude,
        addressUserId: user?.id,
        userId: user?.id,
        contactNumber: user?.id,
      };

      console.log('createAddressInput', createAddressInput);

      await API.graphql({
        query: mutations.createAddress,
        variables: {input: createAddressInput},
      }).then(resp => resp?.data?.createAddress);

      createAndUpdateUserInput['addresses'] = [createAddressInput];

      user = await API.graphql({
        query: queries.getUser,
        variables: {id: currentUserId},
      }).then(resp => resp?.data?.getUser);

      analytic().trackEvent('AddressScreen', {
        CTA: 'submitUserAddress',
      });
    } catch (error) {
      crashlytics()?.recordError(error);
      dispatch(showLoading(false));
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
      <StatusBar backgroundColor="#F5672E" />
      <ScrollView style={styles.container}>
        <Text allowFontScaling={false} style={styles.shareLocationText}>
          Please share your location to find local stores near you on b.local
          app.
        </Text>
        <Text allowFontScaling={false} style={styles.addressText}>
          Address Type
        </Text>
        <RadioButton.Group
          onValueChange={newValue => setRadioValue(newValue)}
          value={radioValue}>
          <View style={styles.radioContainer}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => {
                analytic().trackEvent('AddressScreen', {
                  CTA: 'homeSelected',
                });
                setRadioValue('home');
              }}>
              <RadioButton value="home" color="#F8993A" />
              <Text allowFontScaling={false} style={styles.textStyle}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.row}
              onPress={() => {
                analytic().trackEvent('AddressScreen', {
                  CTA: 'officeSelected',
                });
                setRadioValue('office');
              }}>
              <RadioButton value="office" color="#F8993A" />
              <Text allowFontScaling={false} style={styles.textStyle}>
                Office
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.row}
              onPress={() => {
                analytic().trackEvent('AddressScreen', {
                  CTA: 'otherSelected',
                });
                setRadioValue('other');
              }}>
              <RadioButton value="other" color="#F8993A" />
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
            label="Last Name"
            mode="flat"
            maxLength={25}
            style={styles.input}
            name="LastName"
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
            editable={false}
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
            editable={false}
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
              analytic().trackEvent('AddressScreen', {
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
                    analytic().trackEvent('AddressScreen', {
                      CTA: 'showCityModal',
                    });
                    setShowSelectedCityModal(true);
                  }}
                />
              }
            />
          </TouchableRipple>

          <Input
            editable={false}
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
            editable={false}
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
            title="Save Address"
            color="#fff"
            fontFamily="Lato-SemiBold"
            lineHeight={scaledValue(36)}
            size={scaledValue(30)}
            borderRadius={scaledValue(24)}
            onPress={submitUserAddress}
            disabled={shouldDisableSaveButton}
          />
        </View>
      </ScrollView>
      <CityModal
        visible={showSelectedCityModal}
        onDismiss={() => {
          analytic().trackEvent('AddressScreen', {
            CTA: 'hideCityModal',
          });
          setShowSelectedCityModal(false);
        }}
        setShowCityValue={setShowCityValue}
      />
    </SafeAreaView>
  );
};
export default Address;
