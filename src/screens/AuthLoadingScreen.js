import React, {Component} from 'react';
import {Loading} from '../components/common';
import firebase from 'react-native-firebase';

class AuthLoadingScreen extends Component {

  componentDidMount() {

    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(user ? 'App' : 'Auth');
    });

  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    return(
        <Loading message={'Estamos abrindo sua loja...'} />
    );
  }
}

export {AuthLoadingScreen};