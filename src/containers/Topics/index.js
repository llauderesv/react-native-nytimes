import React from 'react';
import {FlatList, View} from 'react-native';
import Header from '../../components/Header';
import Item from './Item';
import styles from './style';

/**
 * Make the first letter uppercaseF
 * @param {string} str
 */
const uppercaseLetter = str =>
  str.slice(0, 1).toLocaleUpperCase() + str.slice(1);

function Topic({data, selected, onSelect}) {
  return (
    <View style={styles.container}>
      <Header style={styles.topics} fontSize={30}>
        Discover
      </Header>
      <FlatList
        data={data}
        extraData={selected}
        style={{paddingLeft: 15}}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Item
            key={item.id}
            id={item.id}
            onSelect={onSelect}
            selected={!!selected.get(item.id)}>
            {uppercaseLetter(item.topic)}
          </Item>
        )}
      />
    </View>
  );
}

export default Topic;
