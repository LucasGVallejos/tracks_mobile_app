import createDataContext from '../helpers/createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from "../helpers/navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case "signup":
        case "signin":
            return { errorMessage: "", token: action.payload };
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        default:
            return state;
    }
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: "clear_error_message" });
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
    return async ({ email, password }) => {
        try {
            // Try to signin
            const response = await trackerApi.post("/signin", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            // Handle success by updating state
            dispatch({ type: "signin", payload: response.data.token });
            navigate("TrackList");
        } catch (err) {
            // Handle failure by showing error message
            console.error(err.message);
            dispatch({
                type: "add_error",
                payload: "Something went wrong with sign in",
            });
        }
    };
};

const signout = dispatch => {
    return () => {
        // somehow sign out!!!

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage },
    { token: null, errorMessage: '' }
);
