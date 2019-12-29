import React, {memo} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

function Item({id, children, onSelect, selected}) {
  return (
    <TouchableOpacity
      style={[
        styles.item,
        {borderBottomColor: selected ? '#fff' : 'rgba(255,255,255,0.3)'},
      ]}
      onPress={() => onSelect(id)}>
      <Text
        style={[
          styles.label,
          {
            color: selected ? '#fff' : 'rgba(255,255,255,0.3)',
            fontWeight: selected ? 'bold' : 'normal',
          },
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

// Create a Memoized version Item...
export default memo(Item);
