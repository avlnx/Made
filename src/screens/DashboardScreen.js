import React from 'react';
import {Container, Content, H1, H2, Button, Text, View} from 'native-base';
import actions from '../reducers/actions';
import {FullContent, MadeHeader} from '../components/common';
import {StoreList} from '../components';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';

class DashboardScreen extends React.Component {

  constructor() {
    super();
    // get a db reference
    this.db = firebase.firestore();
    this.stores = [];
  }

  componentWillMount() {
    const uid = firebase.auth().currentUser.uid;
    const {dispatch} = this.props;
    // Get and listen to changes to list of stores for the currently logged in user
    this.unsubscribeStores = this.db.collection('users').doc(uid).collection('stores')
    .onSnapshot(function(querySnapshot) {
      let stores = [];
      querySnapshot.forEach(function(doc) {
        stores.push(doc.data());
      });
      // update stores in redux
      dispatch(actions.stores.updateStores(stores));
    });
  }

  componentWillUnmount() {
    // Stop listening to changes
    this.unsubscribeStores();
  }

  render() {
    console.log('About to render stores: ', this.stores.join(', '));
    const {stores} = this.props;
    return (
        <Container>
          <MadeHeader title={'Dashboard'}/>
          <Content>
            <StoreList items={stores} />
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