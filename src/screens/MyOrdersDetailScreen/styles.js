import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
export const styles = StyleSheet.create({
  orderItemCardView: {},
  ordersDetailView: {
    flex: 1,
  },
  ordersLowerDetailView: {
    flex: 1,
    paddingHorizontal: scaledValue(32),
    paddingTop: scaledValue(40),
    alignItems: 'center',
  },
  itemListMainView: {
    elevation: scaledValue(2),
    borderRadius: scaledValue(8),
    marginTop: scaledValue(22),
    width: scaledValue(676),
    borderColor: '#CDCDCD',
    borderWidth: scaledValue(1),
  },

  tableTopView: {
    marginTop: scaledValue(23),
    paddingVertical: scaledValue(24.84),
    paddingHorizontal: scaledValue(25.66),
    elevation: scaledValue(2),
    borderRadius: scaledValue(8),
    width: scaledValue(676),
  },
  tableStyle: {
    borderRadius: scaledValue(8),
  },
  tableBorderStyle: {
    borderWidth: 1,
    borderColor: '#707070',
  },
  noteView: {
    width: scaledValue(677),
    height: scaledValue(96),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777777',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: scaledValue(8),
    marginTop: scaledValue(25.82),
  },
  noteText: {
    fontSize: scaledValue(22),
    lineHeight: scaledValue(36),
    width: scaledValue(597),
    color: '#fff',
  },
  tableHeadText: {
    fontSize: scaledValue(22),
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
    color: '#fff',
    paddingVertical: scaledValue(8.17),
  },
  tableHeader: {
    backgroundColor: '#777777',
    borderColor: '#fff',
    borderTopLeftRadius: scaledValue(8),
    borderTopRightRadius: scaledValue(8),
  },
  tableRowText: {
    fontSize: scaledValue(22),
    fontFamily: 'Lato-Semibold',
    textAlign: 'center',
  },
  totalSectionView: {
    borderBottomWidth: scaledValue(1),
    width: scaledValue(676),
    paddingHorizontal: scaledValue(32),
    borderBottomColor: '#CDCDCD',
  },
});
