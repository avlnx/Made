import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {
  Text,
  Container,
  Content,
  Badge,
  H1,
  H2,
  Card,
  CardItem,
  Form,
  Item,
  Label,
  Input,
  Button,
  Icon,
  View,
} from 'native-base';
import firebase from 'react-native-firebase';
import {MadeHeader, Loading} from '../components/common';

class StoreConfigScreen extends Component {
  constructor() {
    super();

    // set initial store info
    this.state = {
      nickname: null,
      loading: true,
      storesInventory: null,
    };
  }

  componentWillMount() {
    // Get store info
    const {params} = this.props.navigation.state;
    const storeId = params ? params.storeId : null;
    const {stores} = this.props;
    this.store = (stores.filter((store) => {
      return store.id === storeId;
    })).shift();
    // Set initial store info
    this.setState({nickname: this.store.nickname});
  }

  componentDidMount() {
    if (this.props.catalog) {
      // add the product info to the inventory
      let storesInventory = [];
      let that = this;
      Object.keys(this.store.inventory).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        let productTitle = that.props.catalog.filter((product) => {
          return product.id === key;
        }).shift().title;
        storesInventory.push({
          quantity: that.store.inventory[key],
          title: productTitle,
          id: key,
        });
      });
      // for (let [value, key] in this.store.inventory) {
      //   storesInventory[key] = {
      //     quantity: value,
      //     title: this.props.catalog[key].title,
      //   };
      // }
      // this.store.inventory.forEach((item, key) => {
      //   storesInventory[key] = {
      //     quantity: item,
      //     title: this.props.catalog[key].title,
      //   };
      // });
      // this.storesInventory = storesInventory;
      this.setState({storesInventory});
    }
    this.setState({loading: false});
  }

  updateNicknameInput(nickname) {
    this.setState({nickname});
  }

  updateQuantityForProduct(product, operation) {
    let productId = product.id;
    let factor = operation === '+' ? +1 : -1;

    let newStoresInventory = [];
    this.state.storesInventory.forEach((item) => {
      if (item.id === productId) item.quantity = item.quantity + factor;
      newStoresInventory.push(item);
    });

    this.setState({
      storesInventory: newStoresInventory,
    });
  }

  render() {
    if (this.state.loading) return <Loading
        message={'Carregando dados dos produtos'}/>;
    return (
        <Container>
          <Content padder>
            <H1 style={styles.title}>Editando {this.state.nickname}</H1>
            <Card>
              <CardItem>
                <Form>
                  <Item>
                    <Label>Apelido da sua loja</Label>
                    <Input
                        value={this.state.nickname}
                        onChangeText={nickname => this.updateNicknameInput(
                            nickname)}
                        autoCorrect={false}/>
                  </Item>
                  <Text note>Esse valor é apenas para seu controle. Seus
                    clientes não verão o apelido da sua loja.</Text>
                </Form>
              </CardItem>
            </Card>
            <H2 style={styles.title}>Estoque da sua loja</H2>
            <Card>
              <FlatList
                  data={this.state.storesInventory}
                  keyExtractor={item => item.id}
                  renderItem={({item}) =>
                      <CardItem>
                        <View style={styles.listDataStyle}>
                          <Badge info
                                 style={styles.badgeStyle}><Text>{item.quantity}</Text></Badge>
                          <Text>{item.title}</Text>
                        </View>
                        <View style={styles.listActionsStyle}>
                          <Button icon small style={styles.removeButtonStyle}
                                  disabled={item.quantity === 0}
                                  onPress={() => this.updateQuantityForProduct(
                                      item, '-')}>
                            <Icon name={'remove'}/>
                          </Button>
                          <Button icon small
                                  onPress={() => this.updateQuantityForProduct(
                                      item, '+')}>
                            <Icon name={'add'}/>
                          </Button>
                        </View>
                      </CardItem>
                  }>
              </FlatList>
            </Card>
          </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
  },
  badgeStyle: {
    marginRight: 10,
  },
  listDataStyle: {
    flex: 4,
    flexDirection: 'row',
  },
  listActionsStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  removeButtonStyle: {
    marginRight: 10,
  },
});

const mapStateToProps = (state) => ({
  stores: state.stores.storeList,
  catalog: state.stores.catalog,
});

StoreConfigScreen = connect(mapStateToProps)(StoreConfigScreen);
export {StoreConfigScreen};