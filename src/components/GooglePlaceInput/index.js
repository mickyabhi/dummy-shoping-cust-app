import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {styles} from './styles';

const GooglePlacesInput = props => {
  return (
    <GooglePlacesAutocomplete
      ref={props.clearTextRef}
      placeholder={props.placeholder}
      fetchDetails={props.fetchDetails}
      onPress={props.onPress}
      onFail={props.onFail}
      query={props.query}
      GooglePlacesDetailsQuery={props.GooglePlacesDetailsQuery}
      styles={styles}
      enablePoweredByContainer={props.enablePoweredByContainer}
      renderRightButton={props.renderRightButton}
      debounce={props.debounce}
    />
  );
};

export default GooglePlacesInput;
