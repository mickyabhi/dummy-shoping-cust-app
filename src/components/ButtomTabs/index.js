/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Text, StyleSheet, View} from 'react-native';
// import Home from '../../screens/HomeScreen'
// import React from 'react'
// const ButtomTabs = () => {
//      const ButtomTab = createBottomTabNavigator();
//     return (
//       <ButtomTab.Navigator
//         screenOptions={({route}) => ({
//           tabBarIcon: ({color}) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = 'home';
//             } else if (route.name === 'Catergories') {
//               iconName = 'explore';
//             } else if (route.name === 'Subscribe') {
//               iconName = 'subscriptions';
//             } else if (route.name === 'RegularBasket') {
//               iconName = 'shopping-basket';
//             } else if (route.name === 'Cart') {
//               iconName = 'shopping-cart';
//             }>
//     );
//   };
//   const Cart = () => {
//     return (
//       <View style={styles.View}>
//         <Text allowFontScaling={false}>Cart</Text>
//       </View>
//     );
//   };
//   const styles = StyleSheet.create({
//     View: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#fff'
//     },
//   });
//   export default ButtomTabs;
//         // })}
//         tabBarOptions={{
//           activeTintColor: '#F56B2D',
//           inactiveTintColor: '#000000',
//         }}>
//         <ButtomTab.Screen name="Home" component={Home} />
//         <ButtomTab.Screen name="Catergories" component={Catergories} />
//         <ButtomTab.Screen name="Subscribe" component={Subscribe} />
//         <ButtomTab.Screen name="RegularBasket" component={RegularBasket} />
//         <ButtomTab.Screen name="Cart" component={Cart} />
//       </ButtomTab.Navigator>
//     );
//   };

//   const Catergories = () => {
//     return (
//       <View style={styles.View}>
//         <Text allowFontScaling={false}>Catergories</Text>
//       </View>
//     );
//   };
//   const Subscribe = () => {
//     return (
//       <View style={styles.View}>
//         <Text allowFontScaling={false}>Subscribe</Text>
//       </View>
//     );
//   };
//   const RegularBasket = () => {
//     return (
//       <View style={styles.View}>
//         <Text allowFontScaling={false}>RegularBasket</Text>
//       </View>
//     );
//   };
//   const Cart = () => {
//     return (
//       <View style={styles.View}>
//         <Text allowFontScaling={false}>Cart</Text>
//       </View>
//     );
//   };
//   const styles = StyleSheet.create({
//     View: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#fff'
//     },
//   });
//   export default ButtomTabs;
