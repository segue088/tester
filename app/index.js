/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { Home } from './feedservice/components/layouts'
import feedReducer from './feedservice/reducer';

const reducers = combineReducers({
	feed: feedReducer
});

const store = createStore(
	reducers,
	applyMiddleware(thunk)
)


export default class App extends Component {

	  render() {

	    return (
	        <Provider store={store}>
				<Home />
	        </Provider>
	    );
	  }
}



