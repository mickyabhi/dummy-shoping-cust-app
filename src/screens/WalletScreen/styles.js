import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  walletMainView: {
    flex: 1,
  },
  walletDetailView: {
    backgroundColor: '#E2DFDF',
    height: scaledValue(164),
    borderBottomLeftRadius: scaledValue(20),
    borderBottomRightRadius: scaledValue(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaledValue(48),
  },
});
