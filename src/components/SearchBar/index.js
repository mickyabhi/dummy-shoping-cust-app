import React from 'react';
import {StyleSheet, TextInput, View, Image, Platform} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
const SearchBar = props => (
  <View style={styles.searchBar}>
    <Image source={props.icon} style={styles.searchIcon} />
    <TextInput
      style={styles.searchBox}
      placeholder={props.placeholder}
      value={props.value}
      allowFontScaling={false}
      onChangeText={props.onChangeText}
    />
  </View>
);
export default SearchBar;
const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: scaledValue(6),
    justifyContent: 'center',
  },
  searchBox: {
    elevation: 0.9,
    color: '#000000',
    borderRadius: scaledValue(10),
    width: '100%',
    paddingHorizontal: scaledValue(30.5),
    height: Platform.OS === 'ios' ? scaledValue(80) : undefined,
  },
  searchIcon: {
    width: scaledValue(35),
    height: scaledValue(35),
    position: 'absolute',
    right: scaledValue(38.3),
  },
});
