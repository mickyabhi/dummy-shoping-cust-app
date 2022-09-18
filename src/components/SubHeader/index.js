import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
const SubHeader = props => {
  const styles = StyleSheet.create({
    SubHeaderView: {
      width: '100%',
      height: props.height !== undefined ? props.height : scaledValue(65),
      flexDirection: 'row',
      backgroundColor: '#F8F8F8',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: scaledValue(51),
      borderRadius: props.borderRadius,
    },
    backIconStyle: {
      width: scaledValue(8.93),
      height: scaledValue(15.24),
    },
    textTouchableView: {
      flexDirection: 'row',
    },
  });
  return (
    <View style={styles.SubHeaderView}>
      <Text
        allowFontScaling={false}
        style={{
          fontSize: scaledValue(24),
          fontFamily: props.fontFamily,
        }}>
        {props.title}
      </Text>
      <TouchableOpacity
        style={styles.textTouchableView}
        onPress={props.onPressed}>
        <Text
          allowFontScaling={false}
          style={{
            color: props.rightSideText === 'View all' ? '#F8993A' : '#000',
            fontSize:
              props.rightSideText === 'View all'
                ? scaledValue(16)
                : scaledValue(24),
            fontFamily: 'Lato-SemiBold',
          }}>
          {props.rightSideText}
          {/* <Image
              source={props.image}
              style={styles.backIconStyle}
            /> */}
        </Text>
        {props.image}
      </TouchableOpacity>
    </View>
  );
};

export default SubHeader;
