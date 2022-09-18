import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {scaledValue} from '../../../../utils/design.utils';
import {Avatar} from 'react-native-paper';
import {styles} from './styles';

const WalletAvatar = props => {
  return (
    <TouchableOpacity
      style={styles.receivedView(props?.isLast)}
      onPress={props?.onPress}>
      <Avatar.Image size={scaledValue(77)} source={props?.avatarImage} />
      <Text allowFontScaling={false} style={styles.detailText(props?.color)}>
        {props?.avatarText}
      </Text>
    </TouchableOpacity>
  );
};

export default WalletAvatar;
