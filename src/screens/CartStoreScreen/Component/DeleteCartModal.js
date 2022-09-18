import API from '@aws-amplify/api';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Modal} from 'react-native-paper';
import {scaledValue} from '../../../utils/design.utils';
import * as queries from '../../../graphql/queries';
import {showLoading} from '../../AppStore/actions';
import {useDispatch} from 'react-redux';
import crashlytics from '@react-native-firebase/crashlytics';
import {AlertMessage} from '../../../utils/constants';

const DeleteCartModal = props => {
  const dispatch = useDispatch();

  const [store, setStore] = useState(null);
  const loadStore = async storeId => {
    const str = await API.graphql({
      query: queries.getStore,
      variables: {id: storeId},
    })
      .then(resp => resp?.data?.getStore?.name)
      .catch(error => {
        crashlytics()?.recordError(error);
        console.log('Error', error);
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        return null;
      });
    setStore(str);
  };
  useEffect(() => {
    loadStore(props?.selectedStoreName?.storeId);
  }, []);
  if (!store) dispatch(showLoading(true));
  else if (store) dispatch(showLoading(false));
  const containerStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    top: scaledValue(505.5),
    left: scaledValue(39),
    right: scaledValue(101.75),
    borderRadius: scaledValue(24),
    width: scaledValue(671),
  };

  const styles = StyleSheet.create({
    textView: {
      textAlign: 'center',
      fontSize: scaledValue(31),
      color: '#7F7F7F',
    },
    confirmDeleteView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: scaledValue(59),
      marginTop: scaledValue(26),
    },
    noText: {
      fontSize: scaledValue(31),
      textTransform: 'uppercase',
      fontFamily: 'Lato-Bold',
      color: '#FF8800',
    },
    yesText: {
      fontSize: scaledValue(31),
      textTransform: 'uppercase',
      fontFamily: 'Lato-Bold',
      color: '#FF8800',
    },
    modalMainView: {
      paddingHorizontal: scaledValue(113),
      paddingVertical: scaledValue(42),
    },
  });

  return (
    <>
      {store && (
        <Modal
          visible={props.visible}
          onDismiss={props.onDismiss}
          contentContainerStyle={containerStyle}>
          <View style={styles.modalMainView}>
            <Text allowFontScaling={false} style={styles.textView}>
              Are you sure you want to delete items with {store} ?
            </Text>
            <View style={styles.confirmDeleteView}>
              <Text
                allowFontScaling={false}
                onPress={props.onPress}
                style={styles.yesText}>
                Yes
              </Text>
              <Text
                allowFontScaling={false}
                onPress={() => props.onDismiss()}
                style={styles.noText}>
                No
              </Text>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default DeleteCartModal;
