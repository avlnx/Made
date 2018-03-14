import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Loading} from '../components/common';
import actions from '../reducers/actions';
import firebase from 'react-native-firebase';

class AuthLoadingScreen extends Component {
  componentWillMount() {
    const {dispatch} = this.props;

    // Start loading and get login state
    dispatch(actions.ui.startLoading('Estamos abrindo sua loja...'));

    // this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
    //   dispatch(actions.ui.stopLoading());  // finish loading
    //   // dispatch(actions.auth.updateUser(user));
    //   // let authAction = actions.auth.logOut();
    //   // if (user) authAction = actions.auth.logIn();
    //   // dispatch(authAction);
    //
    //   // This will switch to the App screen or Auth screen and this loading
    //   // screen will be unmounted and thrown away.
    //   this.props.navigation.navigate(user ? 'App' : 'Auth');
    // });

    // Instead of registering the firebase listener here, we just check if
    // the user is currently logged in and act accordingly. This listener will
    // be set in the app stack, since we want to be notified there when the
    // user logs out. If needed we can add the listener to the auth stack too.
    const user = firebase.auth().currentUser;
    dispatch(actions.ui.stopLoading());
    this.props.navigation.navigate(user ? 'App' : 'Auth');
  }

  // componentWillUnmount() {
  //   this.authSubscription();
  // }

  render() {
    const {loadingMessage} = this.props;
    return(
        <Loading message={loadingMessage} />
    );
  }
}

const mapStateToProps = (state) => ({
  loadingMessage: state.ui.loadingMessage
});

AuthLoadingScreen = connect(mapStateToProps)(AuthLoadingScreen);
export {AuthLoadingScreen};