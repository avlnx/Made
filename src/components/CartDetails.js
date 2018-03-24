import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Text, View} from 'native-base';
import {connect} from 'react-redux';
import {CartDetailsItem} from './';

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

  render() {
    if (!this.state.productsInCart) return null;
    return (
        <View>
          <FlatList
          data={this.state.productsInCart}
          extraData={this.props.cart}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CartDetailsItem item={item}/>}/>
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