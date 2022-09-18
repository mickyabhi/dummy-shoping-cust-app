import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import ButtonUi from '../Button';
import {useState} from 'react';
import ItemsCountButton from '../ItemsCountButton';
import {useNavigation} from '@react-navigation/native';
import API from '@aws-amplify/api';
import FastImage from 'react-native-fast-image';
import * as queries from '../../graphql/queries';
import {analytic} from '../../utils/analytics';
import {PRODUCT_IMAGE_BASE_URL} from '../../utils/constants';
import {styles} from './styles';

const ItemCard = props => {
  const navigation = useNavigation();
  const [productImage, setProductImage] = useState({
    uri: PRODUCT_IMAGE_BASE_URL + props?.storeProduct?.productId + '%403x.png',
  });
  const [quantity, setQuantity] = useState(props?.itemQuantity);
  const [product, setProduct] = useState(null);

  const loadProduct = async productId => {
    const prd = await API.graphql({
      query: queries.getProduct,
      variables: {id: productId},
    }).then(res => {
      return res?.data?.getProduct;
    });
    setProduct(prd);
  };

  useEffect(() => {
    if (props?.storeProduct?.product == null) {
      loadProduct(props?.storeProduct?.productId);
    } else {
      setProduct(props?.storeProduct?.product);
    }
    setQuantity(props?.itemQuantity);
  }, [props]);

  const itemCardHandler = () => {
    analytic().trackEvent('StoreInventory', {
      CTA: 'ItemCard',
    });
    navigation.navigate('ItemScreen', {
      item: props?.storeProduct,
      itemName: product?.description,
      itemQuantity: props?.itemQuantity,
    });
  };
  return (
    <View style={styles.itemCardView(props?.noImage)}>
      <TouchableOpacity onPress={itemCardHandler}>
        <FastImage
          resizeMode={FastImage.resizeMode.center}
          style={styles.itemImage}
          onError={() => {
            setProductImage(
              require('../../../assets/images/dummy-product-img.png'),
            );
          }}
          source={productImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textsView(props?.noImage)}
        onPress={itemCardHandler}>
        <Text
          allowFontScaling={false}
          style={styles.textItemName(props?.isEmptyCartImage)}>
          {product?.description || props?.productDescription}
        </Text>
        <View style={styles.priceView}>
          <Text allowFontScaling={false} style={styles.textPrice}>
            {props?.storeProduct?.sellingPrice
              ? `₹ ${props?.storeProduct?.sellingPrice?.toFixed(2)}`
              : ''}
          </Text>
          {props?.storeProduct?.sellingPrice != props?.storeProduct?.mrp && (
            <Text allowFontScaling={false} style={styles.discountText}>
              ₹ {props?.storeProduct?.mrp}
            </Text>
          )}
        </View>
        <Text allowFontScaling={false} style={styles.textPercentage}>
          {props?.storeProduct?.discount
            ? `${props?.storeProduct?.discount}% OFF`
            : ''}
        </Text>
      </TouchableOpacity>
      {props?.isEmptyCartImage == true ||
      props?.noImage ? null : props?.cardImage !== undefined ? (
        <TouchableOpacity onPress={props.onPress}>
          <Image source={props?.cardImage} style={styles.deleteIconStyle} />
        </TouchableOpacity>
      ) : quantity === 0 ? (
        <ButtonUi
          title="+ ADD"
          borderColor={'#F8993A'}
          styles={styles.ButtonUi}
          onPress={() => {
            setQuantity(current => current + 1);
            props?.addItem();
          }}
        />
      ) : (
        <ItemsCountButton
          quantity={quantity}
          styles={styles.ButtonUi}
          addPress={props?.addItem}
          subPress={props?.removeItemFromCart}
        />
      )}
    </View>
  );
};

export default ItemCard;
