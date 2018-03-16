import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';


class MadeHeaderLogo extends Component {
  render() {
    return (
        <Image resizeMode="contain" style={[styles.headerImage, this.props.style]}
               source={require('../../resources/img/made-logo.png')}/>
    );
  }
}

const styles = StyleSheet.create({
  headerImage: {
    width: 101,
    height: 33,
    marginHorizontal: 15,
  },
});

export {MadeHeaderLogo};