import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {StoreProductListItem} from './';

class StoreProductList extends Component {
  render() {
    const numColumns = 2;
    return(
        <FlatList
            data={this.props.productListInStock}
            numColumns={numColumns}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
                <StoreProductListItem item={item} numColumns={2}/>
            }>
        </FlatList>
    )
  }
}

const mapStateToProps = (state) => ({
  productListInStock: state.stores.productListInStock,
});

StoreProductList = connect(mapStateToProps)(StoreProductList);

export {StoreProductList};
