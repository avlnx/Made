import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dimensions, FlatList} from 'react-native';
import {StoreProductListItem} from './';
import actions from '../reducers/actions';

import {View, Text, Button} from 'native-base';
import {ProductShowcase} from './';
import {LightBox} from './common';

class StoreProductList extends Component {
  constructor() {
    super();

    this.state = {
      showcaseProduct: null,
    };
  }

  updateProductQuantity(item, operation) {
    const {dispatch} = this.props;
    dispatch(actions.stores.updateProductQuantityInCart({
      product: item,
      operation,
    }));
  }

  getCurrentQuantityIn(where, productId) {
    const locationOfQuery = where === 'cart' ?
        this.props.cart :
        this.props.activeStore.inventory;
    if (!locationOfQuery[productId]) {
      return 0;
    }
    return locationOfQuery[productId];
  }

  setShowcaseProduct(product) {
    this.setState({showcaseProduct: product});
  }

  render() {
    const numColumns = 2;
    const itemMargin = 5;
    const itemWidth = (Dimensions.get('window').width - (itemMargin * 4)) /
        numColumns;
    if (this.state.showcaseProduct) return (
        <LightBox cancelAction={() => this.setState(
            {showcaseProduct: null})}>
          <ProductShowcase product={this.state.showcaseProduct}/>
        </LightBox>
    );
    return (
        <FlatList
            data={this.props.productListInStock}
            numColumns={numColumns}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
                <StoreProductListItem
                    item={item}
                    numColumns={numColumns}
                    updateAction={this.updateProductQuantity.bind(this)}
                    getCurrentQuantityIn={this.getCurrentQuantityIn.bind(this)}
                    itemWidth={itemWidth}
                    itemMargin={itemMargin}
                    setShowcaseProductAction={this.setShowcaseProduct.bind(
                        this)}/>
            }>
        </FlatList>
    );
  }
}

const mapStateToProps = (state) => ({
  productListInStock: state.stores.productListInStock,
  activeStore: state.stores.activeStore,
  cart: state.stores.cart,
});

StoreProductList = connect(mapStateToProps)(StoreProductList);

export {StoreProductList};
