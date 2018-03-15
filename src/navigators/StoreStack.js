import {StackNavigator} from 'react-navigation';
import {StoreFrontScreen} from '../screens';

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

export {StoreStack};