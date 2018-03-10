import {StackNavigator} from 'react-navigation';
// import {
//   OnboardingScreen,
//   DashboardScreen, AddProductsToPOSScreen,
// } from '../screens';
import {DashboardScreen} from '../screens';

const LoggedInStack = StackNavigator(
    {
      // Onboarding: {
      //   screen: OnboardingScreen,
      // },
      Dashboard: {
        screen: DashboardScreen,
      },
      // AddProductsToPOS: {
      //   screen: AddProductsToPOSScreen,
      // },
    },
    {
      headerMode: 'none',
    },
);

export {LoggedInStack};