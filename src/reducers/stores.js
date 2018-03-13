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

// let cart = {
//   'PnQEwlAbzFGQt9FCzhtv': 1,
//   'kotEfz2Ziq7FxtbFRQZb': 2,
// };

const initialCartState = {
  totalQuantity: 0,
  totalPrice: 0,
};

const initialState = {
  storeList: [],
  activeStore: null,//'lPTYFNdFKQrNwOWfwuDU',  // TODO: set to null and persist state
  productList: [],
  productListInStock: [],
  cart: initialCartState,
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
    case types.UPDATE_CATALOG:
      return {
        ...state,
        catalog: action.payload,
      };
    case types.UPDATE_PRODUCTS_IN_STOCK:
      return {
        ...state,
        productList: action.payload,
      };
    case types.SET_PRODUCTS_IN_STOCK:
      return {
        ...state,
        productListInStock: action.payload,
      };
    case types.UPDATE_PRODUCT_QUANTITY_IN_CART:
      // Get old quantity for product in payload and increment/decrement
      // also update totalQuantity and totalPrice. You can assume decrement actions
      // won't be dispatched when an item has 0 items in cart
      let productId = action.payload.product.id;
      let productPrice = parseFloat(action.payload.product.publicPrice);
      let oldQuantity = state.cart[productId] ? state.cart[productId] : 0;  // either a already set qtt or 0
      let oldTotalQuantity = state.cart.totalQuantity;
      let oldTotalPrice = parseFloat(state.cart.totalPrice);

      // if we are incrementing the factor will be one and we will increment
      // the quantities and add a positive amount to the totalPrice. Otherwise
      // we will decrement the quantities and add a negative amount to the
      // totalPrice
      let factor = 1;
      if (action.payload.operation !== '+') {
        factor = -1;
      }

      let newQuantity = oldQuantity + factor;
      let newTotalQuantity = oldTotalQuantity + factor;
      // arithmetic fix for javascript float operations. Curious? See this article:
      // https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
      let newTotalPrice = (oldTotalPrice + (productPrice * factor)).toFixed(2);

      return {
        ...state,
        cart: Object.assign({}, state.cart, {
          [productId]: newQuantity,
          totalQuantity: newTotalQuantity,
          totalPrice: newTotalPrice,
        }),
      };
    case types.CLEAR_CART:
      return {
        ...state,
        cart: initialCartState,
      };
    default:
      return state;
  }
}
