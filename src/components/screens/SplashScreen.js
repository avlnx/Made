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

class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
        <Container>
          <View style={{flex: 1, padding: 10}}>
            <View style={{flex: 4, justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', fontSize: 92}}>HERMES</Text>
              <Text style={{textAlign: 'center', fontSize: 36}}>A primeira
                solução completa de self-checkout orgulhosamente
                brasileira.</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Button block iconRight
                      onPress={() => this.props.navigation.navigate('Login')}
              >
                <Text>Vamos Começar</Text>
                <Icon name='arrow-forward'/>
              </Button>
            </View>
          </View>
        </Container>
    );
  }
}

export {SplashScreen};