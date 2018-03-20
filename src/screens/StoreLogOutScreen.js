import React, {Component} from 'react';
import {View,Text,Button,Icon} from 'native-base';

class StoreLogOutScreen extends Component {
  render() {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ccc'}}>
          <Text style={{color: '#333', fontWeight: 'bold'}}>StoreLogOut</Text>
          <Button iconLeft primary onPress={() => this.props.navigation.goBack()}>
            <Icon name={'arrow-back'} />
            <Text>Cancelar</Text>
          </Button>
        </View>
    )
  }
}

export {StoreLogOutScreen}