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
import actions from '../reducers/actions';

class StoreConfigScreen extends Component {
  constructor() {
    super();

    // set initial store info
    this.state = {
      nickname: null,
      loadingMessage: 'Carregando dados dos produtos',
      storesInventory: null,
    };

    this.store = null;

    // firebase instance
    this.db = firebase.firestore();
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
        let productTitle = that.props.catalog.filter((product) => {
          return product.id === key;
        }).shift().title;
        storesInventory.push({
          quantity: that.store.inventory[key],
          title: productTitle,
          id: key,
        });
      });
      this.setState({storesInventory});
    }
    // stop loading
    this.setState({loadingMessage: null});
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

  saveStoreData() {
    // alert('Data saved dude');
    let uid = firebase.auth().currentUser.uid;
    let storeRef = this.db.collection('users').
        doc(uid).
        collection('stores').
        doc(this.store.id);

    // Set new inventory for this store
    this.setState({loadingMessage: 'Salvando dados da sua loja'});
    let that = this;
    let strippedInventory = {};
    this.state.storesInventory.forEach((product) => {
      strippedInventory[product.id] = product.quantity;
    });
    storeRef.update({
      inventory: strippedInventory,
      nickname: this.state.nickname,
    })
    .then(function() {
      console.log("Document successfully updated!");
      // stop loading
      that.setState({loadingMessage: null});
      // all is well, redirect back to Dashboard
      that.props.navigation.goBack();
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      that.setState({loadingMessage: null});
      alert(error);
    });
  }

  render() {
    if (this.state.loadingMessage) return <Loading
        message={this.state.loadingMessage}/>;
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
                          <Badge primary
                                 style={styles.badgeStyle}><Text
                              style={styles.badgeTextStyle}>{item.quantity}</Text></Badge>
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
            <View style={{
              justifyContent: 'center',
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
              <Button light onPress={() => this.saveStoreData()}>
                <Text>Salvar</Text>
              </Button>
              <Button iconLeft transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name={'arrow-back'}/>
                <Text>Cancelar</Text>
              </Button>
            </View>
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
    backgroundColor: '#333',
  },
  badgeTextStyle: {
    color: 'white',
    fontSize: 18,
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