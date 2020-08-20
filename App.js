import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello mama ohh </Text> */}
      <Home/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ebebeb",
    marginTop:constants.statusBarHeight
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
