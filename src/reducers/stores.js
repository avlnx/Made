import * as types from './actions/actionTypes';

const initialState = {
  storeList: []
};

export default function stores(state = initialState, action = {}) {
  switch (action.type) {
    case types.UPDATE_STORES:
      return {
        ...state,
        storeList: action.payload
      };
    default:
      return state;
  }
}
