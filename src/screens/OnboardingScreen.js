import React from 'react';
import {
  Container,
  Content,
  H1,
  H2,
  Button,
  Text,
  Footer,
  Icon,
  View,
} from 'native-base';
import actions from '../reducers/actions';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';

class OnboardingScreen extends React.Component {

  static navigationOptions = {
    title: 'Vamos Começar',
  };

  render() {
    const {dispatch} = this.props;
    const {currentUser} = firebase.auth();

    return (
        <Container>
          <View style={{flex: 1, padding: 10}}>
            <View style={{flex: 4, justifyContent: 'center'}}>
              <H1 style={{fontSize: 64, lineHeight: 64}}>Olá {currentUser.email}!</H1>
              <H2 style={{fontSize: 42, lineHeight: 42}}>Parece que você ainda
                não criou um ponto de vendas.</H2>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Button
                  onPress={() => this.props.navigation.navigate('NewPOS')}
                  iconRight
                  block
              >
                <Text>Cadastrar meu primeiro ponto de vendas</Text>
                <Icon name='add'/>
              </Button>
              <Button
                  transparent
                  onPress={() => dispatch(actions.auth.logOut())}
                  style={{paddingTop: 10}}
              >
                <Text>Sign Out</Text>
              </Button>
            </View>
          </View>
        </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.ui.loading,
  // user: state.auth.user,
});
OnboardingScreen = connect(mapStateToProps)(OnboardingScreen);

export {OnboardingScreen};