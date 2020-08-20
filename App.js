import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ebebeb",
    marginTop:constants.statusBarHeight,
    marginBottom: 50
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
