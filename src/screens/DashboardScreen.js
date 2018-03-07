import React from 'react';
import {Container, Content, H1, H2, Button, Text, View} from 'native-base';
import actions from '../reducers/actions';

class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
  };

  render() {
    return (
        <Container>
          <View style={{padding: 10}}>
            <H2>Seus pontos de venda</H2>
            <Button
                transparent
                onPress={() => actions.auth.logOut()}
            >
              <Text>Sign Out</Text>
            </Button>
          </View>
        </Container>
    );
  }
}

export {DashboardScreen};