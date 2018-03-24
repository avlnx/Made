import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Button, Text, View, Icon} from 'native-base';
import {connect} from 'react-redux';
import {CartDetailsItem} from './';
import actions from '../reducers/actions';

class CartDetails extends Component {
  constructor() {
    super();

    this.state = {
      productsInCart: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    // const {cart, catalog} = this.props;
    const cart = nextProps.cart;  // new cart
    // Prep flatlist data
    let productsInCart = [];

    Object.keys(cart).map(key => {
      if (key !== 'totalPrice' && key !== 'totalQuantity') {
        productsInCart.push({
          quantityInCart: cart[key],
          id: key,
        });
      }
    });

    for (let product of productsInCart) {
      // key = id
      let productData = nextProps.catalog.filter((item) => {
        return product.id === item.id;
      }).shift();
      Object.assign(product, productData);
    }

    this.setState({productsInCart});

  }

  clearCart() {
    const {dispatch} = this.props;
    dispatch(actions.stores.clearCart());
  }

  render() {
    if (!this.state.productsInCart.length) return null;
    return (
        <View>
          <FlatList
          data={this.state.productsInCart}
          extraData={this.props.cart}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CartDetailsItem item={item}/>}/>
          <Button iconLeft block small danger onPress={() => this.clearCart()}>
            <Icon name={'close'} />
            <Text>Limpar Carrinho</Text>
          </Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = (state) => ({
  cart: state.stores.cart,
  catalog: state.stores.catalog,
});
CartDetails = connect(mapStateToProps)(CartDetails);
export {CartDetails};