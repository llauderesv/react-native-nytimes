import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './style';

function LoadingIndicator({style = null}) {
  return (
    <View style={[styles.loadingContainer, style]}>
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </View>
  );
}

export default LoadingIndicator;
