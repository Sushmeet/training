/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// Import a library to help create a component.
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => {
    return (
        <Text>Some Text</Text>
    );
};

// Render it to a device
AppRegistry.registerComponent('albums', () => App);

