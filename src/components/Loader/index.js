import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const LoadingComponent = () => {
  return (
    <View style={styles.loaderView}>
      <ActivityIndicator size="large" color="#F5672E" />
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  loaderView: {
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ffff',
    opacity: 0.6,
    zIndex: 1,
  },
});
