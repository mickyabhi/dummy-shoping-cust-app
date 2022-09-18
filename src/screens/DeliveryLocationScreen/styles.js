import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mapView: {
    flex: 2.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flex: 1,
    paddingHorizontal: scaledValue(48.72),
    paddingTop: scaledValue(44.99),
    paddingBottom: scaledValue(31.47),
  },
  deliveryText: {
    fontFamily: 'Lato-Bold',
    fontSize: scaledValue(17),
    color: '#00000057',
    letterSpacing: scaledValue(3.06),
    marginBottom: scaledValue(49.01),
  },
  areaDetailsMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  areaDetails: {
    flexDirection: 'row',
  },
  locationImage: {
    width: scaledValue(31.76),
    height: scaledValue(39.12),
  },
  areaText: {
    fontFamily: 'Lato-Bold',
    fontSize: scaledValue(35),
    marginLeft: scaledValue(13.74),
  },
  address: {
    width: scaledValue(540),
    fontFamily: 'Lato-Semibold',
    fontSize: scaledValue(26),
    color: '#000000',
    marginTop: scaledValue(25),
    marginBottom: scaledValue(33),
    lineHeight: scaledValue(40),
  },
  marker: {
    top: scaledValue(365),
    height: scaledValue(93.75),
    width: scaledValue(322.75),
    position: 'absolute',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  backIcon: {
    width: scaledValue(20.08),
    height: scaledValue(34.27),
    tintColor: '#F8993A',
  },
  backIconView: {
    position: 'absolute',
    left: scaledValue(20),
    top: scaledValue(20.82),
    backgroundColor: '#F3901E',
    zIndex: 1,
    width: scaledValue(55),
    height: scaledValue(55),
  },
  container: {
    flex: 0,
    position: 'absolute',
    width: scaledValue(660),
    zIndex: 1,
    right: 0,
    padding: scaledValue(20),
  },
  textInput: {
    height: 38,
    color: '#000000',
    borderRadius: scaledValue(18),
    paddingRight: scaledValue(80),
  },
  placeSearchInput: {
    width: scaledValue(25),
    height: scaledValue(25),
    position: 'absolute',
    right: scaledValue(21.03),
    top: scaledValue(26),
  },
});
