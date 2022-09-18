import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import StoreInventory from './src/screens/StoreInventoryScreen';
import ItemScreen from './src/screens/ItemScreen';
import RelatedProductsScreen from './src/screens/RelatedProductsScreen';
import FrequentlyBroughtItems from './src/screens/FrequentlyBroughtItemsScreen';
import CartScreen from './src/screens/CartScreen';
import DeliveryOptionScreen from './src/screens/DeliveryOptionScreen';
import DeliveryAddressScreen from './src/screens/DeliveryAddressScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import PaymentMethod from './src/screens/PaymentMethodScreen';
import LoginScreen from './src/screens/LoginScreen';
import GetOtp from './src/screens/GetOtpScreen';
import Address from './src/screens/AddressScreen';
import PaymentMethodLoginScreen from './src/screens/PaymentMethodLoginScreen';
import PaymentMethodGetOtp from './src/screens/PaymentMethodGetOtpScreen';
import PaymentSuccess from './src/screens/PaymentSuccessScreen';
import CustomerOrdersScreen from './src/screens/CustomerOrdersScreen';
import OrdersDetailScreen from './src/screens/MyOrdersDetailScreen';
import UserProfile from './src/screens/UserProfile';
import ChatScreen from './src/screens/ChatScreen';
import CustomerAddressScreen from './src/screens/CustomerAddressScreen';
import {MyDrawer} from './src/components/Drawer';
import CartStore from './src/screens/CartStoreScreen';
import SetLocationScreen from './src/screens/SetLocationScreen';
import ManageAddressScreen from './src/screens/ManageAddressScreen';
import DeliveryLocationScreen from './src/screens/DeliveryLocationScreen';
import {LogBox} from 'react-native';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import {useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import Loader from './src/components/Loader';
import WalletScreen from './src/screens/WalletScreen';
import SnackBar from './src/components/SnackBar';

import Config from 'react-native-config';
console.log('Config', Config);

Amplify.configure(config);
LogBox.ignoreLogs(['Reanimated 2']);
const Stack = createStackNavigator();

const AppNavigator = () => {
  const loadingState = useSelector(state => state?.loadingState);
  const alertData = useSelector(state => state?.alertData);
  const initApp = async () => {
    const authStatus = await messaging().requestPermission();
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  };

  useEffect(() => {
    initApp();
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: '#fff',
            },
            ...TransitionPresets.SlideFromRightIOS,
          }}
          animation="fade">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={MyDrawer} />
          <Stack.Screen
            name="NotificationScreen"
            component={NotificationScreen}
          />
          <Stack.Screen name="WalletScreen" component={WalletScreen} />
          <Stack.Screen name="StoreInventory" component={StoreInventory} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
          <Stack.Screen
            name="RelatedProductsScreen"
            component={RelatedProductsScreen}
          />
          <Stack.Screen
            name="FrequentlyBroughtItems"
            component={FrequentlyBroughtItems}
          />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen
            name="DeliveryOptionScreen"
            component={DeliveryOptionScreen}
          />
          <Stack.Screen
            name="DeliveryAddressScreen"
            component={DeliveryAddressScreen}
          />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="GetOtp" component={GetOtp} />
          <Stack.Screen name="Address" component={Address} />
          <Stack.Screen
            name="PaymentMethodLoginScreen"
            component={PaymentMethodLoginScreen}
          />
          <Stack.Screen
            name="PaymentMethodGetOtp"
            component={PaymentMethodGetOtp}
          />
          <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
          <Stack.Screen
            name="CustomerOrdersScreen"
            component={CustomerOrdersScreen}
          />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen
            name="OrdersDetailScreen"
            component={OrdersDetailScreen}
          />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="CartStore" component={CartStore} />
          <Stack.Screen
            name="CustomerAddressScreen"
            component={CustomerAddressScreen}
          />
          <Stack.Screen
            name="SetLocationScreen"
            component={SetLocationScreen}
          />
          <Stack.Screen
            name="ManageAddressScreen"
            component={ManageAddressScreen}
          />
          <Stack.Screen
            name="DeliveryLocationScreen"
            component={DeliveryLocationScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {loadingState && <Loader />}
      {alertData != null && alertData?.alertMessage && (
        <SnackBar
          alertMessage={alertData?.alertMessage}
          actionButtonTitle={alertData?.actionButtonTitle}
        />
      )}
    </>
  );
};

export default AppNavigator;
