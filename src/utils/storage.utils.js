import AsyncStorage from '@react-native-async-storage/async-storage';
import {Storage} from 'aws-amplify';
import uuid from 'react-native-uuid';
import crashlytics from '@react-native-firebase/crashlytics';

export const setItemInAsyncStorage = async (key, value) => {
  console.log('setItemInAsyncStorage', key, value);
  await AsyncStorage.setItem(key, value);
};
export const getItemFromAsyncStorage = async (key, defaultValue = null) => {
  console.log('getItemFromAsyncStorage.key', key);
  return await AsyncStorage.getItem(key)
    .then(data => {
      console.log('getItemFromAsyncStorage.data', data);
      return data || defaultValue;
    })
    .catch(error => {
      crashlytics()?.recordError(error);
      console.log('getItemFromAsyncStorage.error', error);
      return defaultValue;
    });
};

export const uploadImageInS3 = async imageURI => {
  console.log('uploadImageInS3.imageURI', imageURI);
  if (imageURI == null) Promise.reject('Image URI is null');
  const extension = imageURI.split('.').pop();
  const contentType = 'image/' + extension;
  const fileName = uuid.v4() + '.' + extension;
  const photo = await fetch(imageURI);
  const photoBlob = await photo.blob();
  console.log('photoBlob', typeof photoBlob);
  return await Storage.put(fileName, photoBlob, {
    level: 'customer',
    contentType,
  })
    .then(() => Storage.get(fileName))
    .then(resp => resp.split(fileName + '?')[0] + fileName);
};
