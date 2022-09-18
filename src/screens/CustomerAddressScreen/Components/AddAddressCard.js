import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import {scaledValue} from '../../../utils/design.utils';
import currentLocationImage from '../../../../assets/images/current_location.png';
import Button from '../../../components/Button';

const AddAddressCard = props => {
  const styles = StyleSheet.create({
    cardView: {
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 4,
      flexDirection: 'row',
      height: scaledValue(146),
      alignItems: 'center',
      backgroundColor: props.bgColor,
    },
    currentLocationImage: {
      height: scaledValue(45),
      width: scaledValue(45),
      marginLeft: scaledValue(51),
      marginRight: scaledValue(39),
    },
    currentLocationText: {
      fontSize: scaledValue(26),
      color: props.titleColor,
      fontFamily: 'Lato-Bold',
      paddingRight: scaledValue(85.5),
    },
    enableLocationText: {
      color: '#F8993A',
      fontSize: scaledValue(20),
      fontFamily: 'Lato-Regular',
    },
  });

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.cardView}>
      <Image
        style={styles.currentLocationImage}
        source={currentLocationImage}
        tintColor={props.imageColor}
      />
      <View>
        <Text allowFontScaling={false} style={styles.currentLocationText}>
          {props.cardTitle}
        </Text>
        {props.cardSubTitle && (
          <Text allowFontScaling={false} style={styles.enableLocationText}>
            {props.cardSubTitle}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default AddAddressCard;
