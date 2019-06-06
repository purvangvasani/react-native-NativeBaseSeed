import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './store'
import {Provider} from 'react-redux'
import React from 'react'

const store = configureStore()

const app = () => {
    return(
        <Provider store = {store}>
            <App />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => app);
