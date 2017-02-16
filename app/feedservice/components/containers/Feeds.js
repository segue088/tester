import React, { Component } from 'react';
import { View, Text } from 'react-native';
import APIManager from '../../utils/APIManager'
import { Feed } from '../views'
import { connect } from 'react-redux'
import actions from '../../reducer/actions'

class Feeds extends Component {
  
  constructor(){
    super()

    this.state = {  

      feed: {
        user: 'Kila Bongo',
        feed: 'Patient just took phynl injection scheduled for 3:30',
        sender: 'Nurse Venerate',      
        timestamp: '23-04-2017'  
      }
    }
  }

  componentDidMount(){

    this.props.loadFeeds(null)
    

  }

  render() {
    return (
      <View>
        <Feed feed = {this.state.feed}/>
        <Feed feed = {this.state.feed}/>
        <Feed feed = {this.state.feed}/>
        
      </View>
    );
  }
}

const stateToProps = (state) => {
  return {
    feed: state.feed
  }
}

const dispatchToProps = (dispatch) => {
  return {
    loadFeeds: (params) => dispatch(actions.loadFeeds(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Feeds)