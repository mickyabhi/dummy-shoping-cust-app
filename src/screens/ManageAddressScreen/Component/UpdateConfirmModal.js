import * as React from 'react';
import {Dialog, Button, Paragraph} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {scaledValue} from '../../../utils/design.utils';

const UpdateConfirmModal = props => {
  return (
    <Dialog visible={props.visible} onDismiss={props.onDismiss}>
      <Dialog.Content>
        <Paragraph style={styles.text}>
          Updated your address successfully.
        </Paragraph>
      </Dialog.Content>
      <Dialog.Actions style={styles.dialogActions}>
        <Button
          color="#F79939"
          onPress={() => {
            props.onDismiss();
          }}>
          CANCEL
        </Button>
        <Button color="#F79939" onPress={props.submitUserAddress}>
          OK
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
};
export default UpdateConfirmModal;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato-Semibold',
    fontSize: scaledValue(31),
    color: 'gray',
    marginTop: scaledValue(58),
  },
  cancelText: {
    fontFamily: 'Lato-Bold',
    fontSize: scaledValue(31),
  },
  okText: {
    fontFamily: 'Lato-Bold',
    fontSize: scaledValue(31),
  },
  dialogActions: {
    justifyContent: 'space-around',
    marginBottom: scaledValue(44),
  },
});
