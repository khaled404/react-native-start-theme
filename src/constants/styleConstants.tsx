import {Dimensions, NativeModules} from 'react-native';

export enum Colors {
  minColor = '#f95a25',
  colorSacand = '#F5F6F8',
  success = '#2DCE00',
  warning = '#FF5656',
  white = '#fff',
  dark = '#000',
  grayDark = '#707070',
  gray = '#dadce2',
  edit = '#337ab7',
  facebook = '#3b5998',
  google = '#ea4335',
  twitter = '#1da1f2',
  linkedin = '#0077b5',
  youtube = '#ff0000',
  snapchat = '#fffc00',
  instagram = '#405de6',
  whatsapp = '#128c7e',
}

export enum Fonts {
  light = 'Tajawal-Light',
  regular = 'Tajawal-Regular',
  medium = 'Tajawal-Medium',
  bold = 'Tajawal-Bold',
  black = 'Tajawal-Black',
}

export enum Images {}

export enum ScreenOptions {
  StatusBarHeight = NativeModules.StatusBarManager.HEIGHT,
  HalfScreen = Dimensions.get('screen').width / 2 - 15,
}
