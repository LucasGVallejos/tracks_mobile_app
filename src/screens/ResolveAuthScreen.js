import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return null;
};

ResolveAuthScreen.navigationOptions = {
    // Hide the header from AppNavigator stack
    headerShown: false,
};

export default ResolveAuthScreen;
