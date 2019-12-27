import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Tag({section, style = null}) {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', ...style}}>
      <View style={styles.sectionContainer}>
        <Text style={styles.section}>{section}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#66a1ee',
    borderRadius: 3,
  },
  section: {
    padding: 5,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default Tag;
