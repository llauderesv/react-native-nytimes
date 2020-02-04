import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDynamicStyleSheet} from 'react-native-dark-mode';
import dynamicStyles from './style';

function LoadingIndicator({style = null}) {
  const styles = useDynamicStyleSheet(dynamicStyles);

  return (
    <View style={[styles.loadingContainer, style]}>
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </View>
  );
}

export default LoadingIndicator;
