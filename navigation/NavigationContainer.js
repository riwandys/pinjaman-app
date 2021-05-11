import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { createAppContainer, createSwitchNavigator, NavigationActions } from 'react-navigation';
import StartupScreen from '../screens/StartupScreen';
import AdminNavigator from './AdminNavigator';
import AuthNavigator from './AuthNavigator';
import UserNavigator from './UserNavigator';
import MasterAdminNavigator from './MasterAdminNavigator';

const switchNavigator = createSwitchNavigator({
    Startup: StartupScreen,
    Auth: AuthNavigator,
    User: UserNavigator,
    Admin: AdminNavigator,
    MasterAdmin: MasterAdminNavigator
});

const AppNavigator = createAppContainer(switchNavigator);

const NavigationContainer = () => {
    const navRef = useRef();
    const isAuth = useSelector(state => !!state.auth.email);

    // useEffect(() => {
    //     if (!isAuth) {
    //         navRef.current.dispatch(
    //             NavigationActions.navigate({ routeName: 'Auth' })
    //         );
    //     }
    // }, [isAuth]);

    return <AppNavigator />
}

export default NavigationContainer;
