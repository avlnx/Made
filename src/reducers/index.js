import auth from './auth';
import ui from './ui';
import stores from './stores';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createLogger} from 'redux-logger';

const reducers = {
  auth,
  ui,
  stores,
};

const reducer = combineReducers(reducers);
const loggerMiddleware = createLogger();

export default store = createStore(reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    ));