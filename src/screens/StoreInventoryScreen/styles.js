import {scaledValue} from '../../utils/design.utils';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  StoreInventoryOuterView: {
    flex: 1,
  },
  StoreInventoryMainView: {
    flex: 1,
    paddingHorizontal: scaledValue(47),
    paddingTop: scaledValue(14),
  },
  itemDescriptionText: {
    marginBottom: scaledValue(25),
    fontSize: scaledValue(24),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(29),
  },
  ItemCategoriesView: {
    flexDirection: 'row',
    marginBottom: scaledValue(26),
  },

  ItemSubCategoriesView: {
    flexDirection: 'row',
    marginBottom: scaledValue(32),
  },
  posterView: {
    marginTop: scaledValue(25),
    flexDirection: 'row',
  },
  loaderView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCountView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noProductText: {
    position: 'absolute',
    top: scaledValue(700),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: scaledValue(44),
    fontFamily: 'Lato-Bold',
    color: '#DDD',
  },
});
