import React, {Component} from 'react';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';
import {Container} from 'native-base';
import {Loading} from '../components/common';
import {StoreConfigForm} from '../components';

class StoreConfigScreen extends Component {
  constructor() {
    super();

    // set initial store info
    this.state = {
      nickname: null,
      loadingMessage: 'Carregando dados dos produtos',
      storesInventory: null,
    };

    this.store = null;

    // firebase instance
    this.db = firebase.firestore();
  }

  componentWillMount() {
    // Get store info
    const {params} = this.props.navigation.state;
    const storeId = params ? params.storeId : null;
    const {stores} = this.props;
    this.store = (stores.filter((store) => {
      return store.id === storeId;
    })).shift();
    // Set initial store info
    this.setState({nickname: this.store.nickname});
  }

  componentDidMount() {
    if (this.props.catalog) {
      // add the product info to the inventory
      let storesInventory = [];
      let that = this;
      Object.keys(this.store.inventory).forEach(function(key, index) {
        // key: the name of the object key
        let productTitle = that.props.catalog.filter((product) => {
          return product.id === key;
        }).shift().title;
        storesInventory.push({
          quantity: that.store.inventory[key],
          title: productTitle,
          id: key,
        });
      });
      this.setState({storesInventory});
    }
    // stop loading
    this.setState({loadingMessage: null});
  }

  updateNicknameInput(nickname) {
    this.setState({nickname});
  }

  updateQuantityForProduct(product, operation) {
    let productId = product.id;
    let factor = operation === '+' ? +1 : -1;

    let newStoresInventory = [];
    this.state.storesInventory.forEach((item) => {
      if (item.id === productId) item.quantity = item.quantity + factor;
      newStoresInventory.push(item);
    });

    this.setState({
      storesInventory: newStoresInventory,
    });
  }

  saveStoreData() {
    let uid = firebase.auth().currentUser.uid;
    let storeRef = this.db.collection('users').
        doc(uid).
        collection('stores').
        doc(this.store.id);

    // Set new inventory for this store
    this.setState({loadingMessage: 'Salvando dados da sua loja'});
    let that = this;
    let strippedInventory = {};
    this.state.storesInventory.forEach((product) => {
      strippedInventory[product.id] = product.quantity;
    });
    storeRef.update({
      inventory: strippedInventory,
      nickname: this.state.nickname,
    }).then(function() {
      console.log('Document successfully updated!');
      // stop loading
      that.setState({loadingMessage: null});
      // all is well, redirect back to Dashboard
      that.props.navigation.goBack();
    }).catch(function(error) {
      // The document probably doesn't exist.
      that.setState({loadingMessage: null});
      alert(error);
    });
  }

  render() {
    if (this.state.loadingMessage) return <Loading
        message={this.state.loadingMessage}/>;

    return (
        <Container>
          <StoreConfigForm
              updateQuantityForProduct={this.updateQuantityForProduct.bind(
                  this)}
              nickname={this.state.nickname}
              data={this.state.storesInventory}
              saveAction={this.saveStoreData.bind(this)}
              cancelAction={this.props.navigation.goBack}
          />
        </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  stores: state.stores.storeList,
  catalog: state.stores.catalog,
});

StoreConfigScreen = connect(mapStateToProps)(StoreConfigScreen);
export {StoreConfigScreen};