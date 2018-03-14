import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {StoreProductListItem} from './';
import actions from '../reducers/actions';

class StoreProductList extends Component {
  updateProductQuantity(item, operation) {
    const {dispatch} = this.props;
    dispatch(actions.stores.updateProductQuantityInCart({
      product: item,
      operation,
    }));
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
                    updateAction={this.updateProductQuantity.bind(this)}/>
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
