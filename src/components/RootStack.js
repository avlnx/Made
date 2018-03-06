import React, {Component} from 'react';
import firebase from 'react-native-firebase';

import {Spinner} from './common';
import {LoggedInStack, LoggedOutStack} from '../navigators';
import {actions} from '../actions/actions';
import {connect} from 'react-redux';
import {LoginScreen} from '../screens';

class RootStack extends Component {
  componentWillMount() {
    const {dispatch} = this.props;

    // Start loading and get login state
    dispatch(actions.startLoading());

    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      // TODO: Here be dragons
      dispatch(actions.stopLoading());  // finish loading
      let authAction = actions.logOut();
      if (user) authAction = actions.logIn();
      dispatch(authAction);
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    const {loading, isLoggedIn, triedToLogin} = this.props;

    // The application is initialising
    if (loading) return <Spinner/>;

    if (isLoggedIn) return <LoggedInStack />;

    if (!isLoggedIn && triedToLogin) return <LoginScreen/>;  // no need for welcome screen

    return <LoggedOutStack/>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.global.loading,
  isLoggedIn: state.auth.isLoggedIn,
  triedToLogin: state.auth.triedToLogin,
});

export default connect(mapStateToProps)(RootStack);