import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {scaledValue} from '../../../utils/design.utils';
import timeIcon from '../../../../assets/images/TimeIcon.png';
const TimePeriodCard = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.timePeriodCardView}>
      <Image source={timeIcon} style={styles.timeImage} />
      <Text allowFontScaling={false}>{props?.slot}</Text>
    </TouchableOpacity>
  );
};

export default TimePeriodCard;

const styles = StyleSheet.create({
  timePeriodCardView: {
    flexDirection: 'row',
    paddingHorizontal: scaledValue(41.5),
    paddingVertical: scaledValue(30.5),

    alignItems: 'center',
  },
  timeImage: {
    width: scaledValue(22),
    height: scaledValue(22),
    marginRight: scaledValue(24),
  },
});
