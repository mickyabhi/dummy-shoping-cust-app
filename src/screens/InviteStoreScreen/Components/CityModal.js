import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Modal} from 'react-native-paper';
import {scaledValue} from '../../../utils/design.utils';

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
            props.setShowCityValue('Ambala');
            props.onDismiss();
          }}>
          <Text allowFontScaling={false}>Ambala</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cityView}
          onPress={() => {
            props.setShowCityValue('Delhi');
            props.onDismiss();
          }}>
          <Text allowFontScaling={false}>Delhi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cityView}
          onPress={() => {
            props.setShowCityValue('Mumbai');
            props.onDismiss();
          }}>
          <Text allowFontScaling={false}>Mumbai</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cityView}
          onPress={() => {
            props.setShowCityValue('Amaravati');
            props.onDismiss();
          }}>
          <Text allowFontScaling={false}>Amaravati</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cityView}
          onPress={() => {
            props.setShowCityValue('Guwahati');
            props.onDismiss();
          }}>
          <Text allowFontScaling={false}>Guwahati</Text>
        </TouchableOpacity>
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

const styles = StyleSheet.create({
  dropDownValue: {
    padding: scaledValue(15),
    borderBottomColor: 'gray',
    borderBottomWidth: scaledValue(1),
  },
  dropDownValueNoBorder: {
    padding: scaledValue(15),
  },
  pickerContainer: {
    paddingHorizontal: scaledValue(30),
    paddingVertical: scaledValue(20),
  },
  divider: {
    borderWidth: scaledValue(1),
    borderColor: 'grey',
  },
  cityView: {
    padding: scaledValue(15),
  },
});
