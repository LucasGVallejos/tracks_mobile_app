import createDataContext from '../helpers/createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from "../helpers/navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case "signup":
            return { errorMessage: "", token: action.payload };
        default:
            return state;
    }
};

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            // make api request to sign up with that email and password
            const response = await trackerApi.post('/signup', { email, password });
            // if we sign up, modify our state, and say that we are authenticated
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({ type: "signup", payload: response.data.token });
            // navigate to main flow
            navigate("TrackList");
        } catch (err) {
            // if signing up fails, we probably need to reflect an error message somewhere
            console.error(err.message);
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign up'
            });
        }
    };
};

const signin = dispatch => {
    return ({ email, password }) => {
        // Try to signin

        // Handle success by updating state

        // Handle failure by showing error message (somehow)
    };
};

const signout = dispatch => {
    return () => {
        // somehow sign out!!!

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
);