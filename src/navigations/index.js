import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import AuthNavigator from './AuthNavigator';
import AppNavigator2 from './AppNavigator2';

const RootNavigator = createSwitchNavigator(
  {
    App: AppNavigator2,
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(RootNavigator);