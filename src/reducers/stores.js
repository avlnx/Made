import * as types from './actions/actionTypes';

// TODO: remove
activeStore = {
  id: 'lPTYFNdFKQrNwOWfwuDU',
  inventory:
      {
        'PnQEwlAbzFGQt9FCzhtv': 3,
        'kotEfz2Ziq7FxtbFRQZb': 15,
        'q6Za97zoNo1xy6ZTKyta': 0,
      },
  isActive: false,
  nickname: 'Easynvest',
};

const initialState = {
  storeList: [],
  activeStore: activeStore,//'lPTYFNdFKQrNwOWfwuDU',  // TODO: set to null and persist state
  productList: []
};

export default function stores(state = initialState, action = {}) {
  switch (action.type) {
    case types.UPDATE_STORES:
      return {
        ...state,
        storeList: action.payload,
      };
    case types.SET_ACTIVE_STORE:
      return {
        ...state,
        activeStore: action.payload,
      };
    case types.UPDATE_PRODUCTS:
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return state;
  }
}
