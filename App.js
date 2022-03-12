import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Provider as AuthProvider} from './src/context/AuthContext';

import AccountScreen from './src/screens/AccountScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {setNavigator} from "./src/helpers/navigationRef";

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Signup: SignUpScreen,
        Signin: SignInScreen,
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen,
        }),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen,
    }),
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <AuthProvider>
            <App ref={(navigator) => {
                console.log(navigator);
                setNavigator(navigator);
            }}
            />
        </AuthProvider>
    );
};
