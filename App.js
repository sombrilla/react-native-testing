import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CopyTest } from '../components/copy-test'; 

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CopyTest copy="wwe" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
