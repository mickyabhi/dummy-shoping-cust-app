import {customAlphabet} from 'nanoid/non-secure';
import moment from 'moment';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';
import auth from '@react-native-firebase/auth';
import {Auth} from 'aws-amplify';

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};

export const isEmptyString = str => {
  return str == null || str.toString().trim() === '';
};

export const isEmptyArray = arr => {
  return arr == null || !Array.isArray(arr) || !arr.length;
};

export const isNumeric = value => /^[0-9]*$/.test(value);

export const isEmailValid = value =>
  /^(?:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})?$/.test(value);

var nameRegex = /^[a-z ,.'-]+$/i;
export const isNameValid = value => nameRegex.test(value);

export const getShortId = (size = 12) => {
  const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMOPQRSTUVWXYZ', size);
  return nanoid();
};

export const getTimeDiff = dateTimeString => {
  let dateTime = new Date();
  if (dateTimeString != null) dateTime = new Date(dateTimeString);
  return moment(dateTime).fromNow();
};

export const getTimeDifference = (dateTimeString, differenceIn = 'minutes') => {
  let date = new Date();
  if (dateTimeString != null) date = new Date(dateTimeString);
  var srcTime = moment(date);
  const timeDiff = moment().diff(srcTime, differenceIn);

  return timeDiff;
};

export const formatDateString = dateString => {
  let date = new Date();
  if (dateString != null) date = new Date(dateString);
  return moment(date).format('DD-MM-YYYY');
};

export const geocodeLatLng = async (lat, long) => {
  const apiKey = 'AIzaSyDewabbTSyGCcdgfWiskDDqtpQJ7qy5I98';
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${apiKey}`;

  console.log('geocodeLatLng.apiUrl', apiUrl);

  const geocodeLatLngResp = await axios
    .get(apiUrl)
    .then(resp => resp?.data)
    .catch(error => console.log('resp.Address.error', error));

  console.log('geocodeLatLngResp', geocodeLatLngResp);

  const addressResp = {
    city: null,
    state: null,
    address: null,
    pincode: null,
    location: null,
    landmark: null,
    latitude: lat,
    longitude: long,
  };

  geocodeLatLngResp?.results?.forEach(address => {
    const address_components = address.address_components;
    address_components.forEach(address_component => {
      if (
        address_component.types.includes('locality') &&
        addressResp.city == null
      ) {
        addressResp.city = address_component.long_name;
      }

      if (
        address_component.types.includes('premise') &&
        addressResp.address == null
      ) {
        addressResp.address = address.formatted_address;
      }

      if (
        address_component.types.includes('neighborhood') &&
        addressResp.landmark == null
      ) {
        addressResp.landmark = address_component.long_name;
      }

      if (
        address_component.types.includes('sublocality') &&
        address_component.types.includes('sublocality_level_1') &&
        addressResp.location == null
      ) {
        addressResp.location = address_component.long_name;
      }

      if (
        address_component.types.includes('postal_code') &&
        addressResp.pincode == null
      ) {
        addressResp.pincode = address_component.long_name;
      }

      if (
        address_component.types.includes('administrative_area_level_1') &&
        addressResp.state == null
      ) {
        addressResp.state = address_component.long_name;
      }
    });

    // console.log('address', address);
  });

  return addressResp;
};

export const signOutUser = async (clearStorage = true) => {
  console.log(' ***** signOutUser ***** ', clearStorage);
  return new Promise(async (resolve, reject) => {
    try {
      await auth()
        .signOut()
        .catch(err => console.log(err));
      await Auth.signOut().catch(err => console.log(err));
      if (clearStorage) {
        await AsyncStorage.clear().catch(err => console.log(err));
      }
      resolve('Success');
    } catch (error) {
      crashlytics()?.recordError(error);
      reject(error);
    }
    resolve('Success');
  });
};

export const loadAmplifyAuth = async () => {
  await Auth.currentAuthenticatedUser()
    .then(res =>
      console.log('loadAmplifyAuth.currentAuthenticatedUser.res', res),
    )
    .catch(error =>
      console.log('loadAmplifyAuth.currentAuthenticatedUser.error:', error),
    );
  await Auth.currentCredentials()
    .then(res => console.log('loadAmplifyAuth.currentCredentials.res', res))
    .catch(error =>
      console.log('loadAmplifyAuth.currentCredentials.error:', error),
    );
  await Auth.currentSession()
    .then(res => console.log('loadAmplifyAuth.currentSession.res', res))
    .catch(error =>
      console.log('loadAmplifyAuth.currentSession.error:', error),
    );
  await Auth.currentUserInfo()
    .then(res => console.log('loadAmplifyAuth.currentUserInfo.res', res))
    .catch(error =>
      console.log('loadAmplifyAuth.currentUserInfo.error:', error),
    );
  return Auth.currentUserPoolUser()
    .then(res => console.log('loadAmplifyAuth.currentUserPoolUser.res', res))
    .catch(error =>
      console.log('loadAmplifyAuth.currentUserPoolUser.error:', error),
    );
};
