import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {analytic} from '../../utils/analytics';
import {
  showAlertToast,
  fetchCurrentCarts,
  showLoading,
} from '../AppStore/actions';
import {API} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import {AlertMessage} from '../../utils/constants';
import crashlytics from '@react-native-firebase/crashlytics';

const RelatedProductsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const relatedProducts = useSelector(state => state?.storeProducts);
  const storeId = useSelector(state => state?.storeProducts[0]?.storeId);
  const [cartItemQuantityMap, setCartItemQuantityMap] = useState({});
  const [storeCart, setStoreCart] = useState(null);
  const userData = useSelector(state => state?.userData);
  const [storeCartItems, setStoreCartItems] = useState(null);

  const loadStoreCart = async () => {
    const carts = await API.graphql({
      query: queries.cartsByUserId,
      variables: {userId: userData?.id},
    })
      .then(res => res?.data?.cartsByUserId?.items)
      .catch(error => {
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        crashlytics()?.recordError(error);
        console.log('loadStoreCart.error', error);
      });
    const storeCarts = carts?.filter(
      cart => cart?.storeId == storeId && !cart?.isOrderPlaced,
    );
    if (storeCarts && storeCarts.length) {
      setStoreCart(storeCarts[0]);
      loadStoreCartItems(storeCarts[0]?.id);
    }
  };

  const createStoreCart = async () => {
    const createCartInput = {
      userId: userData.id,
      storeId: storeId,
      isOrderPlaced: false,
      originalCartValue: 0,
      updatedCartValue: 0,
    };

    const cart = await API.graphql({
      query: mutations.createCart,
      variables: {input: createCartInput},
    })
      .then(resp => {
        dispatch(fetchCurrentCarts(userData?.id));
        return resp?.data?.createCart;
      })
      .catch(error => {
        dispatch(showLoading(false));
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        crashlytics()?.recordError(error);
        console.log('createStoreCart.error', error);
      });
    setStoreCart(cart);
    return cart;
  };

  const removeItemFromCart = async cartItem => {
    try {
      let cart = storeCart;
      if (cart == null) cart = await createStoreCart();

      const storeCartItem = storeCartItems
        ? storeCartItems?.filter(
            storeCartItem => storeCartItem?.storeProductId == cartItem?.id,
          )[0]
        : null;
      if (storeCartItem != null) {
        if (storeCartItem.quantity == 1) {
          await API.graphql({
            query: mutations.deleteCartItem,
            variables: {input: {id: storeCartItem?.id}},
          });
          dispatch(fetchCurrentCarts());
        } else {
          const cardItemObj = {
            quantity: storeCartItem.quantity - 1,
            id: storeCartItem.id,
          };
          await API.graphql({
            query: mutations.updateCartItem,
            variables: {input: cardItemObj},
          })
            .then(resp => console.log('relatedScreen.updateCartItem', resp))
            .catch(error => {
              crashlytics()?.recordError(error);
              console.log('relatedScreen.updateCartItem.error', error);
              dispatch(
                showAlertToast({
                  alertMessage:
                    error?.message || AlertMessage.SOMETHING_WENT_WRONG,
                }),
              );
              return null;
            });
        }
        dispatch(showLoading(false));
        loadStoreCartItems(cart?.id);
      }
    } catch (error) {
      crashlytics()?.recordError(error);
      dispatch(showLoading(false));
      dispatch(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
      console.log('removeItemFromCart.error', error);
    }
  };

  const loadStoreCartItems = async cartId => {
    const cartsItems = await API.graphql({
      query: queries.cartsItemsByCartId,
      variables: {cartId: cartId},
    })
      .then(res => res?.data?.cartsItemsByCartId?.items)
      .catch(error => {
        dispatch(showLoading(false));
        dispatch(
          showAlertToast({
            alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
          }),
        );
        crashlytics()?.recordError(error);
        console.log('loadStoreCartItems.error', error);
      });

    setStoreCartItems(cartsItems);
    const quantityMap = {};
    let cartValue = 0;
    cartsItems.forEach(cartsItem => {
      quantityMap[cartsItem.storeProductId] = cartsItem.quantity;
      cartValue += cartsItem?.storeProduct?.sellingPrice * cartsItem?.quantity;
    });
    setCartItemQuantityMap(quantityMap);
  };

  const addStoreProductInCart = async cartItem => {
    try {
      let cart = storeCart;
      if (cart == null) cart = await createStoreCart();

      const storeCartItem = storeCartItems
        ? storeCartItems.filter(
            storeCartItem => storeCartItem.storeProductId == cartItem.id,
          )[0]
        : null;

      if (storeCartItem == null) {
        const createCartItemInput = {
          quantity: 1,
          orderedQuantity: 1,
          availability: true,
          cartId: cart?.id,
          cartItemCartId: cart?.id,
          storeProductId: cartItem.id,
          mrp: cartItem.sellingPrice,
          cartItemCartId: cart?.id,
        };

        console.log('createCartItemInput', createCartItemInput);

        await API.graphql({
          query: mutations.createCartItem,
          variables: {input: createCartItemInput},
        }).then(resp => resp.data.createCartItem);
        dispatch(fetchCurrentCarts());
      } else {
        const updateCartItemInput = {
          quantity: storeCartItem.quantity + 1,
          orderedQuantity: storeCartItem.quantity + 1,
          id: storeCartItem.id,
        };

        console.log('updateCartItemInput', updateCartItemInput);
        await API.graphql({
          query: mutations.updateCartItem,
          variables: {input: updateCartItemInput},
        }).then(resp => console.log('relatedScreen.updateCartItem', resp));
        dispatch(fetchCurrentCarts());
      }

      dispatch(showLoading(false));
      loadStoreCartItems(cart?.id);
    } catch (error) {
      crashlytics()?.recordError(error);
      dispatch(showLoading(false));
      dispatch(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
      console.log('addStoreProductInCart.error', error);
    }
  };
  useEffect(() => {
    loadStoreCart();
  }, []);

  return (
    <View style={styles.relatedProductsUpperView}>
      <Header
        backNavigationIcon={require('../../../assets/images/BackIcon.png')}
        headerTitle="Related Products"
        onPress={() => {
          analytic().trackEvent('RelatedProduct', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />
      <View style={styles.relatedProductsMainView}>
        <Text allowFontScaling={false} style={styles.itemCountText}>
          {' '}
          {relatedProducts?.length} Items
        </Text>
        <FlatList
          data={relatedProducts}
          showsVerticalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ItemCard
              item={item}
              storeProduct={item}
              itemQuantity={cartItemQuantityMap[item?.id] || 0}
              addItem={() => {
                dispatch(showLoading(true));
                analytic().trackEvent('RelatedProduct', {
                  CTA: 'addStoreProductInCart',
                });
                addStoreProductInCart(item);
              }}
              removeItemFromCart={() => {
                dispatch(showLoading(true));
                analytic().trackEvent('RelatedProduct', {
                  CTA: 'removeItemFromCart',
                });
                removeItemFromCart(item);
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default RelatedProductsScreen;

const styles = StyleSheet.create({
  relatedProductsUpperView: {
    flex: 1,
  },
  relatedProductsMainView: {
    flex: 1,
    paddingHorizontal: scaledValue(50),
    paddingTop: scaledValue(14),
  },
  itemCountText: {
    fontSize: scaledValue(24),
    marginBottom: scaledValue(17),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(29),
  },
});
