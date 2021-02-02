// @ts-nocheck
/**
 * @format
 */
import React from 'react';
import {AppRegistry, I18nManager, LogBox, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store/store';
import 'react-native-gesture-handler';
// if (!I18nManager.isRTL) {
//   I18nManager.allowRTL(true);
//   I18nManager.forceRTL(true);
//   RNRestart.Restart();
// }
LogBox.ignoreLogs(['Remote debugger']);
const RNapp = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={false}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNapp);
