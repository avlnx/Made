import React, {Component} from 'react';
import {View, H3, Text} from 'native-base';
import firebase from 'react-native-firebase';

class UserHeaderTitle extends Component {
  render() {
    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'flex-start'}}>
          <View style={{flex: 2}}>
            <H3>{this.props.title}</H3>
          </View>
          <View style={{flex: 1}}>
            <Text style={{alignSelf: 'flex-end', color: 'blue'}}>{firebase.auth().currentUser.email}</Text>
          </View>
        </View>
    );
  }
}

export {UserHeaderTitle};