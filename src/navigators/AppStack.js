import {StackNavigator} from 'react-navigation';
import {DashboardScreen, LoadingScreen, StoreConfigScreen} from '../screens';

const AppStack = StackNavigator(
    {
      Dashboard: {
        screen: DashboardScreen,
      },
      StoreConfig: {
        screen: StoreConfigScreen,
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

export {AppStack};