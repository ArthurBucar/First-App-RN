

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World em React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 26,
    textAlign: 'center',
    margin: 10,
    color:'#F00C'
  },
});
