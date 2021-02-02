import {Dispatch} from 'redux';
import {ActionType} from './actions';

export const loadApp = () => ({
  type: ActionType.APP_LOADED,
});
export const toggleLoader = (payload: boolean) => ({
  type: ActionType.TOGGLE_LOADER,
  payload,
});

export const initializApp = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      dispatch(loadApp());
    } catch (error) {
      console.log(error);
    }
  };
};
