import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  modalMainView: {
    width: scaledValue(547),
    height: scaledValue(323.47),
    alignItems: 'center',
    paddingTop: scaledValue(43.5),
  },
  selectImageText: {
    fontSize: scaledValue(30),
    fontFamily: 'Lato-Bold',
    marginBottom: scaledValue(37),
  },
  chooseImageModalView: {
    width: scaledValue(385.538),
    height: scaledValue(93),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  takeImageNdGallery: {
    width: scaledValue(93),
    height: scaledValue(93),
  },
  selectImageTypeText: {
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Bold',
    marginTop: scaledValue(15.57),
  },
  selectImageView: {
    alignItems: 'center',
  },
});
