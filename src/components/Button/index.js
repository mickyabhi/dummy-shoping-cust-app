import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
const ButtonUi = props => (
  <TouchableOpacity
    disabled={props.disabled}
    onPress={props.onPress}
    style={{
      width: props.width !== undefined ? props.width : scaledValue(156),
      height: props.height !== undefined ? props.height : scaledValue(57),
      borderWidth: 1,
      borderRadius:
        props.borderRadius !== undefined ? props.borderRadius : scaledValue(8),
      borderColor: props.disabled === true ? '#FBCC9C' : props.borderColor,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:
        props.disabled === true ? '#FBCC9C' : props.backgroundColor,
      zIndex: props.zIndex,
    }}>
    {props.buttonImage && (
      <Image
        source={props.buttonImage}
        style={{width: scaledValue(29), height: scaledValue(37)}}
      />
    )}
    <Text
      allowFontScaling={false}
      style={{
        color: props.color !== undefined ? props.color : '#FD7609',
        fontSize: props.fSize !== undefined ? props.fSize : scaledValue(28),
        fontFamily: props.fontFamily,
      }}>
      {props.title}
    </Text>
  </TouchableOpacity>
);

export default ButtonUi;
