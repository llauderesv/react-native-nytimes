import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Header({children, fontSize = 0, style = null}) {
  return (
    <Text
      style={[styles.header, {fontSize: !fontSize ? 35 : +fontSize, ...style}]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: '700',
    color: '#fff',
  },
});

export default Header;
