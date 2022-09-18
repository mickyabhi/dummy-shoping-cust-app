import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import {scaledValue} from '../../utils/design.utils';
import FastImage from 'react-native-fast-image';
import {MessageType} from '../../utils/constants';
import {styles} from './styles';

const Message = props => {
  const chatLabelName = props?.label?.split(' ');
  return (
    <>
      {props.senderId == props.userId && (
        <>
          {props.type != MessageType.IMAGE && (
            <View style={styles.customerChatAreaView}>
              <View style={styles.chatTextView}>
                <Text allowFontScaling={false} style={styles.message}>
                  {props?.message}
                </Text>
              </View>
              {!props.userImage && (
                <Avatar.Text
                  size={scaledValue(110)}
                  label={`${
                    props?.firstName ? props?.firstName?.charAt(0) : ''
                  }${props?.lastName ? props?.lastName?.charAt(0) : ''}`}
                  labelStyle={styles.labelText}
                  style={styles.labelStyle}
                />
              )}
              {props?.userImage && (
                <Avatar.Image
                  size={scaledValue(110)}
                  source={{uri: props.userImage}}
                  style={styles.labelStyle}
                />
              )}
            </View>
          )}
          {props.type == MessageType.IMAGE && (
            <View style={styles.customerImageAreaView}>
              <TouchableOpacity
                style={styles.imageAreaView}
                onPress={props.onPress}>
                <FastImage
                  source={{uri: props?.message}}
                  style={styles.chatImage}
                />
              </TouchableOpacity>
              {!props.userImage && (
                <Avatar.Text
                  size={scaledValue(110)}
                  label={`${
                    props?.firstName ? props?.firstName?.charAt(0) : ''
                  }${props?.lastName ? props?.lastName?.charAt(0) : ''}`}
                  labelStyle={styles.labelText}
                  style={styles.labelStyle}
                />
              )}
              {props?.userImage && (
                <Avatar.Image
                  size={scaledValue(110)}
                  source={{uri: props.userImage}}
                  style={styles.labelStyle}
                />
              )}
            </View>
          )}
        </>
      )}

      {props.senderId != props.userId && (
        <>
          {props.type != MessageType.IMAGE && (
            <View style={styles.storeChatAreaView}>
              {!props?.storeImage && (
                <Avatar.Text
                  size={scaledValue(110)}
                  label={`${chatLabelName ? chatLabelName[0]?.charAt(0) : ''}${
                    chatLabelName ? chatLabelName[1]?.charAt(0) : ''
                  }`}
                  labelStyle={styles.labelText}
                  style={styles.storeLabelStyle}
                />
              )}
              {props?.storeImage && (
                <Avatar.Image
                  size={scaledValue(110)}
                  source={{uri: props.storeImage}}
                  style={styles.storeLabelStyle}
                />
              )}
              <View style={styles.storeChatTextView}>
                <Text allowFontScaling={false} style={styles.storeMessage}>
                  {props.message}
                </Text>
              </View>
            </View>
          )}
          {props.type == MessageType.IMAGE && (
            <View style={styles.storeChatAreaView}>
              {!props.storeImage && (
                <Avatar.Text
                  size={scaledValue(110)}
                  label={`${chatLabelName ? chatLabelName[0]?.charAt(0) : ''}${
                    chatLabelName ? chatLabelName[1]?.charAt(0) : ''
                  }`}
                  labelStyle={styles.labelText}
                  style={styles.storeLabelStyle}
                />
              )}
              {props?.storeImage && (
                <Avatar.Image
                  size={scaledValue(110)}
                  source={{uri: props.storeImage}}
                  style={styles.storeLabelStyle}
                />
              )}
              <TouchableOpacity
                style={styles.storeImageAreaView}
                onPress={props.onPress}>
                <FastImage
                  source={{uri: props?.message}}
                  style={styles.chatImage}
                />
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
    </>
  );
};

export default Message;
