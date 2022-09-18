import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../components/Header';
import backIcon from '../../../assets/images/addressBackIcon.png';
import {scaledValue} from '../../utils/design.utils';
import plusCircle from '../../../assets/images/plus_circle.png';
import AddressCard from './Components/AddressCard';
import homeIcon from '../../../assets/images/address_home.png';
import buildingImage from '../../../assets/images/building_image.png';
import locationImage from '../../../assets/images/address_location.png';
import editIcon from '../../../assets/images/edit_pen_icon.png';
import cancelIcon from '../../../assets/images/close_icon.png';
import {useNavigation} from '@react-navigation/native';
import {fetchUserData} from '../AppStore/actions';
import {useDispatch, useSelector} from 'react-redux';
import {analytic} from '../../utils/analytics';
import {Divider} from 'react-native-paper';
import {styles} from './styles';
import {getItemFromAsyncStorage} from '../../utils/storage.utils';
import Geolocation from '@react-native-community/geolocation';

const CustomerAddressScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const showAddress = useSelector(state => state?.userData?.addresses?.items);
  const [userAddress, setUserAddress] = useState(null);
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

  const currentLocationHandler = () => {
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

  useEffect(() => {
    dispatch(fetchUserData());
    loadCurrentLocation();
  }, []);

  useEffect(() => {
    setUserAddress(showAddress?.filter(item => item?.careOf != null));
  }, [showAddress]);

  return (
    <View style={styles.addressScreenView}>
      <Header
        backNavigationIcon={backIcon}
        headerTitle="My address"
        onPress={() => {
          analytic().trackEvent('AddressScreen', {
            CTA: 'backIcon',
          });
          navigation.replace('Home');
        }}
      />
      <TouchableOpacity
        style={styles.cardView}
        onPress={() => {
          analytic().trackEvent('AddressScreen', {
            CTA: 'addAddress',
          });
          currentLocationHandler();
        }}>
        <Image style={styles.addAddressImage} source={plusCircle} />
        <Text allowFontScaling={false} style={styles.addAddressText}>
          Add Address
        </Text>
      </TouchableOpacity>

      <FlatList
        data={userAddress?.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        )}
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
            editIcon={editIcon}
            cancelIcon={cancelIcon}
            addressCardData={item}
            userAddressLength={userAddress?.length}
          />
        )}
        ItemSeparatorComponent={() => <Divider style={styles.divider} />}
      />
    </View>
  );
};

export default CustomerAddressScreen;
