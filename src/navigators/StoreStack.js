import {StackNavigator} from 'react-navigation';
import {StoreFrontScreen} from '../screens';
import navStyles from './styles';

const StoreStack = StackNavigator(
    {
      StoreFront: {
        screen: StoreFrontScreen,
      }
    },
    {
      initialRouteName: 'StoreFront',
      navigationOptions: navStyles
    },
);

export {StoreStack};