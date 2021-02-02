import {IReduser} from '../../constants/interfaces';
import {ActionType} from '../actions/actions';

const initialState = {
  appLoaded: false,
  preloaderVisible: false,
  dashboard: {},
  sellerstore: {},
  products: [],
  sellerproduct: {},
  countries: [],
  zones: [],
};
export default (state = initialState, action: IReduser) => {
  switch (action.type) {
    case ActionType.APP_LOADED:
      return {...state, appLoaded: true};
    case ActionType.SAVE_COUNTRIES:
      return {...state, countries: action.payload};
    case ActionType.SAVE_ZONES:
      return {...state, zones: true};
    case ActionType.TOGGLE_LOADER:
      return {...state, preloaderVisible: action.payload};
    case ActionType.LOAD_SCREEN:
      return {...state, [action.payload.screen]: action.payload.data};
    case ActionType.LOAD_PRODUCTS:
      if (action.payload?.pagination?.page === '1') {
        return {
          ...state,
          products: action.payload.products,
          sellerproduct: action.payload,
        };
      }
      return {
        ...state,
        products: [...state.products, ...action.payload.products],
      };
    case ActionType.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.product_id !== action.payload,
        ),
      };
  }
  return state;
};
