import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  Appbar: {
    display: 'flex',
    justifyContent: 'space-between',
    elevation: 0,
    backgroundColor: 'transparent',
  },
  drawerIcon: {
    width: scaledValue(35.92),
    height: scaledValue(33.02),
    position: 'absolute',
  },
  textButton: {
    color: '#fff',
    fontSize: scaledValue(22),
    fontFamily: 'Lato-Regular',
    marginRight: scaledValue(27),
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backNavigationIcon: {
    width: scaledValue(20.08),
    height: scaledValue(34.27),
  },
  labelText: {
    color: '#fff',
    fontSize: scaledValue(24),
    marginLeft: scaledValue(38.1),
    marginRight: scaledValue(4),
    fontFamily: 'Lato-Medium',
    lineHeight: scaledValue(29),
    width: scaledValue(311),
  },
  headerTitle: {
    fontSize: scaledValue(30),
    color: '#fff',
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(36),
    textTransform: 'capitalize',
  },
  notificationTouchableOpacity: {
    marginLeft: scaledValue(1),
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerIconTouchableOpacity: {
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scaledValue(23.98),
  },
  cartIcon: {
    width: scaledValue(38.99),
    height: scaledValue(30.99),
  },
  avatarImage: {
    marginRight: scaledValue(16),
  },
  cartItemCount: {
    backgroundColor: 'green',
    width: scaledValue(26),
    height: scaledValue(26),
    borderRadius: scaledValue(50),
    fontSize: scaledValue(16),
    color: '#fff',
    textAlign: 'center',
    position: 'absolute',
    right: scaledValue(37),
    top: scaledValue(20),
  },
  notificationCount: {
    backgroundColor: 'green',
    width: scaledValue(26),
    height: scaledValue(26),
    borderRadius: scaledValue(50),
    fontSize: scaledValue(16),
    color: '#fff',
    textAlign: 'center',
    position: 'absolute',
    right: scaledValue(116),
    top: scaledValue(20),
  },
  cartIconView: {
    borderRadius: scaledValue(50),
    width: scaledValue(60),
    height: scaledValue(60),
  },
  walletHeaderMainView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  walletBalanceActiveView: {
    borderWidth: scaledValue(3),
    borderColor: '#F5682E',
    paddingTop: scaledValue(19),
    paddingBottom: scaledValue(26),
    width: scaledValue(380),
  },
  walletBalanceInactiveView: {
    paddingTop: scaledValue(19),
    paddingBottom: scaledValue(26),
    width: scaledValue(380),
  },
  validityActiveView: {
    borderWidth: scaledValue(3),
    borderColor: '#F5682E',
    paddingTop: scaledValue(19),
    paddingBottom: scaledValue(26),
    width: scaledValue(380),
  },
  validityInactiveView: {
    paddingTop: scaledValue(19),
    paddingBottom: scaledValue(26),
    width: scaledValue(380),
  },

  balanceText: {
    fontSize: scaledValue(25),
    fontFamily: 'Lato-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  balance: {
    fontSize: scaledValue(52),
    fontFamily: 'Lato-Medium',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  validityText: {
    fontSize: scaledValue(25),
    fontFamily: 'Lato-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
