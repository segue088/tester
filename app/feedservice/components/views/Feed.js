import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export default class Feed extends Component {

    explodeFeed(event){
      this.props.onTouch()
    }

   render() {
    return (

        <TouchableOpacity style={styles.container} onPress={this.explodeFeed.bind(this)}>
          <Text>{this.props.feed.feed}</Text>
          <Text>{this.props.feed.sender}</Text>
          <Text>{this.props.feed.user}</Text><Text>{this.props.feed.timestamp}</Text>
        </TouchableOpacity>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10,
    height:null,
    width:null,
    backgroundColor: '#F5FC33'
  },
});