import React, {Component} from 'react';
import firebase from 'react-native-firebase';

import {Spinner} from '../components/common/index';
import {LoggedInStack, LoggedOutStack} from '../navigators/index';
import actions from '../reducers/actions/index';
import {connect} from 'react-redux';
import {StoreFrontScreen} from './';

class RootStack extends Component {
  componentWillMount() {
    const {dispatch} = this.props;

    // Start loading and get login state
    dispatch(actions.ui.startLoading());

    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      dispatch(actions.ui.stopLoading());  // finish loading
      // dispatch(actions.auth.updateUser(user));
      // let authAction = actions.auth.logOut();
      // if (user) authAction = actions.auth.logIn();
      // dispatch(authAction);
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    const {loading, activeStore} = this.props;
    const {currentUser} = firebase.auth();

    // The application is initialising
    if (loading) return <Spinner/>;

    if (currentUser && !activeStore) return <LoggedInStack />;

    if (currentUser && activeStore) return <StoreFrontScreen />;

    return <LoggedOutStack/>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.ui.loading,
  activeStore: state.stores.activeStore,
});

export default connect(mapStateToProps)(RootStack);