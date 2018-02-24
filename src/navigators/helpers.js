//  Resets the stack and Navigates to another screen after clearing the
// navigation back path so we don't have a back button for example
import {NavigationActions} from 'react-navigation';

function getResetAndNavigateActionTo(targetRoute) {
  return NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: targetRoute }),
    ],
    key: null
  });
}

export {getResetAndNavigateActionTo};