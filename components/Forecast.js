import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Em from './Em';

function Forecast({main, description, temp}) {
  const {bigText, mainText} = styles;

  return (
    <View>
      <Text style={bigText}>{main}</Text>
      <Text style={mainText}>Current conditions: {description}</Text>
      <Text style={bigText}>
        <Em>{temp}</Em> °F
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bigText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  mainText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default Forecast;
