import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Navigation from './src/Navigation';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
