import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, ScrollView, Image} from 'react-native';
import Header from '../../components/Header';
import BackIcon from '../../../assets/images/BackIcon.png';
import {scaledValue} from '../../utils/design.utils';
import Input from '../../components/InputText';
import {TextInput} from 'react-native-paper';
import user_image from '../../../assets/images/user_image.png';
import EmailIcon from '../../../assets/images/emailImg.png';
import Button from '../../components/Button';
import ChooseImageModal from '../../components/ChooseImageModal';
import ImagePicker from 'react-native-image-crop-picker';
import {isEmailValid, isEmptyString, isNumeric} from '../../utils/common.utils';
import {HelperText} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import homeIcon from '../../../assets/images/home_image.png';
import {API} from 'aws-amplify';
import {uploadImageInS3} from '../../utils/storage.utils';
import * as mutations from '../../graphql/mutations';
import {showAlertToast, showLoading} from '../AppStore/actions';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {analytic} from '../../utils/analytics';
import EditIcon from '../../../assets/images/edit-pen.png';
import {styles} from './styles';
import {AlertMessage} from '../../utils/constants';
import crashlytics from '@react-native-firebase/crashlytics';

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [imageSelectModal, setImageSelectModal] = useState(false);
  const [disableUpdateButton, setDisableUpdateButton] = useState(true);
  const [profile, setProfile] = useState(null);
  const userData = useSelector(state => state?.userData);
  const [image, setImage] = useState(userData?.userImage?.imagePath);

  var placeholder =
    'https://blocalappstorage.s3.ap-south-1.amazonaws.com/EditProfieIcon.png';

  useEffect(() => {
    setDisableUpdateButton(
      (!isEmptyString(profile?.email) && !isEmailValid(profile?.email)) ||
        isEmptyString(profile?.name) ||
        isEmptyString(profile?.lastName),
    );
  }, [profile, image]);

  useEffect(() => {
    setProfile({
      name: userData?.firstName || null,
      lastName: userData?.lastName || null,
      altMobile: userData?.secondaryNumber || null,
      email: userData?.email || null,
    });
  }, [userData]);

  const hasErrorsEmail = () => {
    return profile?.email ? !isEmailValid(profile?.email) : null;
  };

  const hasErrorsAltMobile = () => {
    return profile?.altMobile ? !isNumeric(profile?.altMobile) : null;
  };

  const updateProfileHandler = async () => {
    try {
      analytic().trackEvent('UserProfile', {
        CTA: 'updateUserProfile',
      });

      dispatch(showLoading(true));

      const profileImage = image != null ? await uploadImageInS3(image) : null;
      let createProfileImage = null;

      if (profileImage != null) {
        const createUserImageInput = {
          userId: userData?.id,
          imagePath: profileImage,
        };

        createProfileImage = await API.graphql({
          query: mutations.createUserImage,
          variables: {
            input: createUserImageInput,
          },
        }).then(resp => resp?.data?.createUserImage);
      }

      const updateProfileInput = {
        id: userData?.id,
        firstName: profile?.name,
        lastName: profile?.lastName,
      };

      if (createProfileImage != null)
        updateProfileInput.userUserImageId = createProfileImage?.id;

      updateProfileInput.secondaryNumber = profile?.altMobile;
      updateProfileInput.email = profile?.email;

      console.log('profile', profile);
      console.log('updateProfileInput', updateProfileInput);

      await API.graphql({
        query: mutations.updateUser,
        variables: {input: updateProfileInput},
      });

      dispatch(
        showAlertToast({
          alertMessage: 'Profile updated',
        }),
      );

      navigation.navigate('Home');
      dispatch(showLoading(false));
    } catch (error) {
      dispatch(showLoading(false));
      console.log('updateProfileHandler.error', error);
      crashlytics()?.recordError(error);
      dispatch(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  };

  return (
    <View style={styles.userProfileView}>
      <Header
        backNavigationIcon={BackIcon}
        headerTitle="Edit Profile"
        onPress={() => {
          analytic().trackEvent('UserProfile', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />

      <ScrollView>
        <View style={styles.userProfileMainView}>
          <TouchableOpacity
            style={styles.touchableViewUserProfileIcon}
            onPress={() => {
              analytic().trackEvent('UserProfile', {
                CTA: 'showImageModal',
              });
              setImageSelectModal(true);
            }}>
            <FastImage
              style={image == null ? styles?.avatarImage : styles?.userImage}
              source={{uri: image || placeholder}}
            />
            {image && <Image source={EditIcon} style={styles.editIcon} />}
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <Input
              label="Name"
              name="Name"
              maxLength={25}
              mode="flat"
              style={styles.input}
              onChangeText={value => setProfile({...profile, name: value})}
              value={profile?.name}
              position={
                <TextInput.Icon
                  name={user_image}
                  style={styles.imagePinStyle}
                  color="#F8993A"
                />
              }
            />

            <Input
              label="Last Name"
              name="LastName"
              maxLength={25}
              mode="flat"
              style={styles.input}
              onChangeText={value => setProfile({...profile, lastName: value})}
              value={profile?.lastName}
              position={
                <TextInput.Icon
                  name={user_image}
                  style={styles.imagePinStyle}
                  color="#F8993A"
                />
              }
            />

            <Input
              label="Alternate Mobile Number"
              name="altMobile"
              maxLength={10}
              keyboardType="numeric"
              mode="flat"
              style={styles.input}
              onChangeText={value => setProfile({...profile, altMobile: value})}
              value={profile?.altMobile}
              position={
                <TextInput.Icon
                  name={homeIcon}
                  style={styles.imagePinStyle}
                  color="#F8993A"
                />
              }
            />
            {hasErrorsAltMobile() && (
              <HelperText type="error" visible={hasErrorsAltMobile()}>
                Phone Number is invalid!
              </HelperText>
            )}

            <Input
              label="Email"
              name="Email"
              mode="flat"
              maxLength={50}
              style={styles.input}
              onChangeText={value =>
                setProfile({...profile, email: value?.toLowerCase()})
              }
              value={profile?.email}
              underlineColor="transparent"
              position={
                <TextInput.Icon
                  name={EmailIcon}
                  style={styles.imagePinStyle}
                  color="#F8993A"
                />
              }
            />
            {hasErrorsEmail() && (
              <HelperText type="error" visible={hasErrorsEmail()}>
                Enter vaild email
              </HelperText>
            )}
          </View>

          <Button
            width={scaledValue(642.56)}
            borderColor="#F8993A"
            backgroundColor="#F8993A"
            borderRadius={scaledValue(24)}
            height={scaledValue(106.05)}
            title="Update"
            fontFamily="Lato-Semibold"
            color="#fff"
            onPress={updateProfileHandler}
            disabled={disableUpdateButton}
          />
        </View>
      </ScrollView>
      <ChooseImageModal
        visible={imageSelectModal}
        onDismiss={() => {
          analytic().trackEvent('UserProfile', {
            CTA: 'hideImageModal',
          });
          setImageSelectModal(false);
        }}
        selectImage={() => {
          ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
          }).then(image => {
            setImage(image.path);
          });
          setImageSelectModal(false);
        }}
        takeImage={() => {
          analytic().trackEvent('UserProfile', {
            CTA: 'capturedImage',
          });
          ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
          }).then(image => {
            setImage(image.path);
          });
          setImageSelectModal(false);
        }}
      />
    </View>
  );
};

export default UserProfile;
