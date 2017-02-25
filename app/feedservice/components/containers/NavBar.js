/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Iconz from 'react-native-vector-icons/Ionicons';
// import Iconz from 'react-native-vector-icons/MaterialIcons';

export default class NavBar extends Component {

  


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress = {() => this.props.navigator.replace({id:'feeds'})}>
          <Text color ="#888" size={25} style={{margin:10}} >Feeds </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => this.props.navigator.replace({id:'schedules'})}>
          <Text color ="#888" size={25} style={{margin:10}} >Schedule </Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text color ="#888" size={25} style={{margin:10}} >Messages </Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text color ="#888" size={25} style={{margin:10}} >Profile </Text>
        </TouchableOpacity>
        
      </View>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    height:60,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#fff',
    borderBottomWidth:1,
    borderColor:'rgba(0,0,0,0.1)'
  },
});
