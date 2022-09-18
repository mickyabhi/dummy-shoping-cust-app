import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import dummyImg from '../../../assets/images/dummy-product-img.png';
import FastImage from 'react-native-fast-image';
import {PRODUCT_IMAGE_BASE_URL} from '../../utils/constants';
import {styles} from './styles';

const ItemDetailCard = props => {
  const [productImage, setProductImage] = useState({
    uri: PRODUCT_IMAGE_BASE_URL + props?.item?.product?.id + '%403x.png',
  });

  useEffect(() => {
    setProductImage({
      uri: PRODUCT_IMAGE_BASE_URL + props?.item?.productId + '%403x.png',
    });
  }, [props]);
  return (
    <View style={styles.itemDetailView}>
      <Text allowFontScaling={false} style={styles.textItemsName}>
        {props?.item?.product?.description || props?.itemName}
      </Text>
      <View style={styles.pricesView}>
        <Text allowFontScaling={false} style={styles.textPrices}>
          {props?.item?.sellingPrice ? `₹${props?.item?.sellingPrice}` : ''}
        </Text>
        {props?.item?.sellingPrice != props?.item?.mrp && (
          <Text allowFontScaling={false} style={styles.discountsText}>
            {props?.item?.mrp ? `₹${props?.item?.mrp}` : ''}
          </Text>
        )}
      </View>
      <Text allowFontScaling={false} style={styles.textsPercentage}>
        {props?.item?.discount ? `${props?.item?.discount}% OFF` : ''}
      </Text>
      <View style={styles.imagesView}>
        <View>
          <FastImage
            resizeMode={FastImage.resizeMode.center}
            onError={() => {
              setProductImage(dummyImg);
            }}
            source={productImage}
            style={styles.bigImg}
          />
        </View>
      </View>
      <Text allowFontScaling={false} style={styles.deliveredMsgText}>
        Get delivery at your door step within 2 hours.
      </Text>
    </View>
  );
};

export default ItemDetailCard;
