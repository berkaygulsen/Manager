import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import * as firebase from 'firebase';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCdn0qUT0VMJUHAYyp9X2NFEG-d0-Sub6s",
      authDomain: "manager-75ddb.firebaseapp.com",
      databaseURL: "https://manager-75ddb.firebaseio.com",
      projectId: "manager-75ddb",
      storageBucket: "manager-75ddb.appspot.com",
      messagingSenderId: "522169331290"
    };
    firebase.initializeApp(config);
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
