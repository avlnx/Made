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
    const uid = firebase.auth().currentUser.uid;
    const {dispatch} = this.props;
    // Get and listen to changes to list of stores for the currently logged in user
    this.unsubscribeStores = this.db.collection('users').doc(uid).collection('stores')
    .onSnapshot(function(querySnapshot) {
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
    console.log(store);
    const {uid} = firebase.auth().currentUser;
    const {dispatch} = this.props;
    const that = this;
    dispatch(actions.ui.startLoading());
    // TODO: make a thunk
    // Set store as active in firebase
    this.db.collection('users').doc(uid).collection('stores').doc(store.id).update(
        {isActive: true}
    ).then(function(){
      // Update redux and set this store as active
      dispatch(actions.stores.activateStore(store.id));
      dispatch(actions.ui.stopLoading());
    });
  }

  render() {
    const {stores} = this.props;
    return (
        <Container>
          <MadeHeader title={'Dashboard'}/>
          <Content>
            <StoreList items={stores} actionActivate={this.activateStore.bind(this)}/>
          </Content>
        </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  stores: state.stores.storeList
});

DashboardScreen = connect(mapStateToProps)(DashboardScreen);

export {DashboardScreen};