import auth from './auth';
import ui from './ui';
import stores from './stores';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createLogger} from 'redux-logger';
// redux-persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
// Reactotron dev app
import Reactotron from 'reactotron-react-native';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = {
  auth,
  ui,
  stores,
};

const reducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, reducer);

const loggerMiddleware = createLogger();

// let store = createStore(persistedReducer,
//     applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware,
//     ));

let store = Reactotron.createStore(persistedReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    ));

let persistor = persistStore(store);
export {store, persistor};