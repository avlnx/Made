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
  Text,
} from 'native-base';
import firebase from 'react-native-firebase';
import {SmallText} from './';
import {connect} from 'react-redux';
import actions from '../../reducers/actions';

class MadeHeader extends Component {
  render() {
    const {dispatch} = this.props;
    return (
        <Header>
          <Left style={{flex: 1}}>
            <SmallText style={{color: 'white'}}>MADE</SmallText>
          </Left>
          <Body style={{flex: 4}}>
            <Title>{this.props.title}</Title>
          </Body>
          <Right style={{flex: 1}}>
            {firebase.auth().currentUser ? <Button default small onPress={() => dispatch(actions.auth.logOut())}>
              <Text>Sair</Text>
            </Button> : null}
          </Right>
        </Header>
    );
  }
}

// export {MadeHeader};

MadeHeader = connect(() => ({}))(MadeHeader);

export {MadeHeader};