import React from 'react';
import {Badge} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
const BadgeComponent = props => {
  return (
    <>
      {props?.cartItems > 0 && (
        <Badge size={scaledValue(26)} style={styles.badgeView}>
          {props?.cartItems}
        </Badge>
      )}

      {props?.notification > 0 && (
        <Badge size={scaledValue(26)} style={styles.notificationBadge}>
          {props?.notification}
        </Badge>
      )}
    </>
  );
};

export default BadgeComponent;

const styles = StyleSheet.create({
  badgeView: {
    zIndex: 1,
    position: 'absolute',
    backgroundColor: '#01A74E',
    right: scaledValue(52),
    top: scaledValue(30),
  },
  notificationBadge: {
    zIndex: 1,
    position: 'absolute',
    backgroundColor: '#01A74E',
    right: scaledValue(136),
    top: scaledValue(30),
  },
});
