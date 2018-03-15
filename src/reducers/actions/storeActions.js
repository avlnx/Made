import * as types from './actionTypes';
import actions from './index';
import firebase from 'react-native-firebase';

const stores = {
  updateStores: (payload) => {
    return {type: types.UPDATE_STORES, payload: payload};
  },
  activateStore: (payload) => {
    // The purpose of this action is to update the store in Firebase
    // When that is done, we call the action tha takes care of updating redux
    // with the new activeStore setActiveStore
    return function(dispatch) {
      dispatch(actions.ui.startLoading('Carregando sua loja')); //TODO: remove from redux
      firebase.firestore().
          collection('users').
          doc(firebase.auth().currentUser.uid).
          collection('stores').
          doc(payload.store.id).
          update(
              // TODO: change this to true when we setup persistence. Right now we are
              // allowing stores to be opened in more than one device (hence the isActive
              // set to false below, when it should be true. Just so we can keep testing
              // without having to reset to false in firebase all the time. This needs
              // to be fixed before production though. The state prop activeStore needs
              // to be persisted for this to work.
              {isActive: false},
          ).
          then(function() {
            // Update redux and set this store as active
            dispatch(actions.ui.stopLoading());
            dispatch(actions.stores.setActiveStore(payload.store));
            payload.navigation.navigate('Store');
          });
    };
  },
  setActiveStore: (payload) => {
    // This action actually updates redux. It is only called from the firebase
    // action activateStore. I don't see why you would call this action directly
    return {type: types.SET_ACTIVE_STORE, payload: payload};
  },
  loadCatalog: () => {
    return function(dispatch, getState) {
      return firebase.firestore().collection('catalog').
          doc('made').
          collection('products').
          onSnapshot(function(querySnapshot) {
            let products = [];
            querySnapshot.forEach(function(doc) {
              // put full catalog in redux
              let data = doc.data();
              data.id = doc.id;
              products.push(data);
            });
            // update products in redux
            dispatch(actions.stores.updateCatalog(products));
            if (getState().stores.activeStore) {
              // If there's a store active update the products in stock for the
              // active store and reset the cart
              dispatch(actions.stores.updateProductsInStock());
              // Reset cart, prices might have changed which would cause inconsistencies
              dispatch(actions.stores.clearCart());
            }
          });
    }
  },
  updateCatalog: (payload) => {
    // This action updates the catalog, it set the 'catalog' store variable to
    // be used in the action below (updateProductsInStock)
    return {type: types.UPDATE_CATALOG, payload: payload};
  },
  updateProductsInStock: () => {
    return function(dispatch, getState) {
      let productListInStock = [];
      let productList = getState().stores.catalog;
      let inventory = getState().stores.activeStore.inventory;
      productList.forEach(function(product) {
        if (inventory[product.id] && inventory[product.id] > 0) {
          // product exists in inventory and has a proper quantity
          product['quantity'] = inventory[product.id];
          productListInStock.push(product);
        }
      });
      dispatch(actions.stores.setProductsInStock(productListInStock));
    }
  },
  setProductsInStock: (payload) => {
    return {type: types.SET_PRODUCTS_IN_STOCK, payload: payload};
  },
  updateProductQuantityInCart: (payload) => {
    return {type: types.UPDATE_PRODUCT_QUANTITY_IN_CART, payload: payload}
  },
  clearCart: () => {
    return {type: types.CLEAR_CART}
  },
};

export {stores};