import {IReduser} from '../../constants/interfaces';
import {ActionType} from '../actions/actions';

const initialState = {
  userData: {},
  isLogin: false,
};
export default (state = initialState, action: IReduser) => {
  switch (action.type) {
  }
  return state;
};
