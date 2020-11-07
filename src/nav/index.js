import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthNav from './AuthNav';
import TabNav from './TabNav';

const RootNav = () => {
    const { state } = useContext(AuthContext);
    return (
        <NavigationContainer>
            {state.token ? <TabNav /> : <AuthNav />}
        </NavigationContainer>
    )
}

export default RootNav;