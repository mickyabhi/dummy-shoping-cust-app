import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Avatar} from 'react-native-paper';
import {scaledValue} from '../../../../utils/design.utils';

const WalletCard = props => {
  return (
    <View style={styles.totalRewardsView}>
      <View style={styles.avatarImageView}>
        <Avatar.Image
          size={scaledValue(77)}
          source={props?.cardIcon}
          style={styles.avatarImage}
        />
        <View style={styles.rewardsTextView}>
          {props?.rewardTitle && (
            <Text allowFontScaling={false} style={styles.rewardTitle}>
              {props?.rewardTitle}
            </Text>
          )}
          <Text allowFontScaling={false} style={styles.totalRewardsText}>
            {props?.rewardsText}
          </Text>
          <Text allowFontScaling={false} style={styles.expireDateText}>
            {props?.expireDateText}
          </Text>
        </View>
      </View>
      <Text
        allowFontScaling={false}
        style={styles.rewardAmount(props?.avatarIconHandler)}>
        {props?.rewardAmount}
      </Text>
    </View>
  );
};

export default WalletCard;
