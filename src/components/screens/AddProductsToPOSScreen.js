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
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {getResetAndNavigateActionTo} from '../../navigators';

class AddProductsToPOSScreen extends React.Component {
  static navigationOptions = {
    title: 'Adicionando Produtos ao POS',
  };

  resetAndNavigate(routeName) {
    const action = getResetAndNavigateActionTo(routeName);
    this.props.navigation.dispatch(action);
  }

  render() {
    return (
        <Container>
          <View style={{flex: 1, padding: 10}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <H2 style={{fontSize: 42, lineHeight: 42}}>Adicionando Produtos ao POS</H2>
            </View>
            <View style={{flex: 4, flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Form>
                  <Item floatingLabel>
                    <Label>Título</Label>
                    <Input/>
                  </Item>
                  <Text style={{marginLeft: 15}}>O título do seu produto.</Text>
                  <Item floatingLabel last>
                    <Label>Descrição</Label>
                    <Input multiline numberOfLines={5} />
                  </Item>
                  <Text style={{marginLeft: 15}}>Uma breve descrição do seu produto.</Text>
                </Form>
              </View>
              <View style={{flex: 1}}>
                <Form>
                  <Item floatingLabel>
                    <Label>Preço</Label>
                    <Input/>
                  </Item>
                  <Text style={{marginLeft: 15}}>O preço unitário do produto.</Text>
                  <Item floatingLabel last>
                    <Label>Quantidade</Label>
                    <Input />
                  </Item>
                  <Text style={{marginLeft: 15}}>Estoque inicial desse produto.</Text>
                </Form>
              </View>
            </View>
            <View style={{flex: 1}}>
              <Button
                  block
                  iconRight
                  onPress={() => this.resetAndNavigate(
                      'LoggedInStack')}
                  style={{marginTop: 10}}
              >
                <Text>Salvar Novo Produto</Text>
                <Icon name='checkmark-circle'/>
              </Button>
            </View>
          </View>
        </Container>
    );
  }
}

export {AddProductsToPOSScreen};