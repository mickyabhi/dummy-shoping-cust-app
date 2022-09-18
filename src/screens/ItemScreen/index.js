import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, BackHandler} from 'react-native';
import ItemDetailCard from '../../components/ItemDetailCard';
import Header from '../../components/Header';
import {scaledValue} from '../../utils/design.utils';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import backIcon from '../../../assets/images/BackIcon.png';
import cartIcon from '../../../assets/images/cartIcon.png';
import {useDispatch} from 'react-redux';
import {analytic} from '../../utils/analytics';
import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import {getItemFromAsyncStorage} from '../../utils/storage.utils';
import {
  fetchCurrentCarts,
  showAlertToast,
  showLoading,
} from '../AppStore/actions';
import crashlytics from '@react-native-firebase/crashlytics';
import {AlertMessage} from '../../utils/constants';

const ItemScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [item, setItem] = useState(props?.route?.params?.item);
  const [storeId] = useState(props?.route?.params?.item?.storeId);
  const [cartItemQty, setCartItemQty] = useState(
    props?.route?.params?.itemQuantity,
  );

  const addStoreProductInCart = async cartId => {
    if (cartId == null) {
      dispatch(
        showAlertToast({
          alertMessage: AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
      return;
    }

    try {
      dispatch(showLoading(true));
      const cartItems = await API.graphql({
        query: queries.cartsItemsByCartId,
        variables: {cartId: cartId},
      })
        .then(resp => resp.data.cartsItemsByCartId.items)
        .then(resp =>
          resp?.filter(cartItem => cartItem?.storeProductId == item?.id),
        );

      if (cartItems.length == 0) {
        const createCartItemInput = {
          cartId: cartId,
          mrp: item?.sellingPrice,
          quantity: 1,
          storeProductId: item?.id,
          availability: true,
          orderedQuantity: 1,
          cartItemCartId: cartId,
        };

        console.log('createCartItemInput', createCartItemInput);

        await API.graphql({
          query: mutations.createCartItem,
          variables: {input: createCartItemInput},
        }).then(dispatch(fetchCurrentCarts()));
      } else {
        const updateCartItemInput = {
          id: cartItems[0]?.id,
          quantity: cartItemQty,
          orderedQuantity: cartItemQty,
        };
        console.log('updateCartItemInput', updateCartItemInput);

        await API.graphql({
          query: mutations.updateCartItem,
          variables: {input: updateCartItemInput},
        }).then(dispatch(fetchCurrentCarts()));
      }

      dispatch(showLoading(false));
      dispatch(
        showAlertToast({
          alertMessage: '1 item added in cart',
        }),
      );
    } catch (error) {
      dispatch(showLoading(false));
      console.log('addStoreProductInCart.error', error);
      crashlytics()?.recordError(error);
      dispatch(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  };

  useEffect(() => {
    setCartItemQty(cartItemQty + 1);
  }, []);

  useEffect(() => {
    setItem(props?.route?.params?.item);
  }, [props]);

  const addToCart = async () => {
    setCartItemQty(cartItemQty + 1);
    try {
      dispatch(showLoading(true));
      const userId = await getItemFromAsyncStorage('current_user_id');
      const userCarts = await API.graphql({
        query: queries.cartsByUserId,
        variables: {filter: {isOrderPlaced: {eq: false}}, userId: userId},
      }).then(resp => resp.data.cartsByUserId.items);

      const userStoreLinkedCart = userCarts?.filter(
        cart => cart.storeId == storeId,
      );

      if (userStoreLinkedCart != null && userStoreLinkedCart.length) {
        await addStoreProductInCart(userStoreLinkedCart[0]?.id);
      } else {
        const createCartInput = {
          userId: userId,
          storeId: storeId,
          originalCartValue: 0,
          updatedCartValue: 0,
          isOrderPlaced: false,
        };

        const createCartResp = await API.graphql({
          query: mutations.createCart,
          variables: {
            input: createCartInput,
          },
        }).then(resp => resp.data.createCart);
        await addStoreProductInCart(createCartResp.id);
      }
      dispatch(showLoading(false));
    } catch (error) {
      dispatch(showLoading(false));
      console.log('addToCart.error', error);
      crashlytics()?.recordError(error);
      dispatch(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
    }
  };
  const handleBackButton = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={styles.itemScreenUpperView}>
      <Header
        backNavigationIcon={backIcon}
        cartIcon={cartIcon}
        onPress={() => {
          analytic().trackEvent('ItemScreen', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />
      <ScrollView>
        <ItemDetailCard
          itemName={props?.route?.params?.itemName}
          item={props?.route?.params?.item}
          itemQuantity={props?.route?.params?.itemQuantity}
        />
        {/*   <SubHeader
          title="Related products"
          rightSideText="View all"
          fontFamily="Lato-SemiBold"
          lineHeight={scaledValue(29)}
          onPressed={() => {
            analytic().trackEvent('ItemScreen', {
              CTA: 'relatedProduct',
              data: relatedProducts,
            });
            navigation.navigate('RelatedProductsScreen', {
              data: relatedProducts,
            });
          }}
          image={
            <Image
              source={viewAllIcon}
              style={styles.viewAllIconImg}
              tintColor="#F8993A"
            />
          }
        />
        <View style={styles.itemCard2View}>
          <ScrollView>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={relatedProducts}
              renderItem={({item}) => (
                <RelatedItemCard
                  mrp={item.mrp}
                  discount={item.discount}
                  sellingPrice={item.sellingPrice}
                  itemName={item?.product?.description}
                  productId={item?.product?.id}
                />
              )}
            />
          </ScrollView>
        </View>
       <SubHeader
          title="Frequently brought items"
          rightSideText="View all"
          onPressed={() => {
            navigation.navigate('FrequentlyBroughtItems');
          }}
          image={
            <Image
              source={viewAllIcon}
              style={styles.viewAllIconImg}
              tintColor="#F8993A"
            />
          }
        /> */}
        {/* <View style={styles.itemCard2View}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <RelatedItemCard />
          </ScrollView>
        </View> */}
      </ScrollView>
      <Button
        width="100%"
        height={scaledValue(117)}
        borderColor="#F8993A"
        backgroundColor="#F8993A"
        title="Add to cart"
        color="#fff"
        fSize={scaledValue(30)}
        onPress={addToCart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemScreenUpperView: {
    flex: 1,
  },
  itemCard2View: {
    flexDirection: 'row',
    paddingHorizontal: scaledValue(49),
    paddingBottom: scaledValue(35),
    paddingTop: scaledValue(22),
  },
  viewAllIconImg: {
    width: scaledValue(15.24),
    height: scaledValue(8.93),
    marginLeft: scaledValue(4.15),
    transform: [{rotate: '270deg'}],
    marginTop: scaledValue(8),
  },
});
export default ItemScreen;
