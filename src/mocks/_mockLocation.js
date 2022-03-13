//The idea is that this is kind of like a test only file that's going to mock out our users location.
//We would definitely not want to include this file inside of any kind of production build.
import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy:  5,
            altitude: 5,
            longitude: -58.4325166 + increment * tenMetersWithDegrees,
            latitude: -34.6120582 + increment * tenMetersWithDegrees
        }
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);

