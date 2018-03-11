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
    // Get and listen to changes to the active store (like inventory)
    this.unsubscribeStore = this.db.collection('users').
        doc(uid).
        collection('stores').
        doc(activeStore.id).
        onSnapshot(function(doc) {
          let data = doc.data();
          data.id = doc.id;
          dispatch(actions.stores.setActiveStore(data));  // only update redux
          // TODO: update products - inventory, maybe add inventory to redux?
          // or maybe update products here too, add a thunk to update products

        });

    // Get and listen to changes to the catalog
    const catalog = 'made';
    this.unsubscribeProducts = this.db.collection('catalog').
        doc(catalog).
        collection('products').
        onSnapshot(function(querySnapshot) {
          let products = [];
          querySnapshot.forEach(function(doc) {
            // only add to redux if product available in this store.
            // As in, if the property exists and the quantity is not 0
            let productQuantity = activeStore.inventory[doc.id];
            if (productQuantity && productQuantity > 0) {
              let data = doc.data();
              data.id = doc.id;
              products.push(data);
            }
          });
          // update products in redux
          dispatch(actions.stores.updateProducts(products));
        });
  }

  componentWillUnmount() {
    // Stop listening to changes
    this.unsubscribeStore();
    this.unsubscribeProducts();
  }

  render() {
    const {activeStore, productList} = this.props;
    return (
        <Container>
          <Content>
            <H1 style={{
              alignSelf: 'center',
              padding: 20,
              color: 'green',
            }}>MADE</H1>
            <List dataArray={productList}
                  renderRow={(product) =>
                      <Card>
                        <CardItem cardBody>
                          <Image source={{uri: product.image}}
                                 style={{height: 200, width: null, flex: 1}}/>
                          {/*<Text>{item.image}</Text>*/}
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
                  }}>
            </List>
          </Content>
        </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  activeStore: state.stores.activeStore,
  productList: state.stores.productList,
});

StoreFrontScreen = connect(mapStateToProps)(StoreFrontScreen);

export {StoreFrontScreen};