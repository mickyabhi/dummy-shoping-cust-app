import {StyleSheet} from 'react-native';
import {WalletType} from '../../../../utils/constants';
import {scaledValue} from '../../../../utils/design.utils';

export const styles = StyleSheet.create({
  totalRewardsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaledValue(42),
    paddingVertical: scaledValue(45),
  },
  totalRewardsText: {
    fontFamily: 'Lato-Medium',
    fontSize: scaledValue(24),
    color: '#000000',
  },

  rewardAmount: avatarIconHandler => ({
    fontFamily: 'Lato-Semibold',
    fontSize: scaledValue(39),
    color:
      avatarIconHandler == WalletType.PAID ||
      avatarIconHandler == WalletType.UNUSED
        ? '#F16623'
        : '#01A850',
  }),
  avatarImageView: {
    flexDirection: 'row',
  },
  expireDateText: {
    fontSize: scaledValue(22),
    color: '#696969',
    fontFamily: 'Lato-Medium',
  },

  rewardsTextView: {
    marginRight: scaledValue(29),
  },

  avatarImage: {
    marginRight: scaledValue(29),
  },
  rewardTitle: {
    fontSize: scaledValue(22),
    fontFamily: 'Lato-Medium',
    color: '#696969',
  },
});
