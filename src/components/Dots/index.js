/* eslint-disable no-undef */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
const Dot = () => <View style={styles.DotsView}></View>;

export default Dot;

const styles = StyleSheet.create({
  DotsView: {
    width: scaledValue(16),
    height: scaledValue(16),
    borderRadius: 50,
    backgroundColor: '#FC7609',
    marginRight: scaledValue(20),
  },
});
