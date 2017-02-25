import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';



export default class TopNav extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <TouchableHighlight onPress={this.props.onForward}>
          <Text> Back</Text>
        </TouchableHighlight>

        <Text>Current Scene: {this.props.title}</Text>

		<TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height:60,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#F5FCFF',
    borderBottomWidth:0.5,
    borderColor:'rgba(0,0,0,0.1)'
  },
});