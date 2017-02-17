/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Navigator } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { Home, Feed } from './feedservice/components/layouts'
import feedReducer from './feedservice/reducer';

import { Schedule } from './feedservice/components/layouts'


import { NavBar }  from './feedservice/components/containers'

const reducers = combineReducers({
	feed: feedReducer
});

const store = createStore(
	reducers,
	applyMiddleware(thunk)
)


export default class App extends Component {

	renderScene(route, navigator) {
	    var routeId = route.id
	    var userData = route.userData
	    
	    if (routeId === 'home') {
	      return (
	        <View style={{flex:1}}>
				<Home
		        userData ={userData}
		        navigator={navigator} />
		        <NavBar navigator={navigator}/>
	        </View>
	        );
	    }
	    if (routeId === 'feed') {
	      return (
	        <Feed
	        userData ={userData}
	        navigator={navigator} />
	        );
	    }
	    if (routeId === 'schedule') {
	      return (
	        <Schedule
	        userData ={userData}
	        navigator={navigator} />
	        );
	    }
  	}

	  render() {

	    return (
	        <Provider store={store}>
				     <Navigator
				     style={{flex: 1}}
				     ref={'NAV'}
				     initialRoute={{id: 'home', name: 'home'}}
				     renderScene={this.renderScene.bind(this)}/>
 	        </Provider>
	    );
	  }
}



