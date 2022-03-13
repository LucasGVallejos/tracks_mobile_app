import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';

const TrackListScreen = ({navigation}) => {
    return (
        <>
                <Text style={{fontSize: 48}}>TrackListScreen</Text>
                <Button
                    title="Go to Track Detail"
                    onPress={() => navigation.navigate('TrackDetail')}
                />
        </>
    );
};

TrackListScreen.navigationOptions = {
    // Hide the header from AppNavigator stack
    headerShown: false,
};

const styles = StyleSheet.create({});

export default TrackListScreen;
