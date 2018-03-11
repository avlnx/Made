import * as types from './actionTypes';

const stores = {
  updateStores: (payload) => {
    return {type: types.UPDATE_STORES, payload: payload};
  },
  activateStore: (payload) => {
    return {type: types.ACTIVATE_STORE, payload: payload};
  },
};

export {stores};