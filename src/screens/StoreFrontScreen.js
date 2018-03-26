import React from 'react';
import {
  Container,
  Tab,
  Tabs,
} from 'native-base';
import {connect} from 'react-redux';
import actions from '../reducers/actions';
import firebase from 'react-native-firebase';
import {
  StoreProductList, CartWidget, CartDetails,
  BarcodeReader,
} from '../components';

class StoreFrontScreen extends React.Component {

  constructor() {
    super();
    this.db = firebase.firestore();
  }

  componentWillMount() {
    // Set a param to show the logout button on the right
    this.props.navigation.setParams({headerRightButton: 'closeStore'});
  }

  componentDidMount() {
    const uid = firebase.auth().currentUser.uid;
    const {dispatch, activeStore} = this.props;

    // Load and listen to changes to the catalog
    this.unsubscribeCatalog = dispatch(actions.stores.loadCatalog());

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
    this.unsubscribeCatalog();
  }

  render() {
    return (
        <Container>
          <Tabs>
            <Tab heading={"LISTA"}>
              <StoreProductList/>
            </Tab>
            <Tab heading={"BARCODE"}>
              <BarcodeReader/>
            </Tab>
          </Tabs>
          <CartWidget/>
          <CartDetails/>
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