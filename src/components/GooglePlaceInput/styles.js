import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: 'absolute',
    width: scaledValue(660),
    zIndex: 1,
    right: 0,
    padding: scaledValue(20),
  },
  textInput: {
    height: 38,
    color: '#000000',
    borderRadius: scaledValue(18),
    paddingRight: scaledValue(80),
  },
});
