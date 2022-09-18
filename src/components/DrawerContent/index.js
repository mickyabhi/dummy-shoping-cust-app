import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image, Linking, Share, AppState} from 'react-native';
import {Avatar} from 'react-native-paper';
import share from '../../../assets/images/share.png';
import rateUs from '../../../assets/images/rateUs.png';
import logout from '../../../assets/images/logout.png';
import privacyPolicyIcon from '../../../assets/images/privacyPolicy_Icon.png';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {scaledValue} from '../../utils/design.utils';
import Button from '../Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  showLogOutModal,
  showRateUsModal,
  fetchUserData,
  fetchOrder,
} from '../../screens/AppStore/actions';
import termsOfUseIcon from '../../../assets/images/termsOfUse_icon.png';
import crashlytics from '@react-native-firebase/crashlytics';
import {useIsFocused} from '@react-navigation/core';
import {styles} from './styles';

import Config from 'react-native-config';
import awsmobile from '../../aws-exports';
console.log('Config.BUILD_TYPE', Config.BUILD_TYPE);
console.log('Config', Config);

export function DrawerContent(props) {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const userProfileData = useSelector(state => state?.userData);

  const placeholder =
    'https://blocalappstorage.s3.ap-south-1.amazonaws.com/profile_Icon.png';

  const shareApp = async () => {
    props.navigation.closeDrawer();
    try {
      const result = await Share.share({
        message:
          'https://play.google.com/store/apps/details?id=com.mode.nammakirana',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      crashlytics()?.recordError(error);

      alert(error.message);
    }
  };

  const rateTheApp = () => {
    props.navigation.closeDrawer();
    dispatch(showRateUsModal(true));
  };

  const logOutHandler = () => {
    props.navigation.closeDrawer();
    props.navigation.navigate('Home');
    dispatch(showLogOutModal(true));
  };

  const rateApp = () => {
    props.navigation.closeDrawer();
    props.navigation.navigate('Home');
    trackAnalytics().trackEvents('Drawer', {
      CTA: 'RateUs',
    });
    dispatch(showRateUsModal(true));
  };

  const termsOfUse = () => {
    props.navigation.navigate('RefundPolicy');
    Linking.openURL('https://blocal.co.in/user-terms/').catch(error =>
      console.error('error', error),
    );
  };

  const privacyPolicyHandler = () => {
    Linking.openURL('https://blocal.co.in/privacy-policy/').catch(error =>
      console.error('error', error),
    );
  };

  useEffect(() => {
    dispatch(fetchUserData());
    const subscription = AppState.addEventListener('change', nextAppState => {
      console.log('DrawerContent.appState.nextAppState', nextAppState);
      if (nextAppState != 'background') dispatch(fetchOrder());
    });

    return () => {
      subscription.remove();
    };
  }, [isFocused]);

  return (
    <>
      <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props}>
        <View style={styles.profileView}>
          <Avatar.Image
            size={scaledValue(116.93)}
            style={styles.avatarImage}
            source={{
              uri: userProfileData?.userImage?.imagePath || placeholder,
            }}
          />
          <Text allowFontScaling={false} style={styles.userNameText}>
            {`${userProfileData?.firstName ? userProfileData?.firstName : ''} ${
              userProfileData?.lastName ? userProfileData?.lastName : ''
            }`}
          </Text>
          {userProfileData?.primaryNumber && (
            <Text allowFontScaling={false} style={styles.phnNumberText}>
              {'+91' + ' ' + userProfileData?.primaryNumber?.slice(3)}
            </Text>
          )}

          <View style={styles.editButtonView}>
            <Button
              backgroundColor="#F5F5F5"
              borderColor="#D4D4D4"
              title="EDIT"
              fSize={scaledValue(18)}
              width={scaledValue(90.33)}
              height={scaledValue(39.87)}
              fontFamily="Lato-Bold"
              onPress={() => {
                navigation.navigate('UserProfile');
                props.navigation.closeDrawer();
              }}
            />
          </View>
        </View>

        <DrawerItemList {...props} />
        <DrawerItem
          label="Terms Of Use"
          labelStyle={styles.labelStyle}
          onPress={termsOfUse}
          icon={() => (
            <Image source={termsOfUseIcon} style={styles.privacyPolicyIcon} />
          )}
        />
        <DrawerItem
          label="Privacy Policy"
          labelStyle={styles.labelStyle}
          onPress={privacyPolicyHandler}
          icon={() => (
            <Image
              source={privacyPolicyIcon}
              style={styles.privacyPolicyIcon}
            />
          )}
        />

        <DrawerItem
          label="Rate Us"
          labelStyle={styles.labelStyle}
          icon={() => <Image source={rateUs} style={styles.rateUsImg} />}
          onPress={rateTheApp}
        />
        <DrawerItem
          label="Share App"
          labelStyle={styles.labelStyle}
          onPress={shareApp}
          icon={() => <Image source={share} style={styles.shareImg} />}
        />
        <DrawerItem
          label="Log out"
          labelStyle={styles.labelStyle}
          icon={() => <Image source={logout} style={styles.logoutImg} />}
          onPress={logOutHandler}
        />

        <Text allowFontScaling={false} style={styles.versionTextView}>
          {'App Version: ' +
            Config.VERSION_NAME +
            ' (' +
            Config.VERSION_CODE +
            ')' +
            (!awsmobile.aws_appsync_graphqlEndpoint.includes(
              'ozilyn3aovfybkfzvgaxgfc4fi',
            )
              ? ' - DEV '
              : '')}
        </Text>
      </DrawerContentScrollView>
    </>
  );
}
