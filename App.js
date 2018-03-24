// Reactotron
import './ReactotronConfig';

import React from 'react';
import {StatusBar} from 'react-native';
// Theming
import {StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
import {Loading} from './src/components/common';
// Redux
import {Provider} from 'react-redux';
import {store, persistor} from './src/reducers';
import {PersistGate} from 'redux-persist/integration/react';
// Navigators
import {RootStack} from './src/navigators';

export default class App extends React.Component {
  render() {
    return (
        <StyleProvider style={getTheme(commonColor)}>
          <Provider store={store}>
            <PersistGate loading={<Loading message={'Recuperando seus dados'}/>}
                         persistor={persistor}>
              <StatusBar hidden />
              <RootStack/>
            </PersistGate>
          </Provider>
        </StyleProvider>
    );
  }
}