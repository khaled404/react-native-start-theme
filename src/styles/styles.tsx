import {StyleSheet, I18nManager} from 'react-native';
import {Fonts} from '../constants/styleConstants';
const {isRTL} = I18nManager;
export const commonStyles = StyleSheet.create({
  rowBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  boxShadow: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    marginBottom: 5,
  },
  minTitle: {
    fontFamily: Fonts.bold,
    fontSize: 20,
  },
});

export const dir = isRTL ? 'right' : 'left';
