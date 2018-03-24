import React from 'react';
import {Container, Content} from 'native-base';
import actions from '../reducers/actions';
import {StoreList} from '../components';
import {Loading} from '../components/common';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';

class DashboardScreen extends React.Component {

  constructor() {
    super();
    // get a db reference
    this.db = firebase.firestore();
    this.state = {
      loadingMessage: null,
    }
  }

  componentWillMount() {
    // If a store is active load store stack
    const {activeStore} = this.props;
    if (activeStore) this.props.navigation.navigate('Store');

    const uid = firebase.auth().currentUser.uid;
    const {dispatch} = this.props;
    // Get and listen to changes to list of stores for the currently logged in user
    this.unsubscribeStores = this.db.collection('users').
        doc(uid).
        collection('stores').
        onSnapshot(function(querySnapshot) {
          let stores = [];
          querySnapshot.forEach(function(doc) {
            let data = doc.data();
            data.id = doc.id;
            stores.push(data);
          });
          // update stores in redux
          dispatch(actions.stores.updateStores(stores));
        });

    // Load and listen to changes to the catalog
    this.unsubscribeCatalog = dispatch(actions.stores.loadCatalog());

    // Set a param to show the logout button on the right
    this.props.navigation.setParams({headerRightButton: 'logOut'});

  }

  componentWillUnmount() {
    // Stop listening to changes
    this.unsubscribeStores();
    this.unsubscribeCatalog();
  }

  activateStore(store) {
    const {dispatch, navigation} = this.props;
    dispatch(actions.stores.activateStore({store, navigation}));
  }

  storeConfigAction(store) {
    this.props.navigation.navigate('StoreConfig', {
      storeId: store.id,
    });
  }

  deactivateAllStores() {
    this.setState({loadingMessage: 'Desativando todas as lojas'});
    const uid = firebase.auth().currentUser.uid;
    // Get a new write batch
    let batch = firebase.firestore().batch();

    this.props.stores.forEach((value) => {
      storeId = value.id;
      let storeRef = firebase.firestore().
          collection('users').
          doc(uid).
          collection('stores').
          doc(storeId);
      batch.update(storeRef, {isActive: false});
    }, this);

    // Commit the batch
    batch.commit().then(() => {
      // console.log('Stores deactivated');
    }).catch((e) => {
      alert('ERROR: ' + e);
    }).finally(() => {
      this.setState({loadingMessage: null});
    })
  }

  render() {
    const {stores} = this.props;
    if (this.state.loadingMessage) return <Loading message={this.state.loadingMessage} />;
    return (
        <Container>
          <Content>
            <StoreList items={stores}
                       actionActivate={this.activateStore.bind(this)}
                       storeConfigAction={this.storeConfigAction.bind(this)}
                       deactivateAllStoresAction={this.deactivateAllStores.bind(
                           this)}/>
          </Content>
        </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  stores: state.stores.storeList,
  activeStore: state.stores.activeStore,
});

DashboardScreen = connect(mapStateToProps)(DashboardScreen);

export {DashboardScreen};