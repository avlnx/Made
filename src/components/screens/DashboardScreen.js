import React from 'react';
import {Container, Content, H1, H2, Button, Text} from 'native-base';
// import {getResetAndNavigateActionTo} from '../../navigators';

class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
  };

  // resetAndNavigate(routeName) {
  //   const action = getResetAndNavigateActionTo(routeName);
  //   this.props.navigation.dispatch(action);
  // }

  render() {
    return (
        <Container>
          <Content padder>
            <H2>Seus pontos de venda</H2>
            <Button
                onPress={() => this.resetAndNavigate('LoggedOutStack')}
            >
              <Text>Sign Out</Text>
            </Button>
          </Content>
        </Container>
    );
  }
}

export {DashboardScreen};