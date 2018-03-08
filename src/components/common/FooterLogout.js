import React, {Component} from 'react';
import actions from '../../reducers/actions';
import {Footer, FooterTab, Button, Text} from 'native-base';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';

class FooterLogout extends Component {
  render() {
    const {dispatch} = this.props;
    return (
        <Footer>
          <FooterTab>
            <Button transparent onPress={() => dispatch(actions.auth.logOut())}>
              <Text>Sair</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

FooterLogout = connect(() => ({}))(FooterLogout);
export {FooterLogout};