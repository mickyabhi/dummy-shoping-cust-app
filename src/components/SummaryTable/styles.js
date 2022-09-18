import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  summaryTableRowView: {
    flexDirection: 'row',
    flex: 1,
  },
  summaryTableHeaderView: {
    flexDirection: 'row',
    backgroundColor: '#777777',
    borderTopLeftRadius: scaledValue(8),
    borderTopRightRadius: scaledValue(8),
    flex: 1,
  },
  summaryTableView: {
    width: scaledValue(624.18),
    height: scaledValue(130.23),
    backgroundColor: '#fff',
  },
  summaryTableColView: {
    borderWidth: scaledValue(1),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#707070',
  },
  summaryTableCol1View: {
    borderWidth: scaledValue(1),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#FFFFFF',
  },
  summaryTableColText: {
    color: '#000000',
    fontFamily: 'Lato-Semibold',
    fontSize: scaledValue(22),
  },
  summaryTableColStartView: {
    borderWidth: scaledValue(1),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: scaledValue(8),
    borderRightColor: '#FFFFFF',
    borderBottomColor: '#777777',
  },
  summaryTableColEndView: {
    borderWidth: scaledValue(1),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: scaledValue(8),
    borderLeftColor: '#FFFFFF',
    borderBottomColor: '#777777',
  },
  tableTitleText: {
    color: '#fff',
    fontSize: scaledValue(22),
  },
  summaryTableBottomLeftCol: {
    borderWidth: scaledValue(1),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: scaledValue(8),
    borderColor: '#707070',
  },
  summaryTableBottomRightCol: {
    borderWidth: scaledValue(1),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: scaledValue(8),
    borderColor: '#707070',
  },
});
