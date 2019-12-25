/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import WeatherProject from './components/WeatherProject';
import BookList from './components/BookLists';

function App() {
  return (
    <View style={styles.container}>
      {/* <WeatherProject /> */}
      <BookList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '150px',
    height: '500px',
  },
});

export default App;
