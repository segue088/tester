/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Navigator } from 'react-native';

import FeedService from './feedservice/components/layouts'

import ScheduleService  from './feedservice/components/layouts/ScheduleLayout'

import { NavBar }  from './feedservice/components/containers'

import feedactions from './feedservice/reducer/actions'



export default class Apps extends Component {

	renderScene(route, navigator) {
	    var routeId = route.id
	    var userData = route.userData
	    
	    if (routeId === 'feeds') {
	      return (
	        <View style={{flex:1}}>
				<FeedService
		        userData ={userData}
		        navigator={navigator} />
		        <NavBar navigator={navigator}/>
	        </View>
	        );
	    }
	    if (routeId === 'schedules') {
	      return (
	        <View style={{flex:1}}>
				<ScheduleService
		        userData ={userData}
		        navigator={navigator} />
		        <NavBar navigator={navigator}/>
	        </View>
	        );
	    }
  	}

	render() {

		return (
		     <Navigator
		     style={{flex: 1}}
		     ref={'NAV'}
		     initialRoute={{id: 'feeds', name: 'feeds'}}
		     renderScene={this.renderScene.bind(this)}/>
		);
	}
}


