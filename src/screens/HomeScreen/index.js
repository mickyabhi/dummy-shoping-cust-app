import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, RefreshControl} from 'react-native';
import Header from '../../components/Header';
import ItemsAvatar from '../../components/ItemsAvatar';
import SearchBar from '../../components/SearchBar';
import StoreCard from '../../components/StoreCards';
import {scaledValue} from '../../utils/design.utils';
import dropDownIcon from '../../../assets/images/DropDown.png';
import drawerIcon from '../../../assets/images/DrawerIcon.png';
import searchBarIcon from '../../../assets/images/SearchIcon.png';
import notificationBellIcon from '../../../assets/images/notificationBell.png';
import cartIcon from '../../../assets/images/cartIcon.png';
import LogoutModal from './Components/LogoutModal';
import RateUsModal from './Components/RateUsModal';
import {useSelector, useDispatch} from 'react-redux';
import {
  showLogOutModal,
  showRateUsModal,
  fetchStoresList,
  fetchStoresByCategory,
  fetchUserData,
  fetchNotification,
  showLoading,
} from '../AppStore/actions';
import {analytic} from '../../utils/analytics';
import {getCategoryImage, sortCategory} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {getDistance} from 'geolib';
import {getItemFromAsyncStorage} from '../../utils/storage.utils';
import messaging from '@react-native-firebase/messaging';
import crashlytics from '@react-native-firebase/crashlytics';
import {useIsFocused} from '@react-navigation/core';
import {isEmptyString} from '../../utils/common.utils';

const Home = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState('');
  const logoutModalState = useSelector(state => state?.logOutModal);
  const rateUsModalState = useSelector(state => state?.rateUsModal);
  const storesList = useSelector(state => state?.storesList);
  const categories = useSelector(state => state?.categories);
  const storeByCategory = useSelector(state => state?.storeByCategory);
  const userData = useSelector(state => state?.userData);
  const userAddress = useSelector(state => state?.userData?.addresses?.items);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const setLocation = async () => {
    if (userLocation != null) return;

    const lat = await getItemFromAsyncStorage('latitude');
    const long = await getItemFromAsyncStorage('longitude');

    setUserLocation({
      latitude: lat,
      longitude: long,
    });
  };

  const getSelectedAddress = async () => {
    const address = await getItemFromAsyncStorage('selectedAddress');
    if (address != null) {
      setSelectedAddress(JSON.parse(address));
    } else {
      setSelectedAddress(
        userAddress?.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        )[0],
      );
    }
  };

  const loadStoresData = () => {
    if (storesList == null || !storesList.length || categories == null)
      dispatch(fetchStoresList());

    if (userData == null) dispatch(fetchUserData());
    if (userLocation == null) setLocation();
  };

  if (userData && userData?.id) {
    dispatch(fetchNotification('CAU' + userData?.id?.replace('+', '_')));
  }

  useEffect(() => {
    getSelectedAddress();

    if (userData?.id) {
      let topic = 'CAU' + userData?.id;
      topic = topic.replace('+', '_');
      console.log('subscribeToTopic.topic', topic);
      messaging()
        .subscribeToTopic(topic)
        .then(() => console.log('subscribeToTopic.success', topic))
        .catch(error => {
          crashlytics()?.recordError(error);
          console.log('subscribeToTopic.error', error);
          return null;
        });
    }
  }, [userAddress]);

  useEffect(() => {
    loadStoresData();
  }, [isFocused]);

  const filterStores = () => {
    dispatch(showLoading(true));
    let stores = storeByCategory?.length ? storeByCategory : storesList;

    const userLatitude = selectedAddress?.latitude || userLocation?.latitude;
    const userLongitude = selectedAddress?.longitude || userLocation?.longitude;

    stores = stores?.filter(
      item => item?.latitude != null && item?.longitude != null,
    );

    if (
      !isEmptyString(userLocation?.latitude) &&
      !isEmptyString(userLocation?.longitude)
    ) {
      stores = stores?.map(store => {
        const distance = getDistance(
          {
            latitude: userLatitude,
            longitude: userLongitude,
          },
          {
            latitude: store?.latitude,
            longitude: store?.longitude,
          },
        );

        store.distance = distance / 1000;
        return store;
      });
    }

    dispatch(showLoading(false));
    if (isEmptyString(searchValue)) {
      return stores;
    } else {
      return stores?.filter(elem =>
        elem.name.toLowerCase().includes(searchValue?.toLowerCase()),
      );
    }
  };

  const onCategorySelected = category => {
    console.log('onCategorySelected.category', category);

    analytic().trackEvent('HomePage', {
      CTA: 'selectedCategory',
      data: category,
    });

    setSelectedCategory(category);
    dispatch(showLoading(true));
    dispatch(fetchStoresByCategory(category));
  };

  const handleNotificationNavigation = notification => {
    if (notification?.orderId != null) {
      navigation.navigate('OrdersDetailScreen', {
        orderId: notification?.orderId,
      });
    }
    if (notification?.conversationId != null) {
      navigation.navigate('ChatScreen', {
        conversationId: notification?.conversationId,
        storeId: notification?.storeId,
        shortId: notification?.shortId,
        storeName: notification?.storeName,
        storeImage: notification?.sortedStoreImage,
      });
    }
  };

  useEffect(() => {
    messaging()
      .getInitialNotification()
      .then(notification => {
        if (notification) {
          notification = JSON.parse(notification?.data?.body);
          handleNotificationNavigation(notification);
        }
      });
    messaging().onNotificationOpenedApp(remoteMessage => {
      if (remoteMessage) {
        remoteMessage = JSON.parse(remoteMessage?.data?.body);
        handleNotificationNavigation(remoteMessage);
      }
    });
  }, []);

  const getSortedStores = () => {
    let filteredStoresList = filterStores()
      ?.sort((a, b) => a?.distance - b?.distance)
      ?.filter(store => store?.distance <= 60);

    const storesInRadiusTwentyKm = filteredStoresList?.filter(
      store => store?.distance <= 20,
    );

    let vegByNatureIndex = filteredStoresList.findIndex(
      store => store?.name === 'VEZBYNATURE',
    );

    if (vegByNatureIndex != -1) {
      filteredStoresList = filteredStoresList?.move(vegByNatureIndex, 2);
      const vegByNatureStore = filteredStoresList[2];

      filteredStoresList = filteredStoresList.filter(
        store => store?.distance <= 20,
      );
      filteredStoresList[2] = vegByNatureStore;

      return filteredStoresList;
    }

    if (
      filteredStoresList == null ||
      filteredStoresList?.length == 0 ||
      vegByNatureIndex == -1
    )
      return storesInRadiusTwentyKm;
  };

  return (
    <View style={styles.homeView}>
      <Header
        drawerIcon={drawerIcon}
        titleText={`${selectedAddress?.address ||
          ''} ${selectedAddress?.location || ''} ${selectedAddress?.landmark ||
          ''}${selectedAddress?.city || ''} ${selectedAddress?.state ||
          ''} ${selectedAddress?.pincode || ''}`}
        dropDownIcon={dropDownIcon}
        notificationBell={notificationBellIcon}
        cartIcon={cartIcon}
        onPress={() => {
          analytic().trackEvent('HomeScreen', {
            CTA: 'Drawer',
          });
          navigation.toggleDrawer();
        }}
      />

      <View style={styles.itemsAvatar}>
        <FlatList
          data={sortCategory(categories)}
          initialNumToRender={10}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <ItemsAvatar
              color="#fff"
              title={item}
              categoryAvatarImage={getCategoryImage(item)}
              imageSize={scaledValue(105)}
              marginRight={scaledValue(20)}
              backgroundColor={selectedCategory == item ? '#FAB875' : null}
              paddingHorizontal={scaledValue(80)}
              onPress={() => {
                onCategorySelected(item);
              }}
            />
          )}
        />
      </View>

      <View style={styles.lowerView}>
        <View style={styles.searchView}>
          <SearchBar
            placeholder="Search for Stores"
            icon={searchBarIcon}
            onChangeText={text => {
              setSearchValue(text);
            }}
          />
        </View>

        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => dispatch(fetchStoresList())}
            />
          }
          data={getSortedStores()}
          showsVerticalScrollIndicator={false}
          initialNumToRender={4}
          maxToRenderPerBatch={4}
          renderItem={({item}) => (
            <StoreCard value={searchValue} id={item?.id} store={item} />
          )}
        />
      </View>

      {logoutModalState && (
        <LogoutModal
          visible={logoutModalState}
          onDismiss={() => {
            analytic().trackEvent('HomePage', {
              CTA: 'logoutCancel',
            });
            dispatch(showLogOutModal(false));
          }}
        />
      )}

      <RateUsModal
        visible={rateUsModalState}
        onDismiss={() => {
          analytic().trackEvent('HomePage', {
            CTA: 'rateUsLater',
          });
          dispatch(showRateUsModal(false));
        }}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemsAvatar: {
    paddingHorizontal: scaledValue(60),
    backgroundColor: '#F8993A',
    paddingBottom: scaledValue(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: scaledValue(20),
    borderBottomRightRadius: scaledValue(20),
  },
  lowerView: {
    flex: 1,
    paddingVertical: scaledValue(30),
    paddingHorizontal: scaledValue(39),
  },
  searchView: {
    paddingBottom: scaledValue(30),
  },
});
