import {StackNavigator} from 'react-navigation';
import {
  OnboardingScreen,
  DashboardScreen, NewPOSScreen, AddProductsToPOSScreen,
} from '../screens';

const LoggedInStack = StackNavigator(
    {
      Onboarding: {
        screen: OnboardingScreen,
      },
      Dashboard: {
        screen: DashboardScreen,
      },
      NewPOS: {
        screen: NewPOSScreen,
      },
      AddProductsToPOS: {
        screen: AddProductsToPOSScreen,
      },
    },
    {
      // headerMode: 'none',
    },
);

export {LoggedInStack};