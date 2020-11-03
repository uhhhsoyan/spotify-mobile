import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const RootNavigator = createSwitchNavigator(
  {
    App: AppNavigator,
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(RootNavigator);