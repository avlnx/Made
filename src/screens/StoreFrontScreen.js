import React from 'react';
import {
  Container,
  Content,
} from 'native-base';
import {connect} from 'react-redux';
import actions from '../reducers/actions';
import firebase from 'react-native-firebase';
import {MadeLogo} from '../components/common';
import {StoreProductList, CartWidget} from '../components';

class StoreFrontScreen extends React.Component {

  constructor() {
    super();
    this.db = firebase.firestore();
  }

  componentWillMount() {
    const uid = firebase.auth().currentUser.uid;
    const {dispatch, activeStore} = this.props;

    // Get and listen to changes to the catalog
    const catalog = 'made';
    this.unsubscribeProducts = this.db.collection('catalog').
        doc(catalog).
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
          dispatch(actions.stores.updateProductsInStock());
        });

    // Get and listen to changes to the active store (like inventory)
    this.unsubscribeStore = this.db.collection('users').
        doc(uid).
        collection('stores').
        doc(activeStore.id).
        onSnapshot(function(doc) {
          let data = doc.data();
          data.id = doc.id;
          dispatch(actions.stores.setActiveStore(data));  // only update redux
          // update inventory (productsInStock)
          dispatch(actions.stores.updateProductsInStock());
        });
  }

  componentWillUnmount() {
    // Stop listening to changes
    this.unsubscribeStore();
    this.unsubscribeProducts();
  }

  render() {
    return (
        <Container>
          <MadeLogo/>
          <Content>
            <StoreProductList/>
          </Content>
          <CartWidget/>
        </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  activeStore: state.stores.activeStore,
  productListInStock: state.stores.productListInStock,
});

StoreFrontScreen = connect(mapStateToProps)(StoreFrontScreen);

export {StoreFrontScreen};