import * as React from 'react';
import {Dialog, Button, Paragraph} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {scaledValue} from '../../../utils/design.utils';
import {showRateUsModal} from '../../AppStore/actions';
import {useDispatch} from 'react-redux';
// import {useNavigation} from '@react-navigation/native';
import {Linking} from 'react-native';
import {analytic} from '../../../utils/analytics';

const RateUsModal = props => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  const rateUsHandler = async () => {
    analytic().trackEvent('HomePage', {
      CTA: 'rateUsNow',
    });
    Linking.openURL(
      'https://play.google.com/store/apps/details?id=com.mode.nammakirana',
    );
    dispatch(showRateUsModal(false));
  };
  return (
    <Dialog visible={props.visible} onDismiss={props.onDismiss}>
      <Dialog.Title style={styles.rateUsText}>Rate Us</Dialog.Title>
      <Dialog.Content>
        <Paragraph style={styles.text}>
          If you&apos;ve enjoyed using the app, Please take a minute to
          &apos;Rate Us&apos;.
        </Paragraph>
      </Dialog.Content>
      <Dialog.Actions style={styles.dialogActions}>
        <Button
          color="#F79939"
          onPress={() => {
            dispatch(showRateUsModal(false));
          }}>
          later
        </Button>
        <Button color="#F79939" onPress={rateUsHandler}>
          do it now
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
};
export default RateUsModal;

const styles = StyleSheet.create({
  rateUsText: {
    fontFamily: 'Lato-Semibold',
    fontSize: scaledValue(31),
    color: '#000000',
    marginBottom: scaledValue(26),
  },
  text: {
    fontFamily: 'Lato-Semibold',
    fontSize: scaledValue(31),
    color: 'gray',
  },
  laterText: {
    fontFamily: 'Lato-Bold',
    fontSize: scaledValue(31),
    textTransform: 'uppercase',
  },
  okText: {
    fontFamily: 'Lato-Bold',
    fontSize: scaledValue(31),
    textTransform: 'uppercase',
  },
  dialogActions: {
    justifyContent: 'space-around',
    marginBottom: scaledValue(34),
  },
});
