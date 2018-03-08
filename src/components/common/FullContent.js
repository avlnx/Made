import React, {Component} from 'react';
import {View} from 'native-base';

class FullContent extends Component {
  render() {
    return (
        <View style={[this.props.style, {flex: 1}]}>
          {this.props.children}
        </View>
    );
  }
}

export {FullContent};