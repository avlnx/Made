import React from 'react';
import {
  Container,
  Content,
  H1,
  H2,
  Button,
  Text,
  Icon,
  View,
} from 'native-base';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';

import {Hero} from '../components/common';
import {LoginForm} from '../components/LoginForm';
import actions from '../reducers/actions';

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      lostPasswordMode: false,
    };
  }

  loginUser() {
    const {email, password} = this.state;
    const {dispatch} = this.props;
    dispatch(actions.ui.startLoading());
    firebase.auth().
        signInAndRetrieveDataWithEmailAndPassword(email, password).
        catch((e) => {
          alert(e);
          dispatch(actions.ui.stopLoading());
        }).
        then((user) => {
          dispatch(actions.ui.stopLoading());
        });
  }

  updateUserEmailInput(email) {
    this.setState({email});
  }

  updateUserPasswordInput(password) {
    this.setState({password});
  }

  sendPasswordRecoveryEmail() {
    const {dispatch} = this.props;
    if(!this.state.email) {
      alert("Você precisa preencher o campo email.");
    }
    dispatch(actions.auth.sendRecoveryPassword(this.state.email));
  }

  toggleLostPasswordMode() {
    this.setState({lostPasswordMode: !this.state.lostPasswordMode});
  }

  render() {
    return (
        <Container>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, padding: 30}}>
              <Hero />
            </View>
            <View style={{flex: 1}}>
              <LoginForm currentEmail={this.state.email}
                         currentPassword={this.state.password}
                         loginUserAction={this.loginUser.bind(this)}
                         updateUserEmailInput={this.updateUserEmailInput.bind(this)}
                         updateUserPasswordInput={this.updateUserPasswordInput.bind(this)}
              toggleLostPasswordModeAction={this.toggleLostPasswordMode.bind(this)}
              sendPasswordRecoveryEmailAction={this.sendPasswordRecoveryEmail.bind(this)}
              lostPasswordMode={this.state.lostPasswordMode}/>
            </View>
          </View>
        </Container>
    );
  }
}

WelcomeScreen = connect(() => ({}))(WelcomeScreen);
export {WelcomeScreen};