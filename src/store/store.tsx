import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import settings from '../store/reducers/settings';
import {PersistConfig} from '../constants/helpers';
import auth from './reducers/auth';
const authConfig: any = new PersistConfig('auth', 'userData', 'isLogin');

const rootReducer = combineReducers({
  settings: settings,
  auth: persistReducer(authConfig, auth),
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
