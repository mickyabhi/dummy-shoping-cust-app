import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, BackHandler} from 'react-native';
import Header from '../../components/Header';
import ItemCategoriesCard from '../../components/ItemCategoiresCard';
import ItemSubCategoryCard from '../../components/ItemSubCategoryCard';
import SearchBar from '../../components/SearchBar';
import ItemCard from '../../components/ItemCard';
import backNavigationIcon from '../../../assets/images/BackIcon.png';
import cartIcon from '../../../assets/images/cartIcon.png';
import {useSelector, useDispatch} from 'react-redux';
import {
  showAlertToast,
  fetchCurrentCarts,
  fetchStoreProducts,
  showLoading,
  fetchUserCarts,
} from '../AppStore/actions';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import API from '@aws-amplify/api';
import {useNavigation} from '@react-navigation/native';
import {analytic} from '../../utils/analytics';
import {AlertMessage, getCategoryImage} from '../../utils/constants';
import Footer from '../../components/Footer';
import {styles} from './styles';
import crashlytics from '@react-native-firebase/crashlytics';
import {useIsFocused} from '@react-navigation/core';
import {isEmptyString} from '../../utils/common.utils';

const StoreInventory = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  console.log('isFocused', isFocused);
  const subCategoriesRef = React.useRef();

  const [store] = useState(props?.route?.params?.store);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [categorySubCategoryMap, setCategorySubCategoryMap] = useState({});
  const [filteredStoreProducts, setFilteredStoreProducts] =
    useState(storeProducts);
  const [storeSpecificCart, setStoreSpecificCart] = useState(null);
  const [storeSpecificCartItems, setStoreSpecificCartItems] = useState(null);
  const [cartItemQuantityMap, setCartItemQuantityMap] = useState({});
  const [cartValue, setCartValue] = useState(0);
  const userData = useSelector(state => state?.userData);
  const storeProducts = useSelector(state => state?.storeProducts);

  const handleBackButton = () => {
    if (props?.route?.params?.singleCartView) navigation.replace('Home');
    else navigation.goBack();
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );

    return () => backHandler.remove();
  }, [navigation]);

  useEffect(() => {
    if (storeProducts == null) return;
    dispatch(showLoading(true));
    if (selectedCategory == null) {
      setFilteredStoreProducts(storeProducts);
    } else {
      setFilteredStoreProducts(
        storeProducts?.filter(sp => sp?.product?.category == selectedCategory),
      );
    }

    setSubCategories(categorySubCategoryMap[selectedCategory]);
    dispatch(showLoading(false));
  }, [selectedCategory]);

  useEffect(() => {
    if (subCategories != null)
      subCategoriesRef?.current?.scrollToOffset({animated: true, offset: 0});
  }, [subCategories]);

  useEffect(() => {
    if (storeProducts == null) return;
    dispatch(showLoading(true));
    if (selectedSubCategory == null)
      setFilteredStoreProducts(
        storeProducts?.filter(sp => sp?.product?.category == selectedCategory),
      );
    else
      setFilteredStoreProducts(
        storeProducts?.filter(
          sp => sp?.product?.subCategory == selectedSubCategory,
        ),
      );

    dispatch(showLoading(false));
  }, [selectedSubCategory]);

  useEffect(() => {
    if (storeProducts == null) return;
    dispatch(showLoading(true));
    let ctgrs = [...new Set(storeProducts.map(sp => sp?.product?.category))];
    ctgrs = ctgrs?.filter(itm => !isEmptyString(itm));
    console.log('ctgrs', ctgrs);

    setCategories(ctgrs.sort());

    const ctSbCtMap = {};
    storeProducts?.forEach(sp => {
      const spSubCategory = sp?.product?.subCategory
        ?.trim()
        ?.split('"')
        .join('');

      const spCategory = sp?.product?.category?.trim();

      if (isEmptyString(spSubCategory)) {
        return;
      }

      if (ctSbCtMap[spCategory] == null) {
        ctSbCtMap[spCategory] = [];
      }

      ctSbCtMap[spCategory] = [
        ...new Set([...ctSbCtMap[spCategory], spSubCategory]),
      ];

      ctSbCtMap[spCategory] = ctSbCtMap[spCategory]?.sort();
      ctSbCtMap[spCategory] = ctSbCtMap[spCategory]?.filter(
        itm => !isEmptyString(itm),
      );
    });

    setCategorySubCategoryMap(ctSbCtMap);
    setSelectedCategory(ctgrs[0]);
    dispatch(showLoading(false));
  }, [storeProducts]);

  const createStoreSpecificCart = async () => {
    const createCartInput = {
      userId: userData?.id,
      storeId: store.id,
      isOrderPlaced: false,
      originalCartValue: 0,
      updatedCartValue: 0,
    };

    console.log('createCartInput', createCartInput);

    return await API.graphql({
      query: mutations.createCart,
      variables: {input: createCartInput},
    }).then(resp => {
      const cart = resp?.data?.createCart;
      dispatch(fetchCurrentCarts(userData?.id));
      setStoreSpecificCart(cart);
      return cart;
    });
  };

  const loadStoreSpecificCart = async () => {
    if (userData?.id != null) {
      const carts = await API.graphql({
        query: queries.cartsByUserId,
        variables: {userId: userData.id, limit: 10000},
      })
        .then(res => res?.data?.cartsByUserId?.items)
        .catch(error => {
          dispatch(showLoading(false));
          crashlytics()?.recordError(error);
          dispatch(
            showAlertToast({
              alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
            }),
          );
          console.log('loadStoreSpecificCart.error', error);
        });
      const storeSpecificCarts = carts?.filter(
        cart => cart?.storeId == store.id && !cart.isOrderPlaced,
      );
      if (storeSpecificCarts && storeSpecificCarts?.length) {
        setStoreSpecificCart(storeSpecificCarts[0]);
        loadStoreSpecificCartItems(storeSpecificCarts[0]?.id);
      }
    }
  };

  const loadStoreSpecificCartItems = async cartId => {
    try {
      dispatch(showLoading(true));
      const cartsItems = await API.graphql({
        query: queries.cartsItemsByCartId,
        variables: {cartId: cartId, limit: 10000},
      }).then(res => res?.data?.cartsItemsByCartId?.items);

      setStoreSpecificCartItems(cartsItems);
      const quantityMap = {};
      let cartValue = 0;
      cartsItems?.forEach(cartsItem => {
        quantityMap[cartsItem.storeProductId] = cartsItem.quantity;
        cartValue +=
          cartsItem?.storeProduct?.sellingPrice * cartsItem?.quantity;
      });
      setCartValue(cartValue.toFixed(2));
      setCartItemQuantityMap(quantityMap);
      dispatch(showLoading(false));
      console.log('loadStoreSpecificCartItems.cartsItems', cartsItems);
    } catch (error) {
      dispatch(showLoading(false));
      crashlytics()?.recordError(error);
      dispatch(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
      console.log('loadStoreSpecificCartItems.error', error);
    }
  };

  useEffect(() => {
    loadStoreSpecificCart();
    dispatch(fetchStoreProducts(store.id));
  }, [isFocused, store]);

  const onCategorySelected = category => {
    setSelectedCategory(category);
  };

  const onSubCategorySelected = subCategory => {
    setSelectedSubCategory(subCategory);
  };

  const addStoreProductInCart = async storeProduct => {
    try {
      let cart = storeSpecificCart;
      if (cart == null) cart = await createStoreSpecificCart();

      const storeSpecificCartItem = storeSpecificCartItems
        ? storeSpecificCartItems?.filter(
            storeSpecificCartItem =>
              storeSpecificCartItem.storeProductId == storeProduct.id,
          )[0]
        : null;

      if (storeSpecificCartItem == null) {
        const createCartItemInput = {
          quantity: 1,
          orderedQuantity: 1,
          availability: true,
          cartId: cart?.id,
          cartItemCartId: cart?.id,
          storeProductId: storeProduct?.id,
          mrp: storeProduct?.sellingPrice,
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
          quantity: storeSpecificCartItem?.quantity + 1,
          orderedQuantity: storeSpecificCartItem?.quantity + 1,
          id: storeSpecificCartItem?.id,
        };

        console.log('updateCartItemInput', updateCartItemInput);

        await API.graphql({
          query: mutations.updateCartItem,
          variables: {input: updateCartItemInput},
        }).then(resp => console.log('updateCartItem', resp));
        dispatch(fetchCurrentCarts());
      }

      loadStoreSpecificCartItems(cart?.id);
      dispatch(showLoading(false));
    } catch (error) {
      dispatch(showLoading(false));
      crashlytics()?.recordError(error);
      dispatch(
        showAlertToast({
          alertMessage: error?.message || AlertMessage.SOMETHING_WENT_WRONG,
        }),
      );
      console.log('addStoreProductInCart.error', error);
    }
  };

  const getStoreProducts = () => {
    if (searchValue == '') {
      return filteredStoreProducts;
    } else {
      return filteredStoreProducts?.filter(data =>
        data?.product?.description
          .toLowerCase()
          .includes(searchValue?.toLowerCase()),
      );
    }
  };

  useEffect(() => {
    getStoreProducts();
  }, [searchValue]);

  const removeItemFromCart = async cartItem => {
    let cart = storeSpecificCart;
    if (cart == null) cart = await createStoreSpecificCart();

    console.log('removeItemFromCart', cartItem);
    const storeSpecificCartItem = storeSpecificCartItems
      ? storeSpecificCartItems?.filter(
          storeSpecificCartItem =>
            storeSpecificCartItem?.storeProductId == cartItem?.id,
        )[0]
      : null;
    try {
      if (storeSpecificCartItem != null) {
        if (storeSpecificCartItem.quantity == 1) {
          await API.graphql({
            query: mutations.deleteCartItem,
            variables: {input: {id: storeSpecificCartItem.id}},
          }).then(dispatch(fetchCurrentCarts()));
        } else {
          const cardItemObj = {
            quantity: storeSpecificCartItem.quantity - 1,
            id: storeSpecificCartItem.id,
          };

          await API.graphql({
            query: mutations.updateCartItem,
            variables: {input: cardItemObj},
          }).then(dispatch(fetchCurrentCarts()));
        }
        dispatch(showLoading(false));
        loadStoreSpecificCartItems(cart?.id);
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

  return (
    <>
      <View style={styles.StoreInventoryOuterView}>
        <Header
          backNavigationIcon={backNavigationIcon}
          headerTitle={store.name}
          cartIcon={cartIcon}
          onPress={() => {
            analytic().trackEvent('StoreInventory', {
              CTA: 'backIcon',
            });

            if (props?.route?.params?.singleCartView)
              navigation.replace('Home');
            else navigation.goBack();
          }}
        />

        <View style={styles.StoreInventoryMainView}>
          <View style={styles.itemCountView}>
            <Text allowFontScaling={false} style={styles.itemDescriptionText}>
              {store?.category}
            </Text>
            <Text allowFontScaling={false} style={styles.itemDescriptionText}>
              {filteredStoreProducts?.length} Items
            </Text>
          </View>

          <View style={styles.ItemCategoriesView}>
            <FlatList
              data={categories}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({key, item}) => (
                <ItemCategoriesCard
                  category={item}
                  categoryIcon={getCategoryImage(item)}
                  onPress={() => {
                    analytic().trackEvent('StoreInventory', {
                      CTA: 'SelectedCategory',
                      data: selectedCategory,
                    });
                    onCategorySelected(item);
                    setSelectedSubCategory(null);
                  }}
                  isSelected={selectedCategory === item}
                />
              )}
            />
          </View>

          {subCategories && (
            <View style={styles.ItemSubCategoriesView}>
              <FlatList
                ref={subCategoriesRef}
                data={subCategories}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({key, item}) => (
                  <ItemSubCategoryCard
                    key={item}
                    subCat={item}
                    onPress={() => {
                      analytic().trackEvent('StoreInventory', {
                        CTA: 'SelectedSubCategory',
                        data: selectedSubCategory,
                      });
                      onSubCategorySelected(item);
                    }}
                    isSelected={selectedSubCategory === item}
                  />
                )}
              />
            </View>
          )}
          {filteredStoreProducts?.length != 0 && (
            <SearchBar
              onChangeText={text => setSearchValue(text)}
              placeholder="Search items you wish to buy.."
            />
          )}
          <FlatList
            data={getStoreProducts()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <ItemCard
                storeProduct={item}
                storeId={store.id}
                itemQuantity={cartItemQuantityMap[item?.id] || 0}
                addItem={() => {
                  dispatch(showLoading(true));
                  analytic().trackEvent('StoreInventory', {
                    CTA: 'addStoreProductInCart',
                  });
                  addStoreProductInCart(item);
                }}
                removeItemFromCart={() => {
                  dispatch(showLoading(true));
                  analytic().trackEvent('StoreInventory', {
                    CTA: 'removeItemFromCart',
                  });
                  removeItemFromCart(item);
                }}
              />
            )}
          />
        </View>
      </View>
      {cartValue != 0 && (
        <Footer
          itemCount={storeSpecificCartItems?.length}
          cartValue={cartValue}
          footerTitle="View Cart"
          onPress={() => {
            analytic().trackEvent('StoreInventory', {
              CTA: 'viewCart',
            });
            dispatch(fetchUserCarts());
            storeSpecificCartItems?.length == 0
              ? null
              : navigation.navigate('CartStore');
          }}
        />
      )}
      {filteredStoreProducts?.length == 0 && (
        <Text allowFontScaling={false} style={styles.noProductText}>
          No Products Listed
        </Text>
      )}
    </>
  );
};

export default StoreInventory;
