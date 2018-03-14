import React from 'react';
import {Container, Content, H1, H2, Button, Text, View} from 'native-base';
import actions from '../reducers/actions';
import {MadeHeader} from '../components/common';
import {StoreList} from '../components';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';

class DashboardScreen extends React.Component {

  constructor() {
    super();
    // get a db reference
    this.db = firebase.firestore();
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
  }

  componentWillUnmount() {
    // Stop listening to changes
    this.unsubscribeStores();
  }

  activateStore(store) {
    const {dispatch, navigation} = this.props;
    dispatch(actions.stores.activateStore({store, navigation}));
  }

  storeConfigAction(store) {
    this.props.navigation.navigate('StoreConfig', {
      storeId: store.id
    });
  }

  render() {
    const {stores} = this.props;
    return (
        <Container>
          <MadeHeader title={'Dashboard'} navigation={this.props.navigation}/>
          <Content>
            <StoreList items={stores}
                       actionActivate={this.activateStore.bind(this)}
                       storeConfigAction={this.storeConfigAction.bind(this)}/>
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