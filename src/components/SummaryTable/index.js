import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const SummaryTable = props => {
  return (
    <View style={styles.summaryTableView}>
      <View style={styles.summaryTableHeaderView}>
        <View style={styles.summaryTableColStartView}>
          <Text allowFontScaling={false} style={styles.tableTitleText}>
            Summary
          </Text>
        </View>
        <View style={styles.summaryTableCol1View}>
          <Text allowFontScaling={false} style={styles.tableTitleText}>
            Order
          </Text>
        </View>
        <View style={styles.summaryTableColView}>
          <Text allowFontScaling={false} style={styles.tableTitleText}>
            Fulfillment
          </Text>
        </View>
        <View style={styles.summaryTableColEndView}>
          <Text allowFontScaling={false} style={styles.tableTitleText}>
            Fulfillment %
          </Text>
        </View>
      </View>
      <View style={styles.summaryTableRowView}>
        <View style={styles.summaryTableColView}>
          <Text allowFontScaling={false} style={styles.summaryTableColText}>
            Quantity
          </Text>
        </View>
        <View style={styles.summaryTableColView}>
          <Text allowFontScaling={false} style={styles.summaryTableColText}>
            {props?.summaryData?.totalOrderedQty}
          </Text>
        </View>
        <View style={styles.summaryTableColView}>
          <Text allowFontScaling={false} style={styles.summaryTableColText}>
            {props?.summaryData?.totalQuantity}
          </Text>
        </View>
        <View style={styles.summaryTableColView}>
          <Text
            allowFontScaling={false}
            style={
              styles.summaryTableColText
            }>{`${props?.summaryData?.totalFulfillmentPercent}%`}</Text>
        </View>
      </View>
      <View style={styles.summaryTableRowView}>
        <View style={styles.summaryTableBottomLeftCol}>
          <Text allowFontScaling={false} style={styles.summaryTableColText}>
            Value
          </Text>
        </View>
        <View style={styles.summaryTableColView}>
          <Text
            allowFontScaling={false}
            style={
              styles.summaryTableColText
            }>{`${props?.summaryData?.totalOrderedQtyValue}`}</Text>
        </View>
        <View style={styles.summaryTableColView}>
          <Text
            allowFontScaling={false}
            style={
              styles.summaryTableColText
            }>{`${props?.summaryData?.originalCartValue}`}</Text>
        </View>
        <View style={styles.summaryTableBottomRightCol}>
          <Text
            allowFontScaling={false}
            style={
              styles.summaryTableColText
            }>{`${props?.summaryData?.totalFulfillmentValuePercent}%`}</Text>
        </View>
      </View>
    </View>
  );
};

export default SummaryTable;
