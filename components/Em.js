import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Em({children}) {
  return <Text style={styles.em}>{children}</Text>;
}

const styles = StyleSheet.create({
  em: {
    fontWeight: '700',
  },
});

export default Em;
