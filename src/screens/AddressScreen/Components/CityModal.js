import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Modal} from 'react-native-paper';
import {scaledValue} from '../../../utils/design.utils';
import {styles} from './styles';

const CityModal = props => {
  const containerStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    top: scaledValue(505.5),
    left: scaledValue(101.25),
    right: scaledValue(101.75),
    borderRadius: scaledValue(8),
  };
  return (
    <Modal
      visible={props.visible}
      onDismiss={props.onDismiss}
      contentContainerStyle={containerStyle}>
      <View style={styles.pickerContainer}>
        <TouchableOpacity
          style={styles.cityView}
          onPress={() => {
            props.setShowCityValue('Bangalore');
            props.onDismiss();
          }}>
          <Text allowFontScaling={false}>Bangalore</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CityModal;
