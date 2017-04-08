import React from 'react';
import {
    AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Root from './Root';

const store = configureStore();

const ReduxApp = () => (
    <Provider store={store}>
        <Root />
    </Provider>
);

AppRegistry.registerComponent('enTouch - React Native', () => ReduxApp);