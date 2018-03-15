import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Loading} from '../components/common';
import actions from '../reducers/actions';
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

const mapStateToProps = (state) => ({
});

AuthLoadingScreen = connect(mapStateToProps)(AuthLoadingScreen);
export {AuthLoadingScreen};