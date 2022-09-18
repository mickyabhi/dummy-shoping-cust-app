import * as React from 'react';
import {Modal, Text} from 'react-native-paper';
import {scaledValue} from '../../utils/design.utils';
import cameraIcon from '../../../assets/images/cameraIcon.png';
import galleryIcon from '../../../assets/images/galleryIcon.png';
import {View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
const ChooseImageModal = props => {
  const containerStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    top: scaledValue(505.5),
    left: scaledValue(101.25),
    right: scaledValue(101.75),
    borderRadius: scaledValue(24),
  };
  return (
    <Modal
      visible={props.visible}
      onDismiss={props.onDismiss}
      contentContainerStyle={containerStyle}>
      <View style={styles.modalMainView}>
        <Text allowFontScaling={false} style={styles.selectImageText}>
          Select Image Source
        </Text>
        <View style={styles.chooseImageModalView}>
          <TouchableOpacity
            onPress={props.takeImage}
            style={styles.selectImageView}>
            <Image style={styles.takeImageNdGallery} source={cameraIcon} />
            <Text allowFontScaling={false} style={styles.selectImageTypeText}>
              Take a Photo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props.selectImage}
            style={styles.selectImageView}>
            <Image source={galleryIcon} style={styles.takeImageNdGallery} />
            <Text allowFontScaling={false} style={styles.selectImageTypeText}>
              Add from gallery
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ChooseImageModal;
