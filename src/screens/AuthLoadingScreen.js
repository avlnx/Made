import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Loading} from '../components/common';
import actions from '../reducers/actions';
import firebase from 'react-native-firebase';

class AuthLoadingScreen extends Component {

  componentDidMount() {
    const {dispatch} = this.props;

    // Start loading and get login state
    // dispatch(actions.ui.startLoading('Estamos abrindo sua loja...'));

    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      // dispatch(actions.ui.stopLoading());  // finish loading
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(user ? 'App' : 'Auth');
    });

  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    const {loadingMessage} = this.props;
    return(
        <Loading message={'Estamos abrindo sua loja...'} />
    );
  }
}

const mapStateToProps = (state) => ({
  loadingMessage: state.ui.loadingMessage
});

AuthLoadingScreen = connect(mapStateToProps)(AuthLoadingScreen);
export {AuthLoadingScreen};