/* eslint-disable no-undef */
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const ItemCategoriesCard = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={
          props.isSelected
            ? styles.ItemCategoriesCardViewSelected
            : styles.ItemCategoriesCardView
        }>
        <Image
          source={{uri: props?.categoryIcon}}
          style={styles.ItemCategoriesIcon}
        />
        <Text
          allowFontScaling={false}
          style={styles.itemCategoriesNameText}
          numberOfLines={1}>
          {props?.category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCategoriesCard;
