import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
import Header from '../../components/Header';
import backIcon from '../../../assets/images/BackIcon.png';
import {scaledValue} from '../../utils/design.utils';
// import plusCircle from '../../../assets/images/plus_circle.png';
import homeIcon from '../../../assets/images/address_home.png';
import buildingImage from '../../../assets/images/building_image.png';
import locationImage from '../../../assets/images/address_location.png';
import AddAddressCard from '../CustomerAddressScreen/Components/AddAddressCard';
import googleImage from '../../../assets/images/google_image.png';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AddressCard from '../CustomerAddressScreen/Components/AddressCard';
import {
  getItemFromAsyncStorage,
  setItemInAsyncStorage,
} from '../../utils/storage.utils';
import Geolocation from '@react-native-community/geolocation';
import {analytic} from '../../utils/analytics';
import {Divider} from 'react-native-paper';

const SetLocation = () => {
  const navigation = useNavigation();
  const userAddress = useSelector(state => state?.userData?.addresses?.items);
  const [locationHandler, setLocationHandler] = useState(true);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const loadCurrentLocation = async () => {
    setLocation({
      latitude: await getItemFromAsyncStorage('latitude'),
      longitude: await getItemFromAsyncStorage('longitude'),
    });
  };

  useEffect(() => {
    loadCurrentLocation();
  }, []);

  console.log('latitude', location?.latitude);
  console.log('longitude', location?.longitude);

  const setUserSelectedAddress = async address => {
    console.log('setUserSelectedAddress.address', address);
    await setItemInAsyncStorage('selectedAddress', JSON.stringify(address));
    navigation.navigate('Home');
  };

  const currentLocationClickHandler = () => {
    if (location?.latitude || location?.longitude) {
      navigation.navigate('DeliveryLocationScreen', {
        latitude: JSON.parse(location?.latitude),
        longitude: JSON.parse(location?.longitude),
      });
    } else {
      setLocationHandler(false);
      Geolocation.getCurrentPosition(data => {
        setLocation({
          latitude: data.coords.latitude,
          longitude: data.coords.longitude,
        });
      });
    }
  };

  useEffect(() => {
    if (!locationHandler) {
      navigation.navigate('DeliveryLocationScreen', {
        latitude: location?.latitude,
        longitude: location?.longitude,
      });
    }
  }, [location]);

  return (
    <View style={styles.addressScreenView}>
      <Header
        backNavigationIcon={backIcon}
        headerTitle="Set Your Location"
        onPress={() => {
          analytic().trackEvent('SetLocation', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />

      {/* <TouchableOpacity
        style={styles.cardView}
        onPress={() => {
          analytic().trackEvent('SetLocation', {
            CTA: 'addAddress',
          });
          navigation.navigate('ManageAddressScreen');
        }}>
        <Image style={styles.addAddressImage} source={plusCircle} />
        <Text allowFontScaling={false} style={styles.addAddressText}>Add Address</Text>
      </TouchableOpacity> */}

      <AddAddressCard
        cardTitle="Current Location"
        cardSubTitle="Using GPS"
        bgColor="#fff"
        titleColor="#F8993A"
        imageColor="#F8993A"
        buttonColor="#F78B1E"
        backgroundColor="#fff"
        borderColor="#F78B1E"
        borderRadius={scaledValue(17)}
        onPress={currentLocationClickHandler}
      />

      <View style={styles.saveAddressView}>
        <Text allowFontScaling={false} style={styles.saveAddressText}>
          saved addresses
        </Text>
      </View>

      <FlatList
        data={userAddress?.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <AddressCard
            borderWidth={scaledValue(1)}
            image={
              item.tag == 'home'
                ? homeIcon
                : item.tag == 'office'
                ? buildingImage
                : item.tag == 'others'
                ? locationImage
                : locationImage
            }
            imageWidth={
              item.tag == 'home'
                ? scaledValue(45)
                : item.tag == 'office'
                ? scaledValue(44.5)
                : item.tag == 'others'
                ? scaledValue(45)
                : scaledValue(45)
            }
            imageHeight={
              item.tag == 'home'
                ? scaledValue(45)
                : item.tag == 'office'
                ? scaledValue(44.5)
                : item.tag == 'others'
                ? scaledValue(55.44)
                : scaledValue(55.44)
            }
            addressCardData={item}
            onPress={() => {
              setUserSelectedAddress(item);
            }}
          />
        )}
        ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        ListFooterComponent={() => (
          <View style={styles.googleTextView}>
            <Text allowFontScaling={false} style={styles.poweredByText}>
              powered by
            </Text>
            <Image source={googleImage} style={styles.googleImage} />
          </View>
        )}
      />
    </View>
  );
};

export default SetLocation;

const styles = StyleSheet.create({
  addressScreenView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardView: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 4,
    flexDirection: 'row',
    height: scaledValue(146),
    alignItems: 'center',
  },
  addAddressImage: {
    height: scaledValue(53),
    width: scaledValue(45),
    marginLeft: scaledValue(51),
    marginRight: scaledValue(39),
  },
  addAddressText: {
    fontSize: scaledValue(30),
    fontFamily: 'Lato-Semibold',
  },
  saveAddressView: {
    paddingTop: scaledValue(48.28),
    paddingBottom: scaledValue(48.28),
    paddingLeft: scaledValue(135.5),
  },
  saveAddressText: {
    textTransform: 'uppercase',
    color: 'gray',
    fontSize: scaledValue(16),
    fontFamily: 'Lato-Bold',
  },
  googleTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: scaledValue(60),
    paddingTop: scaledValue(80),
  },
  poweredByText: {
    color: 'gray',
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Medium',
  },
  googleImage: {
    width: scaledValue(87),
    height: scaledValue(29),
  },
  listAddressView: {
    marginBottom: scaledValue(102),
  },
  divider: {
    backgroundColor: '#0000004D',
    width: scaledValue(614.5),
    marginLeft: scaledValue(135.5),
  },
});
