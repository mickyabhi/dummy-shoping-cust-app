import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scaledValue} from '../../../utils/design.utils';
import percentIcon from '../../../../assets/images/percent_Icon.png';
import infoIcon from '../../../../assets/images/InfoIcon.png';

const OfferCard = () => (
  <View style={styles.offerCardView}>
    <View style={styles.offerCardListView}>
      <Image source={percentIcon} style={styles.percentIcon} />
      <Text allowFontScaling={false} style={styles.offerText}>
        Save extra with 5 offers
      </Text>
    </View>
    <View style={styles.offerCardListView}>
      <Image style={styles.infoImg} source={infoIcon} />
      <Text allowFontScaling={false} style={styles.offerText}>
        Get ₹ 50 off on min. shopping of ₹500 on paying online
      </Text>
    </View>
    <View style={styles.offerCardListView}>
      <Image style={styles.infoImg} source={infoIcon} />
      <Text allowFontScaling={false} style={styles.offerText}>
        Get 10% instant off with Kotak bank credit/Debit card on shopping of
        min. 500. use code:BL50
      </Text>
    </View>
    <View style={styles.offerCardListView}>
      <Image style={styles.infoImg} source={infoIcon} />
      <Text allowFontScaling={false} style={styles.offerText}>
        Get ₹ 50 off on min. shopping of ₹500 on paying online
      </Text>
    </View>
    <TouchableOpacity>
      <View style={styles.lastOfferCardListView}>
        <Text allowFontScaling={false} style={styles.lastOfferText}>
          See 2 more offer
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);
export default OfferCard;
const styles = StyleSheet.create({
  offerCardView: {
    width: '100%',
    borderWidth: scaledValue(1),
    padding: 2.5,
    borderRadius: scaledValue(8),
    borderColor: '#707070',
    marginVertical: scaledValue(39),
  },
  offerCardListView: {
    paddingVertical: scaledValue(28),
    borderBottomColor: '#707070',
    borderBottomWidth: scaledValue(1),
    paddingHorizontal: scaledValue(28),
    flexDirection: 'row',
  },
  offerText: {
    fontSize: scaledValue(22),
    marginLeft: scaledValue(59),
    fontFamily: 'Lato-Regular',
    lineHeight: scaledValue(27),
  },
  lastOfferCardListView: {
    paddingVertical: scaledValue(28),
    paddingHorizontal: scaledValue(28),
  },
  lastOfferText: {
    color: '#F78B1E',
    fontSize: scaledValue(18),
  },
  infoImg: {
    width: scaledValue(25.17),
    height: scaledValue(25.17),
    position: 'absolute',
    top: scaledValue(28),
    left: scaledValue(30.77),
  },
  percentIcon: {
    width: scaledValue(29.02),
    height: scaledValue(29.01),
    position: 'absolute',
    top: scaledValue(26),
    left: scaledValue(30.77),
  },
});
