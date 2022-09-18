import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import {scaledValue} from '../../utils/design.utils';
const ItemsAvatar = props => {
  const styles = StyleSheet.create({
    avatarItemsView: {
      alignItems: 'center',
      width: scaledValue(126),
      marginRight: props.marginRight,
      backgroundColor: props.backgroundColor,
      borderRadius: scaledValue(20),
      paddingVertical: scaledValue(14),
      paddingHorizontal: props?.paddingHorizontal,
    },
    itemsTitle: {
      textAlign: 'center',
      color: props.color,
      fontSize: scaledValue(22),
      fontFamily: 'Lato-Medium',
      lineHeight: scaledValue(24),
      width: scaledValue(142),
      marginTop: scaledValue(10),
    },
    avatarImageStyle: {
      backgroundColor: '#fff',
    },
  });

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.avatarItemsView}>
      <Avatar.Image
        size={props.imageSize}
        source={props.avatarImage || {uri: props.categoryAvatarImage}}
        style={styles.avatarImageStyle}
      />
      <Text
        allowFontScaling={false}
        style={styles.itemsTitle}
        allowFontScaling={false}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemsAvatar;
