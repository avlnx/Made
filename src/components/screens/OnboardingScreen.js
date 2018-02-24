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
import {getResetAndNavigateActionTo} from '../../navigators';

class OnboardingScreen extends React.Component {
  static navigationOptions = {
    title: 'Vamos Começar',
  };

  resetAndNavigate(routeName) {
    const action = getResetAndNavigateActionTo(routeName);
    this.props.navigation.dispatch(action);
  }

  render() {
    return (
        <Container>
          <View style={{flex: 1, padding: 10}}>
            <View style={{flex: 4, justifyContent: 'center'}}>
              <H1 style={{fontSize: 64, lineHeight: 64}}>Olá!</H1>
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
                  onPress={() => this.resetAndNavigate('LoggedOutStack')}
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

export {OnboardingScreen};