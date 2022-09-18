import {StyleSheet} from 'react-native';
import {scaledValue} from '../../utils/design.utils';

export const styles = StyleSheet.create({
  chatTextView: {
    backgroundColor: '#F9993A',
    paddingHorizontal: scaledValue(50),
    paddingVertical: scaledValue(25),
    borderWidth: scaledValue(1),
    borderColor: '#C3C3C3',
    borderTopRightRadius: scaledValue(24),
    borderTopLeftRadius: scaledValue(24),
    borderBottomLeftRadius: scaledValue(24),
    justifyContent: 'center',
  },
  storeChatTextView: {
    backgroundColor: '#F1F1F1',
    paddingHorizontal: scaledValue(50),
    paddingVertical: scaledValue(25),
    borderWidth: scaledValue(1),
    borderColor: '#C3C3C3',
    borderTopRightRadius: scaledValue(24),
    borderTopLeftRadius: scaledValue(24),
    borderBottomRightRadius: scaledValue(24),
    justifyContent: 'center',
  },
  customerChatAreaView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: scaledValue(44),
  },

  customerImageAreaView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: scaledValue(44),
  },

  storeChatAreaView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginBottom: scaledValue(44),
  },
  labelText: {
    fontSize: scaledValue(30),
    color: '#fff',
    fontFamily: 'Lato-Regular',
  },
  labelStyle: {
    backgroundColor: '#868686',
    marginLeft: scaledValue(10),
  },

  storeLabelStyle: {
    backgroundColor: '#868686',
    marginRight: scaledValue(10),
  },
  message: {maxWidth: scaledValue(337), color: '#fff'},
  storeMessage: {maxWidth: scaledValue(337)},

  imageAreaView: {
    backgroundColor: '#F9993A',
    paddingHorizontal: scaledValue(4),
    paddingVertical: scaledValue(4),
    borderWidth: scaledValue(1),
    borderColor: '#C3C3C3',
    borderTopRightRadius: scaledValue(24),
    borderTopLeftRadius: scaledValue(24),
    borderBottomLeftRadius: scaledValue(24),
    justifyContent: 'center',
  },

  chatImage: {
    width: scaledValue(400),
    height: scaledValue(400),
    borderTopRightRadius: scaledValue(24),
    borderTopLeftRadius: scaledValue(24),
    borderBottomLeftRadius: scaledValue(24),
    borderBottomRightRadius: scaledValue(24),
  },

  storeImageAreaView: {
    backgroundColor: '#C3C3C3',
    paddingHorizontal: scaledValue(4),
    paddingVertical: scaledValue(4),
    borderWidth: scaledValue(1),
    borderColor: '#C3C3C3',
    borderTopRightRadius: scaledValue(24),
    borderTopLeftRadius: scaledValue(24),
    borderBottomRightRadius: scaledValue(24),
    justifyContent: 'center',
  },
});
