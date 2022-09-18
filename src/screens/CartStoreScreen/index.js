import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Header from '../../components/Header';
import {scaledValue} from '../../utils/design.utils';
import CartStoreCard from './Component/CartStoreCard';
import backIcon from '../../../assets/images/BackIcon.png';
import {useNavigation} from '@react-navigation/native';
import DeleteCartModal from './Component/DeleteCartModal';
import API from '@aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCurrentCarts,
  showLoading,
  fetchUserCarts,
} from '../AppStore/actions';
import {analytic} from '../../utils/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

const CartStore = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [selectedCartForAction, setSelectedCartForAction] = useState(null);
  const [deleteCartModal, setDeleteCartModal] = useState(false);
  const userCarts = useSelector(state => state?.userCarts);
  const [storeName, setStoreName] = useState(null);

  useEffect(() => {
    dispatch(fetchUserCarts());
  }, []);

  useEffect(() => {
    if (userCarts?.length == 1)
      navigation.navigate('CartScreen', {
        cart: userCarts[0],
        singleCartView: true,
      });
  }, [userCarts, userCarts?.length]);

  const onDeleteCart = async () => {
    setDeleteCartModal(false);
    const deletedStore = await API.graphql({
      query: mutations.deleteCart,
      variables: {input: {id: selectedCartForAction.id}},
    })
      .then(() => {
        dispatch(fetchCurrentCarts());
        dispatch(fetchUserCarts());
      })
      .catch(error => {
        crashlytics()?.recordError(error);
        dispatch(showLoading(false));
        console.log('onDeleteCart.error', error);
        return null;
      });
    console.log('deletedStore', deletedStore);
    analytic().trackEvent('CartStore', {
      CTA: 'deleteCart',
    });
  };

  return (
    <View style={styles.cartStoreView}>
      <Header
        headerTitle="Carts"
        backNavigationIcon={backIcon}
        onPress={() => {
          analytic().trackEvent('CartStore', {
            CTA: 'backIcon',
          });
          navigation.replace('Home');
        }}
      />
      <View style={styles.cartStoreViewMainView}>
        <View style={styles.storeCartTitleView}>
          <Text allowFontScaling={false} style={styles.storeCartText}>
            Select Store & View cart
          </Text>
        </View>
        {userCarts && (
          <FlatList
            data={userCarts}
            vertical={true}
            renderItem={({item}) => (
              <CartStoreCard
                cart={item}
                key={item?.id}
                onDeleteCart={onDeleteCart}
                onPress={() => {
                  analytic().trackEvent('CartStore', {
                    CTA: 'cartStorCard',
                  });
                  navigation.navigate('CartScreen', {
                    cart: item,
                    reload: () => {
                      console.log('***** reload');
                      dispatch(fetchUserCarts());
                    },
                  });
                }}
                onPressDelete={() => {
                  analytic().trackEvent('CartStore', {
                    CTA: 'deleteCartStoreCard',
                  });
                  setDeleteCartModal(true);
                  setSelectedCartForAction(item);
                  setStoreName(item);
                }}
              />
            )}
          />
        )}
      </View>
      {selectedCartForAction && (
        <DeleteCartModal
          visible={deleteCartModal}
          onDismiss={() => {
            analytic().trackEvent('CartStore', {
              CTA: 'hideDeleteCartModal',
            });
            setSelectedCartForAction(null);
            setDeleteCartModal(false);
          }}
          selectedStoreName={storeName}
          onPress={onDeleteCart}
        />
      )}
    </View>
  );
};
export default CartStore;
const styles = StyleSheet.create({
  cartStoreView: {
    flex: 1,
  },
  cartStoreViewMainView: {
    flex: 1,
    alignItems: 'center',
  },
  storeCartTitleView: {
    width: scaledValue(668),
    height: scaledValue(109),
    justifyContent: 'center',
  },
  storeCartText: {
    fontSize: scaledValue(30),
    fontFamily: 'Lato-Medium',
  },
});
