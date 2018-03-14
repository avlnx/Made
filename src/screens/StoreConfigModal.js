import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'native-base';

class StoreConfigModal extends Component {
  render() {
    const {params} = this.props.navigation.state;
    // const storeId = params.storeId;
    const storeId = params ? params.storeId : null;
    const {stores} = this.props;
    console.log('storeId in StoreConfigModal:' + storeId);
    let store = stores.filter((store) => {return store.id === storeId});
    console.log('store in StoreConfigModal: ' + store.nickname);

    return (
        <Text>StoreConfig for {store.nickname}</Text>
    );
  }
}

const mapStateToProps = (state) => ({
  stores: state.stores.storeList,
});

StoreConfigModal = connect(mapStateToProps)(StoreConfigModal);
export {StoreConfigModal};