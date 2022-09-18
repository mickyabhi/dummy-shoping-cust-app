import React, {useEffect, useState} from 'react';
import {Text, Image, View, ScrollView, TouchableOpacity} from 'react-native';
import ItemCard from '../../components/ItemCard';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import OfferCard from './Components/OfferCard';
import PopUpForFreeDelivery from './Components/PopUpFreeDeliveryCard';
import Footer from '../../components/Footer';
import {useNavigation} from '@react-navigation/native';
import LocationMark from '../../../assets/images/locationMark.png';
import backIcon from '../../../assets/images/BackIcon.png';
import addMoreIcon from '../../../assets/images/addmore-icon.png';
import * as queries from '../../graphql/queries';
import API from '@aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import {
  showAlertToast,
  fetchCurrentCarts,
  showLoading,
  fetchStoreProducts,
  fetchUserData,
} from '../AppStore/actions';
import {useSelector, useDispatch} from 'react-redux';
import {analytic} from '../../utils/analytics';
import crashlytics from '@react-native-firebase/crashlytics';
import {AlertMessage} from '../../utils/constants';
import {styles} from './styles';
import {useIsFocused} from '@react-navigation/core';
import DeliveryChargeModal from './Components/DeliveryChargeModal';
import {getItemFromAsyncStorage} from '../../utils/storage.utils';

const Cart = props => {
  const dispatch = useDispatch();

  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [storeCartItems, setStoreCartItems] = useState(null);
  const [cartValue, setCartValue] = useState(0);
  const [store, setStore] = useState(null);
  const [cart] = useState(props?.route?.params?.cart);
  const userAddress = useSelector(state => state?.userData?.addresses?.items);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [visibleDeliveryChargeModal, setVisibleDeliveryChargeModal] =
    useState(false);

  const getSelectedAddress = async () => {
    const address = await getItemFromAsyncStorage('selectedAddress');
    if (address != null) {
      setSelectedAddress(JSON.parse(address));
    } else {
      setSelectedAddress(
        userAddress?.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        )[0],
      );
    }
  };

  const loadStore = async storeId => {
    if (storeId != null) {
      const str = await API.graphql({
        query: queries.getStore,
        variables: {id: storeId},
      })
        .then(res => res?.data?.getStore)
        .catch(error => {
          console.log('loadStore.error', error);
          crashlytics()?.recordError(error);
          dispatch(
            showAlertToast({
              alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
            }),
          );
        });
      setStore(str);
    }
  };

  const loadStoreCartItems = async cartId => {
    if (cartId != null) {
      dispatch(showLoading(true));
      let cartsItems = await API.graphql({
        query: queries.cartsItemsByCartId,
        variables: {cartId: cartId, limit: 10000},
      })
        .then(res => res?.data?.cartsItemsByCartId?.items)
        .catch(error => {
          crashlytics()?.recordError(error);
          dispatch(showLoading(false));
          dispatch(
            showAlertToast({
              alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
            }),
          );
          console.log('loadStoreCartItems.error', error);
        });

      cartsItems = cartsItems?.filter(
        cartsItem => cartsItem?.storeProduct != null,
      );

      setStoreCartItems(cartsItems);

      let originalCartValue = 0;
      cartsItems?.forEach(cartsItem => {
        if (cartsItem?.storeProduct?.sellingPrice)
          originalCartValue +=
            cartsItem?.storeProduct?.sellingPrice * cartsItem?.quantity;
      });
      dispatch(showLoading(false));
      setCartValue(originalCartValue?.toFixed(2));
    }
  };

  useEffect(() => {
    loadStoreCartItems(cart?.id);
    loadStore(cart?.storeId);
    dispatch(fetchUserData());
    getSelectedAddress();
  }, [isFocused]);

  const addStoreProductInCart = async cartItem => {
    dispatch(showLoading(true));

    const updateCartItemInput = {
      id: cartItem?.id,
      quantity: cartItem?.quantity + 1,
      orderedQuantity: cartItem?.quantity + 1,
    };

    await API.graphql({
      query: mutations.updateCartItem,
      variables: {input: updateCartItemInput},
    })
      .then(resp => loadStoreCartItems(cart?.id))
      .catch(error => {
        dispatch(showLoading(false));
        crashlytics()?.recordError(error);
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        console.log('addStoreProductInCart.error', error);
      });

    dispatch(showLoading(false));
    dispatch(fetchCurrentCarts());
    analytic().trackEvent('Cart', {
      CTA: 'increaseCartItem',
    });
  };

  const decCartItem = async cartItem => {
    dispatch(showLoading(true));
    const updateCartItemInput = {
      id: cartItem?.id,
      quantity: cartItem?.quantity - 1,
      orderedQuantity: cartItem?.quantity - 1,
    };
    await API.graphql({
      query: mutations.updateCartItem,
      variables: {input: updateCartItemInput},
    })
      .then(resp => loadStoreCartItems(cart?.id))
      .catch(error => {
        dispatch(showLoading(false));
        crashlytics()?.recordError(error);
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        console.log('decCartItem.error', error);
      });
    dispatch(showLoading(false));
    dispatch(fetchCurrentCarts());

    if (cartItem?.quantity === 1) {
      dispatch(showLoading(true));
      await API.graphql({
        query: mutations.deleteCartItem,
        variables: {input: {id: cartItem.id}},
      })
        .then(resp => {
          loadStoreCartItems(cart?.id);

          if (storeCartItems?.length == 1) {
            navigation.navigate('Home');
            deleteStoreCart();
          }
        })
        .catch(error => {
          dispatch(showLoading(false));
          crashlytics()?.recordError(error);
          dispatch(
            showAlertToast({
              alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
            }),
          );
          console.log('deleteCartItem.error', error);
        });
      dispatch(showLoading(false));
    }
    dispatch(fetchCurrentCarts());
    analytic().trackEvent('Cart', {
      CTA: 'decreaseCartItem',
    });
  };

  const deleteStoreCart = async () => {
    await API.graphql({
      query: mutations.deleteCart,
      variables: {input: {id: cart?.id}},
    })
      .then(resp => console.log('deleteStoreCart', resp))
      .catch(error => {
        console.log('deleteStoreCart.error', error);
        crashlytics()?.recordError(error);
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        return null;
      });
  };

  const navigateToStoreInventory = (singleCartView = false) => {
    navigation.replace('StoreInventory', {
      store,
      singleCartView,
    });
    dispatch(fetchStoreProducts(store?.id));
  };

  const proceedToCheckOutHandler = () => {
    navigation.navigate('DeliveryOptionScreen', {
      cartValue: cartValue,
      originalCartVal: cartValue,
      cart: cart,
      minimumAmount: store?.minimumAmount,
      selectedAddress: selectedAddress,
      deliveryCharges:
        cartValue < store?.minimumAmount ? store?.deliveryCharges : null,
    });
  };

  return (
    <>
      <View style={styles.cartUpperView}>
        <Header
          backNavigationIcon={backIcon}
          headerTitle="Cart"
          onPress={() => {
            analytic().trackEvent('Cart', {
              CTA: 'backIcon',
            });

            if (props?.route?.params?.singleCartView)
              navigateToStoreInventory(true);
            else {
              if (props?.route?.params?.reload) {
                props?.route?.params?.reload();
                // navigation.replace('CartStore');
              }
              navigation.goBack();
            }
          }}
        />

        <ScrollView>
          <View style={styles.locationView}>
            <Image style={styles.locationImage} source={LocationMark} />
            <Text allowFontScaling={false} style={styles.locationText}>
              {`${selectedAddress?.address || ''} ${
                selectedAddress?.location || ''
              } ${selectedAddress?.landmark || ''} ${
                selectedAddress?.city || ''
              } ${selectedAddress?.state || ''} ${
                selectedAddress?.pincode || ''
              }`}
            </Text>
          </View>
          <SubHeader
            title={store?.name}
            rightSideText={`${
              storeCartItems ? storeCartItems?.length : ''
            } Item`}
          />
          <View style={styles.itemsCardView}>
            {storeCartItems?.map(item => (
              <ItemCard
                item={item}
                key={item?.id}
                storeProduct={item?.storeProduct}
                storeId={store?.id}
                itemQuantity={item?.quantity}
                addItem={() => addStoreProductInCart(item)}
                removeItemFromCart={() => decCartItem(item)}
              />
            ))}
            <PopUpForFreeDelivery
              minimumAmount={store?.minimumAmount}
              cartValue={cartValue}
            />
            {/* <OfferCard /> */}
          </View>
        </ScrollView>
      </View>
      <Footer
        cartValue={cartValue}
        onPress={() => {
          analytic().trackEvent('Cart', {
            CTA: 'proceedToCheckout',
          });
          store?.minimumAmount == null ||
          store?.deliveryCharges == null ||
          cartValue >= store?.minimumAmount
            ? proceedToCheckOutHandler()
            : setVisibleDeliveryChargeModal(true);
        }}
        minimumAmount={store?.minimumAmount}
        footerTitle="Checkout"
        deliveryCharges={store?.deliveryCharges}
      />
      <DeliveryChargeModal
        visible={visibleDeliveryChargeModal}
        onDismiss={() => {
          setVisibleDeliveryChargeModal(false);
        }}
        onPress={() => {
          proceedToCheckOutHandler();
          setVisibleDeliveryChargeModal(false);
        }}
        deliveryCharges={store?.deliveryCharges}
      />
      <TouchableOpacity
        onPress={() => {
          analytic().trackEvent('Cart', {
            CTA: 'addMore',
          });
          navigateToStoreInventory();
        }}
        style={styles.plusIconRight}>
        <Image source={addMoreIcon} style={styles.plusIcon} />
      </TouchableOpacity>
    </>
  );
};

export default Cart;
