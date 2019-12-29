import React from 'react';
import {Text} from 'react-native';
import styles from './style';

function Header({children, fontSize = 0, style = null}) {
  return (
    <Text
      style={[styles.header, {fontSize: !fontSize ? 35 : +fontSize, ...style}]}>
      {children}
    </Text>
  );
}

export default Header;
