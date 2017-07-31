import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import RouterComponent from './Router';

export default class App extends Component {
  state = {
    loggenIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBXqNouaOuSSDUvzCCgBTbVifoyzU2w0lI',
      authDomain: 'manager-cb541.firebaseapp.com',
      databaseURL: 'https://manager-cb541.firebaseio.com',
      projectId: 'manager-cb541',
      storageBucket: 'manager-cb541.appspot.com',
      messagingSenderId: '24055141052'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}
