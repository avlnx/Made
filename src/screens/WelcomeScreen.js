import React from 'react';
import {connect} from 'react-redux';
import actions from '../reducers/actions';
import firebase from 'react-native-firebase';
import {Container} from 'native-base';
import {Loading} from '../components/common';
import {WelcomeWrapper} from '../components';

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      lostPasswordMode: false,
      loadingMessage: null,
    };
  }

  loginUser() {
    const {email, password} = this.state;
    this.setState({loadingMessage: 'Verificando suas credenciais...'});
    if (!email || !password) {
      alert('Você precisa preencher seu email e senha');
      this.setState({loadingMessage: null});
      return;
    }
    firebase.auth().
        signInAndRetrieveDataWithEmailAndPassword(email, password).
        catch((e) => {
          alert(e);
          this.setState({loadingMessage: null});
        }).
        then((user) => {
          if (user) this.props.navigation.navigate('App');
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
    if (!this.state.email) {
      alert('Você precisa preencher o campo email.');
      return;
    }
    dispatch(actions.auth.sendRecoveryPassword(this.state.email));
  }

  toggleLostPasswordMode() {
    this.setState({lostPasswordMode: !this.state.lostPasswordMode});
  }

  render() {
    const {loadingMessage} = this.state;
    if (loadingMessage) return (<Loading message={loadingMessage}/>);
    return (
        <Container>
          <WelcomeWrapper
              currentEmail={this.state.email}
              currentPassword={this.state.password}
              loginUserAction={this.loginUser.bind(this)}
              updateUserEmailInput={this.updateUserEmailInput.bind(
                  this)}
              updateUserPasswordInput={this.updateUserPasswordInput.bind(
                  this)}
              toggleLostPasswordModeAction={this.toggleLostPasswordMode.bind(
                  this)}
              sendPasswordRecoveryEmailAction={this.sendPasswordRecoveryEmail.bind(
                  this)}
              lostPasswordMode={this.state.lostPasswordMode}
              loginMessage={'Faça login para personalizar sua experiência'}/>
        </Container>
    );
  }
}

WelcomeScreen = connect(() => ({}))(WelcomeScreen);
export {WelcomeScreen};