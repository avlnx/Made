import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {StoreProductListItem} from './';
import actions from '../reducers/actions';

class StoreProductList extends Component {
  constructor() {
    super();
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

  render() {
    const numColumns = 2;
    return (
        <FlatList
            data={this.props.productListInStock}
            numColumns={numColumns}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
                <StoreProductListItem
                    item={item}
                    numColumns={2}
                    updateAction={this.updateProductQuantity.bind(this)}
                    getCurrentQuantityIn={this.getCurrentQuantityIn.bind(this)}/>
            }>
        </FlatList>
    );
  }
}

const mapStateToProps = (state) => ({
  productListInStock: state.stores.productListInStock,
});

StoreProductList = connect(mapStateToProps)(StoreProductList);

export {StoreProductList};
