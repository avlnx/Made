import React from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import * as reducers from './src/reducers';

import {RootStack} from './src/navigators';

const reducer = combineReducers(reducers);

const loggerMiddleware = createLogger();

const store = createStore(reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    ));

export default class App extends React.Component {
  render() {
    return <Provider store={store}><RootStack/></Provider>;
  }
}