import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
import {useNavigation} from '@react-navigation/native';
import {analytic} from '../../utils/analytics';
import * as queries from '../../graphql/queries';
import API from '@aws-amplify/api';
import FastImage from 'react-native-fast-image';
import dummyStore from '../../../assets/images/dummy_store.jpeg';
import {fetchStoreProducts} from '../../screens/AppStore/actions';
import {useDispatch} from 'react-redux';
import crashlytics from '@react-native-firebase/crashlytics';

const StoreCard = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [storeImage, setStoreImage] = useState(null);
  const [store, setStore] = useState(props?.store);

  const loadStoreImages = async id => {
    if (id != null) {
      const storeImages = await API.graphql({
        query: queries.imagesByStoreId,
        variables: {storeId: id},
      })
        .then(resp => resp?.data?.imagesByStoreId?.items)
        .catch(error => {
          crashlytics()?.recordError(error);
          console.log('StoreImage.error: ', error);
          return null;
        });
      if (storeImages == null || !storeImages.length) {
        return;
      }
      storeImages?.sort(
        (a, b) => new Date(a?.createdAt) - new Date(b?.createdAt),
      );
      storeImages.reverse();
      setStoreImage(storeImages[0]);
    }
  };

  useEffect(() => {
    loadStoreImages(store?.id);
  }, []);

  useEffect(() => {
    setStore(props?.store);
  }, [props]);

  return (
    <>
      {store && (
        <TouchableOpacity
          onPress={() => {
            analytic().trackEvent('HomePage', {
              CTA: 'SelectedCard',
              data: store.name,
            });

            navigation.replace('StoreInventory', {
              store: store,
              singleCartView: true,
            });

            dispatch(fetchStoreProducts(store.id));
          }}
          style={styles.storeCardView}>
          <FastImage
            source={
              storeImage && storeImage?.imagePath
                ? {uri: storeImage?.imagePath}
                : dummyStore
            }
            style={styles.storeImg}
          />

          <View style={styles.textView}>
            <Text
              allowFontScaling={false}
              style={styles.nameText}
              numberOfLines={1}>
              {store?.name}
            </Text>

            <Text
              allowFontScaling={false}
              style={styles.cityText}
              numberOfLines={1}>
              {store?.distance ? `${store?.distance?.toFixed(2)} Kms, ` : ''}
              {store?.address}
            </Text>

            <Text allowFontScaling={false} style={styles.storeCategory}>
              {store?.category}
            </Text>

            <Text allowFontScaling={false} style={styles.rsText}>
              Min Order: ₹{store?.minimumAmount || '0'}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};
export default StoreCard;
const styles = StyleSheet.create({
  storeImg: {
    width: scaledValue(185),
    height: scaledValue(135),
    borderRadius: scaledValue(12),
  },
  textView: {
    paddingLeft: scaledValue(25),
    flex: 1,
  },
  nameText: {
    fontSize: scaledValue(30),
    fontFamily: 'Lato-SemiBold',
    lineHeight: scaledValue(39),
    textTransform: 'capitalize',
    width: scaledValue(400),
  },
  cityText: {
    fontSize: scaledValue(24),
    marginTop: scaledValue(5),
    marginBottom: scaledValue(11),
    color: '#00000045',
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(34),
    width: scaledValue(400),
  },
  storeCategory: {
    fontSize: scaledValue(22),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(23),
    marginBottom: scaledValue(30),
  },
  rsText: {
    fontSize: scaledValue(24),
    color: '#F8993A',
    bottom: scaledValue(0),
    position: 'absolute',
    right: scaledValue(0),
    fontFamily: 'Lato-Medium',
  },
  storeCardView: {
    borderRadius: scaledValue(12),
    paddingHorizontal: scaledValue(15),
    paddingVertical: scaledValue(23),
    flexDirection: 'row',
    marginBottom: scaledValue(20),
    elevation: 1,
    shadowColor: '#00000090',
    borderWidth: Platform.OS === 'ios' ? 1 : 0,
    borderColor: '#00000029',
  },
});
