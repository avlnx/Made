import React from 'react';
import {Text, View} from 'react-native';
import {NativeRouter, Link, Router} from 'react-router-native';
import {Navigation, Card, Tabs, Tab} from 'react-router-navigation';

import {Tabber} from './src/components/screens/Tabber';

const App = () => (
    <NativeRouter>
      <Navigation title={'Hermes'}>
        <Card
            exact
            path="/"
            render={() => (
                <View>
                  <Text>Home Screen</Text>
                  <Link to="/login">
                    <Text>Login</Text>
                  </Link>
                  <Link to="/tabs">
                    <Text>Tabs</Text>
                  </Link>
                </View>
            )}
        />
        <Card path="/login" render={() => <Text>Login Screen</Text>}/>
        <Card path='/tabs' render={Tabber} />
      </Navigation>
    </NativeRouter>
);

export default App;