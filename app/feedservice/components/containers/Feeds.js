import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux'
import APIManager from '../../utils/APIManager'
import { Feed } from '../views'
import actions from '../../reducer/actions'

class Feeds extends Component {
  
  componentDidMount(){  
    this.props.loadFeeds(2)
  }

  explodeFeed(){
    this.props.updateRoute({
      navigator: this.props.navigator, 
      route: {
        id:'search', 
        name: 'search'
      }
    })
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Feed feed={this.props.feedservice.feeds} onTouch={this.explodeFeed.bind(this)}/>
        <Feed feed = {this.props.feedservice.feeds} onTouch={this.explodeFeed.bind(this)}/>
        <Feed feed = {this.props.feedservice.feeds} onTouch={this.explodeFeed.bind(this)}/>
        
      </View>
    );
  }
}

const stateToProps = (state) => {
  return {
    feedservice: state.feedservice,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    loadFeeds: (params) => dispatch(actions.loadFeeds(params)),
    updateRoute: (params) => dispatch(actions.updateRoute(params)),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:40,
    paddingBottom:40,
  },
})


export default connect(stateToProps, dispatchToProps)(Feeds)
