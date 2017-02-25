
import React, { Component } from 'react';
import { StyleSheet, View, Text, Navigator } from 'react-native';

import { Feeds, TopNav } from '../containers'
import Feed from './FeedLayout'
import Schedule from './ScheduleLayout'
import Search from './SearchLayout'

import { connect } from 'react-redux'
import actions from '../../reducer/actions'


class FeedServiceLayout extends Component {
  
  	renderScene(route, navigator) {
      var routeId = route.id
      var userData = route.userData
      
      if (routeId === 'feeds') {
        return (
	          <View style={styles.container}>
              <Feeds navigator={navigator} />
            </View>
        );
      }
      if (routeId === 'search') {
        return (
		      <View style={styles.container}>
            <TopNav />
            <Search navigator={navigator} />
          </View>
          );
      }
    }

  render() {

    return (
         <Navigator
           style={{flex: 1}}
           ref={'NAV'}
           initialRoute={this.props.feedservice.currentnav}
           renderScene={this.renderScene.bind(this)}/>
    )

    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const stateToProps = (state) => {
  return {
    feedservice: state.feedservice
  }
}

const dispatchToProps = (dispatch) => {
  return {
    // loadFeeds: (params) => dispatch(actions.loadFeeds(params))
  }
}

export default connect(stateToProps, dispatchToProps)(FeedServiceLayout)



