import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {scaledValue} from '../../../utils/design.utils';
const Banner = props => (
  <TouchableOpacity>
    <View style={styles.AddPostersView}>
      <Image source={props.posterImg} style={styles.posterImg} />
    </View>
  </TouchableOpacity>
);

export default Banner;

const styles = StyleSheet.create({
  AddPostersView: {
    marginRight: scaledValue(10),
    marginBottom: scaledValue(21),
  },
  posterImg: {
    width: scaledValue(314),
    height: scaledValue(234),
  },
});
