import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Appbar, IconButton} from 'react-native-paper';
import {scaledValue} from '../../utils/design.utils';

const WalletHeader = props => {
  const [walletSelection, setWalletSelection] = useState(null);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#F78326" />
      <LinearGradient colors={['#F78326', '#F8993A']}>
        <Appbar.Header style={styles.Appbar}>
          <View style={styles.leftIcons}>
            <IconButton
              style={styles.drawerIconTouchableOpacity}
              icon={props.drawerIcon || props.backNavigationIcon}
              color="#fff"
              size={props.drawerIcon ? scaledValue(37) : scaledValue(26)}
              onPress={props.onPress}
            />

            <Text allowFontScaling={false} style={styles.headerTitle}>
              {props.headerTitle}
            </Text>
          </View>
        </Appbar.Header>

        <View style={styles.walletHeaderMainView}>
          {walletSelection == 'walletBalance' && (
            <LinearGradient
              colors={['rgba(255, 255, 255,0.3)', 'rgba(247, 141, 55,2)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 0.5}}>
              <TouchableOpacity
                style={
                  walletSelection == 'walletBalance'
                    ? styles.walletBalanceActiveView
                    : styles.walletBalanceInactiveView
                }
                onPress={() => setWalletSelection('walletBalance')}>
                <Text allowFontScaling={false} style={styles.balanceText}>
                  {props?.balanceText}
                </Text>
                <Text allowFontScaling={false} style={styles.balance}>
                  ₹{props?.balance}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          )}

          {walletSelection != 'walletBalance' && (
            <TouchableOpacity
              style={
                walletSelection == 'walletBalance'
                  ? styles.walletBalanceActiveView
                  : styles.walletBalanceInactiveView
              }
              onPress={() => setWalletSelection('walletBalance')}>
              <Text allowFontScaling={false} style={styles.balanceText}>
                {props?.balanceText}
              </Text>
              <Text allowFontScaling={false} style={styles.balance}>
                {' '}
                ₹{props?.balance}
              </Text>
            </TouchableOpacity>
          )}

          {walletSelection == 'walletExpiry' && (
            <LinearGradient
              colors={['rgba(255, 255, 255,0.3)', 'rgba(247, 141, 55,2)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 0.5}}>
              <TouchableOpacity
                style={
                  walletSelection == 'walletExpiry'
                    ? styles.validityActiveView
                    : styles.validityInactiveView
                }
                onPress={() => setWalletSelection('walletExpiry')}>
                <Text allowFontScaling={false} style={styles.validityText}>
                  {props?.validityText}
                </Text>
                <Text allowFontScaling={false} style={styles.balance}>
                  ₹{props?.balance}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          )}

          {walletSelection != 'walletExpiry' && (
            <TouchableOpacity
              style={
                walletSelection == 'walletExpiry'
                  ? styles.validityActiveView
                  : styles.validityInactiveView
              }
              onPress={() => setWalletSelection('walletExpiry')}>
              <Text allowFontScaling={false} style={styles.validityText}>
                {props?.validityText}
              </Text>
              <Text allowFontScaling={false} style={styles.balance}>
                ₹{props?.balance}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WalletHeader;
