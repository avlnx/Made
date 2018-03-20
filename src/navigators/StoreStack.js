import {StackNavigator} from 'react-navigation';
import {StoreFrontScreen, StoreLogOutScreen} from '../screens';
import navStyles from './styles';

const StoreStack = StackNavigator(
    {
      StoreFront: {
        screen: StoreFrontScreen,
      },
      StoreLogOut: {
        screen: StoreLogOutScreen,
      }
    },
    {
      initialRouteName: 'StoreFront',
      navigationOptions: navStyles
    },
);

export {StoreStack};