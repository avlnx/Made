import React from 'react';
import {
  Container,
  Content,
  H1,
  H2,
  H3,
  Button,
  Text,
  Footer,
  FooterTab,
  Icon,
  View,
} from 'native-base';
import actions from '../reducers/actions';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';
import {UserHeaderTitle, FooterLogout} from '../components/common';

class OnboardingScreen extends React.Component {

  static navigationOptions = {
    headerTitle: <UserHeaderTitle
        title={'Vamos configurar seu primeiro ponto de vendas'}/>,
  };

  render() {
    return (
        <Container>
          <View style={{
            flex: 1,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <H1>Escolha um apelido para o seu ponto de vendas</H1>
            <Button
                onPress={() => this.props.navigation.navigate('NewPOS')}
                iconRight
                block
            >
              <Text>Cadastrar meu primeiro ponto de vendas</Text>
              <Icon name='add'/>
            </Button>
          </View>
          <FooterLogout/>
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