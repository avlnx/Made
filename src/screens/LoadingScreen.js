import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Loading} from '../components/common';

class LoadingScreen extends Component {
  render() {
    const {loadingMessage} = this.props;
    return(
        <Loading message={loadingMessage} />
    );
  }
}

const mapStateToProps = (state) => ({
  loadingMessage: state.ui.loadingMessage
});

LoadingScreen = connect(mapStateToProps)(LoadingScreen);
export {LoadingScreen};