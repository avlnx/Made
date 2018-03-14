import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Spinner from 'react-native-spinkit';
import {H1} from 'native-base';
import {MadeLogo} from './';

/*
Spinner types: [
'CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots',
'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle',
'FadingCircleAlt', 'Arc', 'ArcAlt'],
 */

class Loading extends Component {
  render() {
    const {message} = this.props;
    return (
        <View style={styles.container}>
          <MadeLogo />
          <Spinner style={styles.spinner} isVisible={true} size={48} type={'CircleFlip'} />
          <H1 style={styles.text}>{message ? message : 'Carregando...'}</H1>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaed7a',
  },
  spinner: {
    color: '#333',
  },
  text: {
    color: '#444',
  },
});

export {Loading};

