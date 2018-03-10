import * as types from './actionTypes';

const stores = {
  updateStores: (payload) => {
    return {type: types.UPDATE_STORES, payload: payload};
  },
};

export {stores};