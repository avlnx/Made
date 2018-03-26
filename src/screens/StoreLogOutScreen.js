import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, Icon, H1, Container} from 'native-base';
import {LoginForm} from '../components';
import {Loading, MadeHeaderLogo} from '../components/common';
import firebase from 'react-native-firebase';
import actions from '../reducers/actions';
import {connect} from 'react-redux';

class StoreLogOutScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      loadingMessage: null,
    };
  }

  confirmCredentials() {
    const {activeStore, navigation, dispatch} = this.props;

    const {email, password} = this.state;
    this.setState({loadingMessage: 'Verificando suas credenciais...'});
    if (!email || !password) {
      alert('Você precisa preencher seu email e senha');
      this.setState({loadingMessage: null});
      return;
    }

    let user = firebase.auth().currentUser;
    let credential = firebase.auth.
        EmailAuthProvider.
        credential(this.state.email, this.state.password);

    user.reauthenticateAndRetrieveDataWithCredential(credential).
        catch((e) => {
          this.setState({loadingMessage: null});
          alert('Authentication failed ' + e);
        }).
        then((user) => {
          // authenticated, deactivate store
          dispatch(actions.stores.activateStore(
              {
                store: activeStore,
                navigation,
                disableStore: true
              }));
        });
  }

  updateUserEmailInput(email) {
    this.setState({email});
  }

  updateUserPasswordInput(password) {
    this.setState({password});
  }

  render() {
    if (this.state.loadingMessage) return <Loading
        message={this.state.loadingMessage}/>;
    return (
        <Container style={styles.container}>
          <View style={styles.column}>
            <MadeHeaderLogo style={styles.logo}/>
          </View>
          <View style={styles.column}>
            <LoginForm currentEmail={this.state.email}
                       currentPassword={this.state.password}
                       loginUserAction={this.confirmCredentials.bind(this)}
                       updateUserEmailInput={this.updateUserEmailInput.bind(
                           this)}
                       updateUserPasswordInput={this.updateUserPasswordInput.bind(
                           this)}
                       toggleLostPasswordModeAction={undefined}
                       sendPasswordRecoveryEmailAction={undefined}
                       lostPasswordMode={undefined}
                       loginMessage={'Confirme suas credenciais para fechar a loja'}/>
            <Button iconLeft primary light block small
                    onPress={() => this.props.navigation.goBack()}>
              <Icon name={'arrow-back'}/>
              <Text>Cancelar</Text>
            </Button>
          </View>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  column: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {height: 150, width: 300, alignSelf: 'center'},
});

const mapStateToProps = (state) => ({
  activeStore: state.stores.activeStore,
});

StoreLogOutScreen = connect(mapStateToProps)(StoreLogOutScreen);
export {StoreLogOutScreen};