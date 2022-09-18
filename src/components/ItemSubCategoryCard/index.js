import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const ItemSubCategoryCard = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={
          props.isSelected
            ? styles.subCategoryViewSelected
            : styles.subCategoryView
        }>
        <Text allowFontScaling={false} style={styles.subCategoryText}>
          {props?.subCat}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemSubCategoryCard;
