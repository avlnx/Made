import React from 'react';
// Theming
import {StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
// Redux
import {Provider} from 'react-redux';
import store from './src/reducers';
// Navigators
import {RootStack} from './src/navigators';

export default class App extends React.Component {
  render() {
    return (
        <StyleProvider style={getTheme(commonColor)}>
          <Provider store={store}><RootStack/></Provider>
        </StyleProvider>
    );
  }
}