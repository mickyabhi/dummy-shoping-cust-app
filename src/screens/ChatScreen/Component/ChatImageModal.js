import React from 'react';
import {scaledValue} from '../../../utils/design.utils';
import {StyleSheet, View, Image, Modal} from 'react-native';
import FastImage from 'react-native-fast-image';
import closeIcon from '../../../../assets/images/close_icon.png';
import rightArrowIcon from '../../../../assets/images/right-arrow.png';
import {TouchableRipple, IconButton} from 'react-native-paper';

const ChatImageModal = props => {
  return (
    <Modal
      hasBackdrop={true}
      backdropOpacity={1}
      backdropColor={'#F9993A'}
      visible={props.visible}
      onDismiss={props.onDismiss}>
      <View style={styles.modalView}>
        <IconButton
          icon={closeIcon}
          color="#fff"
          size={scaledValue(30)}
          onPress={props.onPress}
          style={styles.closeIcon}
        />
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          source={{uri: props?.chatImage || props?.previewImage}}
          style={styles.fastImage}
        />
        {!props.previewImage && (
          <TouchableRipple
            style={styles.iconView}
            onPress={() => {
              props.sendMessage();
              props.onDismiss();
            }}>
            <Image source={rightArrowIcon} style={styles.rightArrowIcon} />
          </TouchableRipple>
        )}
      </View>
    </Modal>
  );
};
export default ChatImageModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    flex: 1,
  },
  closeIcon: {
    left: scaledValue(56.68),
    top: scaledValue(52.34),
    position: 'absolute',
  },
  fastImage: {
    width: '100%',
    height: scaledValue(900),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    width: scaledValue(110),
    height: scaledValue(110),
    backgroundColor: '#F8993A',
    borderRadius: scaledValue(100),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: scaledValue(52),
    right: scaledValue(48),
  },
  rightArrowIcon: {
    width: scaledValue(48.64),
    height: scaledValue(48.05),
    tintColor: '#fff',
  },
});
