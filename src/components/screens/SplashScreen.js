import React, {Component} from 'react';
import {Spinner} from 'native-base';
import {getResetAndNavigateActionTo} from '../../navigators/';
import * as authActions from '../../actions/authActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SplashScreen extends Component {
  resetAndNavigate(routeName) {
    const action = getResetAndNavigateActionTo(routeName);
    this.props.navigation.dispatch(action);
  }

  componentDidMount() {
    let route = 'LoggedOutStack';
    if (this.props.isLoggedIn) {
      // redirect to LoggedInStack if logged in
      route = 'LoggedInStack';
    }
    this.resetAndNavigate(route);
  }

  render() {
    return (
        <Spinner />
    )
  }
}

SplashScreen = connect(state => ({
      isLoggedIn: state.auth.isLoggedIn
    }),
    (dispatch) => ({
      actions: bindActionCreators(authActions, dispatch)
    })
)(SplashScreen);

export {SplashScreen};