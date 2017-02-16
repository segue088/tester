import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Feed extends Component {

  constructor(){
    super()
  }

  render() {
    return (

      <View style={styles.feed}>
        <Text>{this.props.feed.feed}</Text>
        <Text>{this.props.feed.sender}</Text>
        <Text>{this.props.feed.user}</Text><Text>{this.props.feed.timestamp}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  feed: {
    flex: 1,
    marginTop:20,
    height:null,
    width:null,
    backgroundColor: '#F5FC33'
  },
});