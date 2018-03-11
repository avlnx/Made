import * as types from './actions/actionTypes';

const initialState = {
  storeList: [],
  activeStore: null,
};

export default function stores(state = initialState, action = {}) {
  switch (action.type) {
    case types.UPDATE_STORES:
      return {
        ...state,
        storeList: action.payload,
      };
    case types.ACTIVATE_STORE:
      return {
        ...state,
        activeStore: action.payload,
      };
    default:
      return state;
  }
}
