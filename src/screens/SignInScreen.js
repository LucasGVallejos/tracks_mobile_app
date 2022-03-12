import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
    const { state, signin } = useContext(Context);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <NavLink
                text="Dont have an account? Sign up instead"
                routeName="Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions = {
    // Hide the header from AppNavigator stack
    headerShown: false,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 10,
    },
});

export default SigninScreen;
