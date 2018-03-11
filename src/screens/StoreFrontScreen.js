import React from 'react';
import {Image} from 'react-native';
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
    return (
        <Container>
          <Content>
            <MadeLogo />
            <List dataArray={productListInStock}
                  renderRow={(product) =>
                      <Card style={{ width: 600}}>
                        <CardItem cardBody>
                          <Image source={{uri: product.image}}
                                 style={{height: 300, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                          <Body>
                          <H3>{product.title}</H3>
                          {/*<Text note>{item.description}</Text>*/}
                          </Body>
                          <Right>
                            <Text style={{
                              fontSize: 24,
                              fontWeight: 'bold',
                            }}>R$ {product.publicPrice}</Text>
                          </Right>
                        </CardItem>
                      </Card>
                  }
                  contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    padding: 20,
                  }}>
            </List>
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