import React from 'react';
import {
  Container,
  View,
  Text
} from 'native-base';
import {getResetAndNavigateActionTo} from '../navigators/index';
import {connect} from 'react-redux';

class StoreFrontScreen extends React.Component {

  // resetAndNavigate(routeName) {
  //   const action = getResetAndNavigateActionTo(routeName);
  //   this.props.navigation.dispatch(action);
  // }



  componentWillMount() {
  }

  render() {
    const {activeStore} = this.props;
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>STORE FRONT</Text>
          <Text note>Active Store: {activeStore.nickname}</Text>
        </View>
    );
  }
}

const mapStateToProps = (state) => ({
  activeStore: state.stores.activeStore
});

StoreFrontScreen = connect(mapStateToProps)(StoreFrontScreen);

export {StoreFrontScreen};