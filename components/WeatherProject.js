import React, {useState, useEffect, useRef} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import Forecast from './Forecast';
import Button from './Button';

function WeatherProject() {
  // For simplicity sake I used
  const [main, setMain] = useState('Clouds');
  const [description, setDescription] = useState('Few clouds');
  const [temp, setTemp] = useState('45.7');

  const [zip, setZip] = useState('');

  function onHandleTextChange(event) {
    setZip(event.nativeEvent.text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.backdrop}>
        <Text style={styles.welcome}>You input {zip}</Text>
        <Forecast main={main} description={description} temp={temp} />
        <TextInput style={styles.input} onChange={onHandleTextChange} />
        <Button />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D4D4D',
  },
  backdrop: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  input: {
    padding: 10,
    fontSize: 20,
    borderWidth: 1,
    height: 45,
    borderColor: '#fff',
    borderRadius: 3,
    color: '#fff',
  },
});

export default WeatherProject;
