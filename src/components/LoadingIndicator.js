import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

function LoadingIndicator({style = null}) {
  return (
    <View style={[styles.loadingContainer, style]}>
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    zIndex: 999,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    width: '100%',
  },
  loadingIndicator: {
    alignSelf: 'center',
    width: '30%',
    borderRadius: 5,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});

export default LoadingIndicator;
