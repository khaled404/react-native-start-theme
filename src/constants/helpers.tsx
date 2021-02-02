import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';

export enum AsyncKeys {
  IS_LOGIN = 'IS_LOGIN',
  USER_DATA = 'USER_DATA',
}
export class PersistConfig {
  key: string;
  storage: import('@react-native-community/async-storage').AsyncStorageStatic;
  whitelist?: any;
  constructor(key: string, ...whitelist: any) {
    this.key = key;
    this.storage = AsyncStorage;
    this.whitelist = [...whitelist];
  }
}

export const saveItem = async (key: string, data: object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.log(error.message);
  }
  return false;
};

export const getItem = async (key: string) => {
  try {
    const retrievedItem: any = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return null;
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.log(error.message);
  }
  return false;
};

export const clear = async () => {
  await AsyncStorage.clear();
};

export const paginationConfig = [
  Platform.OS === 'ios'
    ? {
        onEndReachedThreshold: 0,
      }
    : {onEndThreshold: 0},
];
