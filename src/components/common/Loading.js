import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Spinner from 'react-native-spinkit';
import {H1} from 'native-base';
import {MadeHeaderLogo} from './';

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
          <View style={styles.logoContainer}>
            <MadeHeaderLogo style={{height: 150, width: 300}} />
          </View>
          <View style={styles.spinnerContainer}>
            <Spinner style={styles.spinner} isVisible={true} size={102} type={'Wave'} />
            <H1 style={styles.text}>{message ? message : 'Carregando...'}</H1>
          </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ECC71',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    flex: 1
  },
  spinnerContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {
    marginBottom: 20,
  },
  text: {
    color: '#444',
  },
});

export {Loading};

