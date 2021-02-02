/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, I18nManager} from 'react-native';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import FlashMessage from 'react-native-flash-message';
import ar from './src/localization/ar';
import en from './src/localization/en';
import {Fonts, ScreenOptions} from './src/constants/styleConstants';
import AppInitializer from './src/screens/AppInitializer';
const {isRTL, forceRTL, allowRTL} = I18nManager;

i18n.use(initReactI18next).init({
  resources: {
    ar: {
      translation: ar,
    },
    en: {
      translation: en,
    },
  },
  lng: isRTL ? 'ar' : 'en',
  fallbackLng: isRTL ? 'ar' : 'en',
  interpolation: {
    escapeValue: false,
  },
});
const App = () => {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <AppInitializer />
      <FlashMessage
        position="top"
        hideOnPress={true}
        style={{paddingTop: ScreenOptions.StatusBarHeight}}
        titleStyle={{
          fontFamily: Fonts.medium,
          paddingTop: ScreenOptions.StatusBarHeight,
        }}
        textStyle={{
          fontFamily: Fonts.medium,
        }}
      />
    </>
  );
};

export default App;
