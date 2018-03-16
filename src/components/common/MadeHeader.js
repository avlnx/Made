import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
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
    const {dispatch, navigation} = this.props;
    return (
        <Header>
          <Left style={{flex: 1}}>
            {this.props.backEnabled ?
                <Button default small icon
                        onPress={() => navigation.goBack()}>
                  <Icon name={'arrow-back'} />
                </Button> : null
            }
          </Left>
          <Body style={{flex: 4, alignItems: 'center'}}>
          <Image resizeMode="contain" style={styles.headerImage}
                 source={require('../../resources/img/made-new-icon.png')}/>
          </Body>
          <Right style={{flex: 1}}>
            {firebase.auth().currentUser ?
                <Button default small onPress={() => dispatch(
                    actions.auth.logOut(navigation))}>
                  <Text>Sair</Text>
                </Button> :
                null}
          </Right>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  headerImage: {
    width: 101,
    height: 33,
    // flex: 1,
  },
});

MadeHeader = connect(() => ({}))(MadeHeader);
export {MadeHeader};