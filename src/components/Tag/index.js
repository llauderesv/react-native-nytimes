import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

function Tag({section, style = null}) {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', ...style}}>
      <View style={styles.sectionContainer}>
        <Text style={styles.section}>{section}</Text>
      </View>
    </View>
  );
}

export default Tag;
