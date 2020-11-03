import React from 'react';
import { StatusBar } from 'react-native';
import Navigator from './src/navigations';

const App = () => {
    return (
        <Navigator>
            <StatusBar barStyle={'light-content'}/>
        </Navigator>
    )   
}

export default App;