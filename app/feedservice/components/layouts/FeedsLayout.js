import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Feeds}  from '../containers'

export default class FeedsLayout extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        
        <Feeds navigator={this.props.navigator}/>
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
    paddingTop:40,
    paddingBottom:40,
  },
});

