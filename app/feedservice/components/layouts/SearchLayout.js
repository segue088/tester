import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SearchLayout extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        
        <Text> Search Item exploded</Text>
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