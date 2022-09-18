import React from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const ItemsCountButton = props => {
  const [quantity, setQuantity] = useState(props.quantity);
  const additionClickHandler = () => {
    setQuantity(current => current + 1);
    if (props?.addPress()) props?.addPress();
  };

  const subtractionClickHandler = () => {
    setQuantity(current => (current > 0 ? current - 1 : current));
    if (props?.subPress()) props?.subPress();
  };

  return (
    <View style={styles.CountButtonView}>
      <TouchableOpacity
        onPress={subtractionClickHandler}
        style={styles.subtractionButton}>
        <Text allowFontScaling={false} style={styles.textColor}>
          -
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.countView}>
        <Text allowFontScaling={false} style={styles.countButtonTitle}>
          {quantity}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={additionClickHandler} style={styles.addButton}>
        <Text allowFontScaling={false} style={styles.textColor}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemsCountButton;
