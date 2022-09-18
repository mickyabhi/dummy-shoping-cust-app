/* eslint-disable no-undef */
import React from 'react';
import {StyleSheet, View, ScrollView, Text, FlatList} from 'react-native';
import {scaledValue} from '../../utils/design.utils';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {analytic} from '../../utils/analytics';

const FrequentlyBroughtItems = () => {
  const relatedProducts = useSelector(state => state?.storeProducts);
  const navigation = useNavigation();
  return (
    <View style={styles.frequentlyBroughtItemsUpperView}>
      <Header
        backNavigationIcon={require('../../../assets/images/BackIcon.png')}
        headerTitle="Frequently Brought Items"
        onPress={() => {
          analytic().trackEvent('FrequentlyBroughtItems', {
            CTA: 'backIcon',
          });
          navigation.goBack();
        }}
      />
      <ScrollView>
        <View style={styles.frequentlyBroughtItemsMainView}>
          <Text allowFontScaling={false} style={styles.itemCountText}>
            {relatedProducts.length} Items
          </Text>
          <FlatList
            data={relatedProducts}
            renderItem={({item}) => (
              <ItemCard
                storeProduct={item}
                productDescription={item?.product?.description}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default FrequentlyBroughtItems;
const styles = StyleSheet.create({
  frequentlyBroughtItemsUpperView: {
    flex: 1,
  },
  frequentlyBroughtItemsMainView: {
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
