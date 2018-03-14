import React from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
// import RootStack from './src/screens/RootStack';

import * as reducers from './src/reducers';

import {StackNavigator, SwitchNavigator} from 'react-navigation';
import {
  DashboardScreen, StoreConfigModal, StoreFrontScreen,
  WelcomeScreen, AuthLoadingScreen, LoadingScreen
} from './src/screens';

const reducer = combineReducers(reducers);

const loggerMiddleware = createLogger();

const store = createStore(reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    ));

// const AppStack = StackNavigator({ Home: HomeScreen, Other: OtherScreen });
// const AuthStack = StackNavigator({ SignIn: SignInScreen });

const AppStack = StackNavigator(
    {
      Dashboard: {
        screen: DashboardScreen,
      },
      StoreConfig: {
        screen: StoreConfigModal,
      },
      Loading: {
        screen: LoadingScreen,
      }
    },
    {
      initialRouteName: 'Dashboard',
      headerMode: 'none',
    },
);

const StoreStack = StackNavigator(
    {
      StoreFront: {
        screen: StoreFrontScreen,
      }
    },
    {
      initialRouteName: 'StoreFront',
      headerMode: 'none',
    },
);

const AuthStack = StackNavigator(
    {
      Welcome: {
        screen: WelcomeScreen
      },
    },
    {
      initialRouteName: 'Welcome',
      headerMode: 'none',
    },
);

const RootStack =  SwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
      Store: StoreStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
);

export default class App extends React.Component {
  render() {
    return <Provider store={store}><RootStack/></Provider>;
  }
}