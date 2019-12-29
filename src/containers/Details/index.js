import React, {useState} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import LoadingIndicator from '../../components/LoadingIndicator';
import styles from './style';

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

export default Details;
