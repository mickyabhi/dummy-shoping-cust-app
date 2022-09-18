import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
import Button from '../../components/Button';
import locationIcon from '../../../assets/images/locationIcon.png';
import closeIcon from '../../../assets/images/close_icon.png';
import MapView from 'react-native-maps';
import {geocodeLatLng} from '../../utils/common.utils';
import {analytic} from '../../utils/analytics';
import * as mutations from '../../graphql/mutations';
import mark from '../../../assets/images/location.png';
import {useNavigation} from '@react-navigation/native';
import {fetchUserData, showAlertToast, showLoading} from '../AppStore/actions';
import {useSelector, useDispatch} from 'react-redux';
import API from '@aws-amplify/api';
import backNavigationIcon from '../../../assets/images/BackIcon.png';
import {IconButton} from 'react-native-paper';
import crashlytics from '@react-native-firebase/crashlytics';
import {AlertMessage} from '../../utils/constants';
import {styles} from './styles';
import GooglePlacesInput from '../../components/GooglePlaceInput';
import {
  getItemFromAsyncStorage,
  setItemInAsyncStorage,
} from '../../utils/storage.utils';

const DeliveryLocationScreen = props => {
  const clearInput = useRef();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [signUp] = useState(props?.route?.params?.signUp);
  const user = useSelector(state => state?.userData);
  const [address, setAddress] = useState({
    city: '',
    state: '',
    address: '',
    pincode: '',
    location: '',
    landmark: '',
    latitude: '',
    longitude: '',
  });
  const [location, setLocation] = useState(null);

  const loadAddress = async (lat, lng) => {
    const addressResp = await geocodeLatLng(lat, lng);
    setAddress(addressResp);
  };

  useEffect(() => {
    dispatch(fetchUserData());
    loadAddress(location?.latitude, location?.longitude);
  }, [location]);

  const createAddress = async () => {
    const currentUserId = await getItemFromAsyncStorage('current_user_id');
    dispatch(showLoading(true));
    const createAddressInput = {
      address: address?.address || '',
      location: address?.location || '',
      landmark: address?.landmark || '',
      city: address?.city,
      careOf: user?.firstName || '',
      careOfLastName: user?.lastName || '',
      pincode: address?.pincode,
      latitude: address?.latitude,
      longitude: address?.longitude,
      tag: address?.location || address?.landmark || address?.city || '',
      state: address?.state,
      addressUserId: user?.id || currentUserId,
      userId: user?.id || currentUserId,
      contactNumber: user?.id || currentUserId,
    };
    if (signUp != true) {
      const createAddressResp = await API.graphql({
        query: mutations.createAddress,
        variables: {input: createAddressInput},
      })
        .then(resp => resp?.data?.createAddress)
        .catch(error => {
          dispatch(showLoading(false));
          crashlytics()?.recordError(error);
          dispatch(
            showAlertToast({
              alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
            }),
          );
        });

      if (createAddressResp != null) {
        createAddressInput.id = createAddressResp.id;
        dispatch(fetchUserData());
        await setItemInAsyncStorage(
          'selectedAddress',
          JSON.stringify(createAddressInput),
        );
        navigation.navigate('Home');
      }
      dispatch(showLoading(false));
    }
    if (signUp == true) {
      navigation.navigate('Address', {address: createAddressInput});
      dispatch(showLoading(false));
    }
  };

  const setCurrentLocation = async () => {
    const lat = await getItemFromAsyncStorage('latitude');
    const long = await getItemFromAsyncStorage('longitude');
    setLocation({
      latitude: JSON.parse(lat) || props?.route?.params?.latitude || 12.9542946,
      longitude:
        JSON.parse(long) || props?.route?.params?.longitude || 77.4908535,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  useEffect(() => {
    setCurrentLocation();
  }, [props]);

  return (
    <View style={styles.mainContainer}>
      <GooglePlacesInput
        clearTextRef={clearInput}
        placeholder="Search"
        fetchDetails={true}
        debounce={200}
        onPress={(data, details = null) => {
          setLocation({
            latitude: details?.geometry?.location?.lat,
            longitude: details?.geometry?.location?.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        onFail={error => {
          crashlytics()?.recordError(error);
          dispatch(
            showAlertToast({
              alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
            }),
          );
          console.log('GooglePlacesInput.error', error);
        }}
        query={{
          key: 'AIzaSyDewabbTSyGCcdgfWiskDDqtpQJ7qy5I98',
          language: 'en',
          components: 'country:in',
        }}
        GooglePlacesDetailsQuery={{fields: 'geometry'}}
        styles={styles}
        enablePoweredByContainer={false}
        renderRightButton={() => (
          <TouchableOpacity
            onPress={() => {
              clearInput.current.clear();
            }}>
            <Image
              source={closeIcon}
              tintColor="gray"
              style={styles.placeSearchInput}
            />
          </TouchableOpacity>
        )}
      />
      <View style={styles.mapView}>
        <MapView
          region={location}
          onRegionChangeComplete={location => setLocation(location)}
          style={styles.map}></MapView>
        <Image source={mark} style={styles.marker} />
        <IconButton
          style={styles.backIconView}
          icon={backNavigationIcon}
          color="#fff"
          size={scaledValue(37)}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.bottomView}>
        <Text allowFontScaling={false} style={styles.deliveryText}>
          SELECT DELIVERY LOCATION
        </Text>
        <View style={styles.areaDetailsMainView}>
          <View style={styles.areaDetails}>
            <Image source={locationIcon} style={styles.locationImage} />
            <Text allowFontScaling={false} style={styles.areaText}>
              {address?.location || address?.city || address?.landmark}
            </Text>
          </View>
          <Button
            title="CHANGE"
            width={scaledValue(107.76)}
            height={scaledValue(39.87)}
            backgroundColor="#F5F5F5"
            borderColor="#D4D4D4"
            fontFamily="Lato-Bold"
            color="#F78B1E"
            fSize={scaledValue(18)}
            onPress={() => navigation.navigate('SetLocationScreen')}
          />
        </View>
        <Text allowFontScaling={false} style={styles.address} numberOfLines={2}>
          {`${address?.address ? address?.address : ''} ${
            address?.location ? address?.location : ''
          } ${address?.landmark ? address?.landmark : ''} ${
            address?.city ? address?.city : ''
          } ${address?.state ? address?.state : ''} ${
            address?.pincode ? address?.pincode : ''
          }`}
        </Text>
        <Button
          width={scaledValue(653.21)}
          height={scaledValue(118.53)}
          title="Confirm Location"
          backgroundColor="#F8993A"
          borderColor="#F8993A"
          color="#FFFFFF"
          borderRadius={scaledValue(24)}
          fSize={scaledValue(33)}
          fontFamily="Lato-Bold"
          onPress={createAddress}
        />
      </View>
    </View>
  );
};

export default DeliveryLocationScreen;
