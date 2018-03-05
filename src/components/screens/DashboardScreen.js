import React from 'react';
import {Container, Content, H1, H2, Button, Text, View} from 'native-base';
import {getResetAndNavigateActionTo} from '../../navigators';

class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
  };

  resetAndNavigate(routeName) {
    const action = getResetAndNavigateActionTo(routeName);
    this.props.navigation.dispatch(action);
  }

  render() {
    return (
        <Container>
          <View style={{padding: 10}}>
            <H2>Seus pontos de venda</H2>
            <Button
                transparent
                onPress={() => this.resetAndNavigate('LoggedOutStack')}
            >
              <Text>Sign Out</Text>
            </Button>
          </View>
        </Container>
    );
  }
}

export {DashboardScreen};