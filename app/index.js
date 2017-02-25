/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import feedReducer from './feedservice/reducer';

import Apps from './Apps'

const reducers = combineReducers({
	feedservice: feedReducer
});

const store = createStore(
	reducers,
	applyMiddleware(thunk)
)


export default class App extends Component {

	  render() {

	    return (
	        <Provider store={store}>
				     <Apps />
 	        </Provider>
	    );
	  }
}



