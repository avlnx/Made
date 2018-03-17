import {StackNavigator} from 'react-navigation';
import {DashboardScreen, LoadingScreen, StoreConfigScreen} from '../screens';
import navOptions from './styles';

const AppStack = StackNavigator(
    {
      Dashboard: {
        screen: DashboardScreen,
      },
      StoreConfig: {
        screen: StoreConfigScreen,
      },
    },
    {
      initialRouteName: 'Dashboard',
      navigationOptions: navOptions
    },
);

export {AppStack};