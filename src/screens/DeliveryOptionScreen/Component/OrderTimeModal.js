import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SectionList, StatusBar} from 'react-native';
import {Modal} from 'react-native-paper';
import {scaledValue} from '../../../utils/design.utils';

import SubHeader from '../../../components/SubHeader';
import TimePeriodCard from './TimePeriodCard';
import {Divider} from 'react-native-paper';
import {getValidDeliverySlot} from '../../../utils/constants';

const OrderTime = props => {
  const DELIVERY_SLOT_OPTIONS = getValidDeliverySlot();
  const containerStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    top: scaledValue(155),
    left: scaledValue(42),
    right: scaledValue(42),
    bottom: scaledValue(790),
    borderRadius: scaledValue(8),
  };

  return (
    <Modal
      visible={props.visible}
      onDismiss={props.onDismiss}
      contentContainerStyle={containerStyle}>
      {DELIVERY_SLOT_OPTIONS && DELIVERY_SLOT_OPTIONS?.length && (
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={DELIVERY_SLOT_OPTIONS}
          ItemSeparatorComponent={() => <Divider style={styles.divider} />}
          keyExtractor={(item, index) => item + index}
          renderItem={item => (
            <TimePeriodCard
              onPress={() => {
                props.handleDeliverySlotSelection({
                  title: item.section.title,
                  slot: item.item,
                });
                props.onDismiss();
              }}
              slot={item.item}
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <SubHeader
              title={title}
              borderRadius={scaledValue(8)}
              height={scaledValue(84)}
            />
          )}
        />
      )}
    </Modal>
  );
};

export default OrderTime;
const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#000',
  },
});
