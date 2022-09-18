/* eslint-disable react/display-name */
import React from 'react';
import Home from '../../screens/HomeScreen';
import {DrawerContent} from '../DrawerContent';
import {Image} from 'react-native';
import HomeIcon from '../../../assets/images/home_Icon.png';
import {scaledValue} from '../../utils/design.utils';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WalletScreen from '../../screens/WalletScreen';
import ContactUs from '../../screens/ContactUsScreen';
import InviteStore from '../../screens/InviteStoreScreen';
import CustomerAddressScreen from '../../screens/CustomerAddressScreen';
import AboutUs from '../../screens/AboutUsScreen';
import PaymentHistoryScreen from '../../screens/PaymentHistoryScreen';
import CustomerOrdersScreen from '../../screens/CustomerOrdersScreen';
import WalletIcon from '../../../assets/images/wallet.png';
import MyOrderIcon from '../../../assets/images/myOrder_Icon.png';
import MyAddressIcon from '../../../assets/images/myAddress_Icon.png';
import PaymentHistoryIcon from '../../../assets/images/paymentHistory_Icon.png';
import StoreIcon from '../../../assets/images/store_Icon.png';
import CallIcon from '../../../assets/images/call_Icon.png';
import AboutUsIcon from '../../../assets/images/aboutUs_Icon.png';
import RefundPolicy from '../../screens/RefundPolicyScreen';
import RefundPolicyIcon from '../../../assets/images/refundPolicy_Icon.png';
const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {backgroundColor: '#F89A3A'},
        headerShown: false,
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#E88C2F',
        drawerInactiveTintColor: 'white',
      }}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => (
            <Image
              source={HomeIcon}
              style={{
                width: scaledValue(38.35),
                height: scaledValue(34.21),
              }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          drawerIcon: () => (
            <Image
              source={WalletIcon}
              style={{
                width: scaledValue(38.35),
                height: scaledValue(34.21),
              }}
              tintColor="#ffffff"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="My Orders"
        component={CustomerOrdersScreen}
        options={{
          drawerIcon: () => (
            <Image
              source={MyOrderIcon}
              style={{
                width: scaledValue(37.84),
                height: scaledValue(41.12),
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="My Address"
        component={CustomerAddressScreen}
        options={{
          drawerIcon: () => (
            <Image
              source={MyAddressIcon}
              style={{
                width: scaledValue(37.21),
                height: scaledValue(39.02),
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment History"
        component={PaymentHistoryScreen}
        options={{
          drawerIcon: () => (
            <Image
              source={PaymentHistoryIcon}
              style={{
                width: scaledValue(28.54),
                height: scaledValue(36.69),
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Invite Store"
        component={InviteStore}
        options={{
          drawerIcon: () => (
            <Image
              source={StoreIcon}
              style={{
                width: scaledValue(29.58),
                height: scaledValue(36.36),
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={ContactUs}
        options={{
          drawerIcon: () => (
            <Image
              source={CallIcon}
              style={{
                width: scaledValue(37.84),
                height: scaledValue(37.93),
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={AboutUs}
        options={{
          drawerIcon: () => (
            <Image
              source={AboutUsIcon}
              style={{
                width: scaledValue(37.84),
                height: scaledValue(37.89),
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Refund Policy"
        component={RefundPolicy}
        options={{
          drawerIcon: () => (
            <Image
              source={RefundPolicyIcon}
              style={{
                width: scaledValue(38),
                height: scaledValue(38),
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
