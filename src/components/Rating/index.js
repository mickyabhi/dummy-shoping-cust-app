import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {IconButton, Divider} from 'react-native-paper';
import {scaledValue} from '../../utils/design.utils';

const Rating = props => {
  return (
    <>
      <View style={styles.rateContainer}>
        <View style={styles.rateView}>
          <IconButton
            icon="star"
            color={props.activeRate >= 1 ? '#05A649' : '#00000029'}
            size={scaledValue(46.27)}
            onPress={() => props.setActiveRate(1)}
          />
          <IconButton
            icon="star"
            color={props.activeRate >= 2 ? '#05A649' : '#00000029'}
            size={scaledValue(46.27)}
            onPress={() => props.setActiveRate(2)}
          />
          <IconButton
            icon="star"
            color={props.activeRate >= 3 ? '#05A649' : '#00000029'}
            size={scaledValue(46.27)}
            onPress={() => props.setActiveRate(3)}
          />
          <IconButton
            icon="star"
            color={props.activeRate >= 4 ? '#05A649' : '#00000029'}
            size={scaledValue(46.27)}
            onPress={() => props.setActiveRate(4)}
          />
          <IconButton
            icon="star"
            color={props.activeRate >= 5 ? '#05A649' : '#00000029'}
            size={scaledValue(46.27)}
            onPress={() => props.setActiveRate(5)}
          />
        </View>
        {props.activeRate != 0 && (
          <TouchableOpacity onPress={() => props.setShowReviewTextInput(true)}>
            <Text allowFontScaling={false} style={styles.reviewText}>
              Write a Review
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        {props.showReviewTextInput && (
          <>
            <Divider />
            <TextInput
              style={styles.input}
              value={props.reviewMessage}
              onChangeText={value => props.setReviewMessage(value)}
            />
          </>
        )}

        {props.reviewMessage ? (
          <TouchableOpacity
            onPress={() => {
              props?.orderRating();
              props?.setRateOrderHandler(false);
              props?.setShowReviewTextInput(false);
              props?.setReviewMessage(false);
              props?.setActiveRate(0);
            }}>
            <Text allowFontScaling={false} style={styles.submitReview}>
              Submit
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rateView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: scaledValue(314.27),
  },
  rateContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewText: {fontSize: scaledValue(24), color: '#FF8800'},
  submitReview: {
    marginVertical: scaledValue(35),
    textAlign: 'right',
    color: '#FF8800',
  },

  input: {
    color: '#000000',
  },
});
