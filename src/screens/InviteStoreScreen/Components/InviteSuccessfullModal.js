import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Modal} from 'react-native-paper';
import {scaledValue} from '../../../utils/design.utils';
import checkIcon from '../../../../assets/images/color_check_icon.png';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const InviteSuccessfullModal = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const containerStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    top: scaledValue(505.5),
    left: scaledValue(101.25),
    right: scaledValue(101.75),
    borderRadius: scaledValue(8),
  };
  return (
    <Modal
      visible={props.visible}
      onDismiss={props.onDismiss}
      contentContainerStyle={containerStyle}>
      <View style={styles.modalMainView}>
        <Image
          source={checkIcon}
          style={styles.checkIconStyle}
          tintColor="#F8993A"
        />
        <Text allowFontScaling={false} style={styles.inviteSuccessText}>
          Invited Successfully
        </Text>
        <Text allowFontScaling={false} style={styles.thanksInviteMerchantText}>
          Thanks for inviting merchant.
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.onDismiss();
            navigation.navigate('Home');
          }}>
          <Text allowFontScaling={false} style={styles.doneText}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default InviteSuccessfullModal;

const styles = StyleSheet.create({
  checkIconStyle: {
    width: scaledValue(165),
    height: scaledValue(165),
    marginBottom: scaledValue(29),
  },
  modalMainView: {
    alignItems: 'center',
    paddingVertical: scaledValue(34),
  },
  inviteSuccessText: {
    fontSize: scaledValue(29),
    fontFamily: 'Lato-Medium',
  },
  thanksInviteMerchantText: {
    fontSize: scaledValue(29),
    fontFamily: 'Lato-Medium',
    color: 'gray',
  },
  doneText: {
    fontSize: scaledValue(36),
    color: '#F8993A',
    fontFamily: 'Lato-Bold',
    marginTop: scaledValue(33),
  },
});
