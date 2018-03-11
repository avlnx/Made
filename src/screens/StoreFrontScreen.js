import React from 'react';
import {Image, FlatList, Dimensions, StyleSheet} from 'react-native';
import {
  Container,
  Content,
  View,
  Text,
  List,
  ListItem,
  Card,
  CardItem,
  H1,
  Left,
  Body,
  Right,
  H2,
  H3,
  Button,
  Icon
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {getResetAndNavigateActionTo} from '../navigators/index';
import {connect} from 'react-redux';
import actions from '../reducers/actions';
import firebase from 'react-native-firebase';
import {MadeLogo} from '../components/common';

class StoreFrontScreen extends React.Component {

  // resetAndNavigate(routeName) {
  //   const action = getResetAndNavigateActionTo(routeName);
  //   this.props.navigation.dispatch(action);
  // }
  constructor() {
    super();
    this.db = firebase.firestore();
  }

  componentWillMount() {
    const uid = firebase.auth().currentUser.uid;
    const {dispatch, activeStore} = this.props;

    // Get and listen to changes to the catalog
    const catalog = 'made';
    this.unsubscribeProducts = this.db.collection('catalog').
        doc(catalog).
        collection('products').
        onSnapshot(function(querySnapshot) {
          let products = [];
          querySnapshot.forEach(function(doc) {
            // put full catalog in redux
            let data = doc.data();
            data.id = doc.id;
            products.push(data);
          });
          // update products in redux
          dispatch(actions.stores.updateProducts(products));
          dispatch(actions.stores.updateProductsInStock());
        });

    // Get and listen to changes to the active store (like inventory)
    this.unsubscribeStore = this.db.collection('users').
        doc(uid).
        collection('stores').
        doc(activeStore.id).
        onSnapshot(function(doc) {
          let data = doc.data();
          data.id = doc.id;
          dispatch(actions.stores.setActiveStore(data));  // only update redux
          // update inventory (productsInStock)
          dispatch(actions.stores.updateProductsInStock());
        });
  }

  componentWillUnmount() {
    // Stop listening to changes
    this.unsubscribeStore();
    this.unsubscribeProducts();
  }

  render() {
    const {activeStore, productListInStock} = this.props;
    const numColumns = 2;
    const itemMargin = 15;
    const size = (Dimensions.get('window').width - (itemMargin * 4)) / numColumns;
    const styles = StyleSheet.create({
      itemContainer: {
        width: size,
        height: 400,
        margin: itemMargin,
      },
      item: {
        flex: 1,
        // margin: 20,
      },
    });
    return (
        <Container>
          <Content>
            <MadeLogo/>
            <FlatList
                data={productListInStock}
                numColumns={numColumns}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                    <View style={styles.itemContainer}>
                      <Card style={styles.item}>
                        <CardItem cardBody>
                          <Image source={{uri: item.image}}
                                 style={{height: 250, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                          <Body style={{flex: 2}}>
                          <H3>{item.title}</H3>
                          {/*<Text note>{item.description}</Text>*/}
                          </Body>
                          <Right style={{flex: 1}}>
                            <Text style={{
                              fontSize: 24,
                              fontWeight: 'bold',
                            }}>R$ {item.publicPrice}</Text>
                          </Right>
                        </CardItem>
                        <CardItem style={{justifyContent: 'flex-end'}}>
                          <Button transparent small>
                            <Text>Mais informações</Text>
                          </Button>
                          <Button style={{marginRight: 10}}>
                            <Icon name='remove'/>
                          </Button>
                          <Button>
                            <Icon name='add'/>
                          </Button>
                        </CardItem>
                      </Card>
                    </View>
                }>
            </FlatList>
          </Content>
        </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  activeStore: state.stores.activeStore,
  productListInStock: state.stores.productListInStock,
});

StoreFrontScreen = connect(mapStateToProps)(StoreFrontScreen);

export {StoreFrontScreen};