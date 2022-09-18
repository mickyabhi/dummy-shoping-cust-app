import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
import ButtonUi from '../Button';
import FastImage from 'react-native-fast-image';
import {PRODUCT_IMAGE_BASE_URL} from '../../utils/constants';
import {styles} from './styles';

const RelatedItemCard = props => {
  const [productImage, setProductImage] = useState({
    uri: PRODUCT_IMAGE_BASE_URL + props?.productId + '%403x.png',
  });

  return (
    <View style={styles.relatedItemCardView}>
      <FastImage
        resizeMode={FastImage.resizeMode.center}
        onError={() => {
          setProductImage(
            require('../../../assets/images/dummy-product-img.png'),
          );
        }}
        source={productImage}
        style={styles.imgRelatedItemCard}
      />
      <Text allowFontScaling={false} style={styles.itemNameCard2Text}>
        {props?.itemName}
      </Text>
      <View style={styles.centerTextsView}>
        <Text allowFontScaling={false} style={styles.relatedItemCardRs}>
          {props?.sellingPrice ? `₹ ${props?.sellingPrice} ` : ''}
        </Text>
        <Text allowFontScaling={false} style={styles.itemRealRs}>
          {props?.mrp ? `₹ ${props?.mrp}` : ''}
        </Text>
      </View>
      <Text allowFontScaling={false} style={styles.itemDiscount}>
        {props?.discount ? `${props?.discount} % OFF` : ''}
      </Text>
      <ButtonUi
        title="+ ADD"
        width={scaledValue(113)}
        height={scaledValue(41)}
        fSize={scaledValue(20)}
        borderColor="#F89A3A"
      />
    </View>
  );
};
export default RelatedItemCard;
