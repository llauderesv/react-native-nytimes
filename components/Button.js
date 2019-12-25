import React, {useState} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';

function Button() {
  const [press, setPress] = useState(false);

  function onPressIn() {
    setPress(true);
  }

  function onPressOut() {
    setPress(false);
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={styles.touchable}>
        <View style={styles.button}>
          <Text style={styles.welcome}>{press ? 'EEW!' : 'PUSH ME!'}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  touchable: {
    borderRadius: 100,
  },
  button: {
    backgroundColor: '#FF0000',
    borderRadius: 100,
    height: 200,
    width: 200,
    justifyContent: 'center',
  },
});

export default Button;
