import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import LoadingIndicator from './LoadingIndicator';

function Details({navigation}) {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <WebView
        onLoad={() => setLoading(false)}
        source={{uri: navigation.getParam('uri', 'https://google.com')}}
        style={styles.webview}
      />
      {loading && <LoadingIndicator />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  webview: {zIndex: 998},
});

export default Details;
