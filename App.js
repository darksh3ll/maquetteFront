import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Message from "./components/Message";
import Users from "./components/Users";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Users/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
