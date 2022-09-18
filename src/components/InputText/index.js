import * as React from 'react';
import {TextInput} from 'react-native-paper';
const InputText = props => (
  <TextInput
    editable={props.editable}
    visible={props.visible}
    label={props.label}
    style={props.style}
    value={props.value}
    mode={props.mode}
    onChangeText={props.onChangeText}
    underlineColor={props.underlineColor}
    keyboardType={props.keyboardType}
    maxLength={props.maxLength}
    outlineColor="#0000004D"
    theme={{
      roundness: props.borderRadius,
      colors: {primary: '#FF8800D9'},
    }}
    left={props.position}
    right={props.right}
    disabled={props.disabled}
  />
);
export default InputText;
