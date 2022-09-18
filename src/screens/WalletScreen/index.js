import React, {useState} from 'react';
import {View} from 'react-native';
import Back_Navigation_Icon from '../../../assets/images/BackIcon.png';
import {useNavigation} from '@react-navigation/core';
import {Divider} from 'react-native-paper';
import receivedIcon from '../../../assets/images/receivedIcon.png';
import paidIcon from '../../../assets/images/paidIcon.png';
import unusedIcon from '../../../assets/images/unusedIcon.png';
import unusedActiveIcon from '../../../assets/images/unused-active.png';
import receivedActiveIcon from '../../../assets/images/received-active.png';
import paidIconActive from '../../../assets/images/paid-active.png';
import rewardsIconActive from '../../../assets/images/rewards-active.png';
import rewards from '../../../assets/images/rewards.png';
import WalletHeader from '../../components/WalletHeader';
import {styles} from './styles';
import WalletAvatar from './Components/WalletAvatar';
import {WalletType} from '../../utils/constants';
import WalletCard from './Components/WalletCard';

const WalletScreen = () => {
  const navigation = useNavigation();
  const [avatarIconHandler, setAvatarIconHandler] = useState('Received');
  return (
    <View style={styles.walletMainView}>
      <WalletHeader
        backNavigationIcon={Back_Navigation_Icon}
        headerTitle="Wallet"
        onPress={() => navigation.goBack()}
        balanceText="Wallet Balance"
        validityText="Expires in 48 hrs"
        balance="44"
      />

      <View style={styles.walletDetailView}>
        <WalletAvatar
          avatarText="Received"
          avatarImage={
            avatarIconHandler == WalletType.RECEIVED
              ? receivedActiveIcon
              : receivedIcon
          }
          onPress={() => setAvatarIconHandler('Received')}
          color={
            avatarIconHandler == WalletType.RECEIVED ? '#00A74E' : '#4A4A4A'
          }
        />
        <WalletAvatar
          avatarText="Paid"
          avatarImage={
            avatarIconHandler == WalletType.PAID ? paidIconActive : paidIcon
          }
          onPress={() => setAvatarIconHandler('Paid')}
          color={avatarIconHandler == WalletType.PAID ? '#F16623' : '#4A4A4A'}
        />
        <WalletAvatar
          avatarText="Unused"
          avatarImage={
            avatarIconHandler == WalletType.UNUSED
              ? unusedActiveIcon
              : unusedIcon
          }
          onPress={() => setAvatarIconHandler('Unused')}
          color={avatarIconHandler == WalletType.UNUSED ? '#F89A3A' : '#4A4A4A'}
        />
        <WalletAvatar
          avatarText="Rewards"
          avatarImage={
            avatarIconHandler == WalletType.REWARDS
              ? rewardsIconActive
              : rewards
          }
          isLast
          onPress={() => setAvatarIconHandler('Rewards')}
          color={
            avatarIconHandler == WalletType.REWARDS ? '#00A74E' : '#4A4A4A'
          }
        />
      </View>

      {avatarIconHandler == WalletType.RECEIVED && (
        <>
          <WalletCard
            cardIcon={receivedActiveIcon}
            rewardsText="Reward on 'First time purchase offer'"
            expireDateText="Expires on 25/02/2021"
            rewardAmount="₹50"
          />
          <Divider />
          <WalletCard
            cardIcon={receivedActiveIcon}
            rewardsText="Reward on 'Shopping of Rs.500 and above''"
            expireDateText="Expires on 25/02/2021"
            rewardAmount="₹50"
          />
          <Divider />
        </>
      )}

      {avatarIconHandler == WalletType.PAID && (
        <>
          <WalletCard
            cardIcon={paidIconActive}
            rewardsText="Redeem on transaction 'ID009'"
            expireDateText="Used on 21/02/2021"
            rewardTitle="REWARD"
            rewardAmount="₹10"
            avatarIconHandler={avatarIconHandler}
          />
          <Divider />
          <WalletCard
            cardIcon={paidIconActive}
            rewardsText="Redeem on transaction 'ID009'"
            expireDateText="Used on 21/02/2021"
            rewardTitle="COUPON"
            rewardAmount="₹50"
            avatarIconHandler={avatarIconHandler}
          />
          <Divider />
          <WalletCard
            cardIcon={paidIconActive}
            rewardsText="Redeem on transaction 'ID009'"
            expireDateText="Used on 21/02/2021"
            rewardTitle="CASHBACK"
            rewardAmount="₹30"
            avatarIconHandler={avatarIconHandler}
          />
        </>
      )}

      {avatarIconHandler == WalletType.UNUSED && (
        <>
          <WalletCard
            cardIcon={unusedActiveIcon}
            rewardsText="Cashback on purchase of Rs.200 & Above"
            expireDateText="Expired on 21/02/2021"
            rewardTitle="CASHBACK"
            rewardAmount="₹20"
            avatarIconHandler={avatarIconHandler}
          />
          <Divider />
          <WalletCard
            cardIcon={unusedActiveIcon}
            rewardsText="Cashback on purchase of Rs.200 & Above"
            expireDateText="Expired on 21/02/2021"
            rewardTitle="CASHBACK"
            rewardAmount="₹50"
            avatarIconHandler={avatarIconHandler}
          />
          <Divider />
        </>
      )}
    </View>
  );
};

export default WalletScreen;
