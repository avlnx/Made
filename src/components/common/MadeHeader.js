import React, {Component} from 'react';
// import {View, H3, Text} from 'native-base';
import {
  Header,
  Left,
  Body,
  Title,
  Right,
  Button,
  Icon,
} from 'native-base';
import firebase from 'react-native-firebase';
import {SmallText} from './';

class MadeHeader extends Component {
  render() {
    return (
        <Header>
          <Left style={{flex: 1}}>
            <SmallText style={{color: 'white'}}>MADE</SmallText>
          </Left>
          <Body style={{flex: 4}}>
            <Title>{this.props.title}</Title>
          </Body>
          <Right style={{flex: 1}}>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Right>
        </Header>
    );
  }
}

/*
<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'flex-start'}}>
          <View style={{flex: 2}}>
            <H3>{this.props.title}</H3>
          </View>
          <View style={{flex: 1}}>
            <Text style={{alignSelf: 'flex-end', color: 'blue'}}>{firebase.auth().currentUser.email}</Text>
          </View>
        </View>
 */

export {MadeHeader};