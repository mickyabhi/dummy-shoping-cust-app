import {Dimensions} from 'react-native';
import {isEmptyString} from './common.utils';
const windowWidth = Dimensions.get('window').width;
export const scaleFactor = windowWidth / 750;
export const scaledValue = (value = 0) => value * scaleFactor;
const hashStr = str => {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash += str.charCodeAt(i);
  }
  return hash;
};

export const dim = {
  _0px: scaledValue(0),
  _1px: scaledValue(1),
  _2px: scaledValue(2),
  _3px: scaledValue(3),
  _4px: scaledValue(4),
  _5px: scaledValue(5),
  _6px: scaledValue(6),
  _7px: scaledValue(7),
  _8px: scaledValue(8),
  _10px: scaledValue(10),
  _12px: scaledValue(12),
  _14px: scaledValue(14),
  _16px: scaledValue(16),
  _18px: scaledValue(18),
  _20px: scaledValue(20),
  _22px: scaledValue(22),
  _24px: scaledValue(24),
  _26px: scaledValue(26),
  _28px: scaledValue(28),
  _30px: scaledValue(30),
  _32px: scaledValue(32),
  _34px: scaledValue(34),
  _36px: scaledValue(36),
  _38px: scaledValue(38),
  _40px: scaledValue(40),
  _42px: scaledValue(42),
  _44px: scaledValue(44),
  _46px: scaledValue(46),
  _48px: scaledValue(48),
  _50px: scaledValue(50),
  _52px: scaledValue(52),
  _54px: scaledValue(54),
  _56px: scaledValue(56),
  _58px: scaledValue(58),
  _60px: scaledValue(60),
  _62px: scaledValue(62),
  _64px: scaledValue(64),
  _66px: scaledValue(66),
  _68px: scaledValue(68),
  _70px: scaledValue(70),
  _72px: scaledValue(72),
  _74px: scaledValue(74),
  _76px: scaledValue(76),
  _78px: scaledValue(78),
  _80px: scaledValue(80),
  _82px: scaledValue(82),
  _scale: function _scale(value) {
    return scaledValue(value);
  },
};
const randomColorArray = [
  '#F69988',
  '#F36C60',
  '#E84E40',
  '#FF7997',
  '#FF5177',
  '#F48FB1',
  '#F06292',
  '#EC407A',
  '#FF80AB',
  '#FF4081',
  '#CE93D8',
  '#BA68C8',
  '#AB47BC',
  '#EA80FC',
  '#5C6BC0',
  '#3F51B5',
  '#8C9EFF',
  '#536DFE',
  '#3D5AFE',
  '#91A7FF',
  '#738FFE',
  '#5677FC',
  '#6889FF',
  '#4D73FF',
  '#80DEEA',
  '#4DD0E1',
  '#26C6DA',
  '#00BCD4',
  '#84FFFF',
  '#18FFFF',
  '#00E5FF',
  '#80CBC4',
  '#4DB6AC',
  '#26A69A',
  '#009688',
  '#64FFDA',
  '#1DE9B6',
  '#00BFA5',
  '#72D572',
  '#42BD41',
  '#2BAF2B',
  '#A2F78D',
  '#E6EE9C',
  '#DCE775',
  '#D4E157',
  '#FFEE58',
  '#FFE082',
  '#FFD54F',
  '#FFCA28',
  '#FFE57F',
  '#FFD740',
  '#FFC400',
  '#FFCC80',
  '#FFB74D',
  '#FFA726',
  '#FFD180',
  '#FFAB40',
  '#FF9100',
  '#FFCCBC',
  '#FFAB91',
  '#FF8A65',
  '#FF9E80',
  '#FF6E40',
  '#BCAAA4',
  '#A1887F',
  '#8D6E63',
  '#90A4AE',
  '#78909C',
  '#607D8B',
];
export const randomColor = (str = null) => {
  if (isEmptyString(str)) {
    return randomColorArray[
      Math.floor(Math.random() * randomColorArray.length)
    ];
  }
  const index = hashStr(str) % randomColorArray.length;
  return randomColorArray[index];
};
