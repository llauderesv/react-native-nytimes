import React, {memo} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Header from './Header';

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

const MemoizedItem = memo(Item);

function Topic({data, selected, onSelect}) {
  return (
    <>
      <Header style={styles.topics}>Discover</Header>
      <FlatList
        data={data}
        extraData={selected}
        style={{paddingLeft: 15}}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <MemoizedItem
            key={item.id}
            id={item.id}
            onSelect={onSelect}
            selected={!!selected.get(item.id)}>
            {item.topic.slice(0, 1).toLocaleUpperCase() + item.topic.slice(1)}
          </MemoizedItem>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#A1A4AA',
    fontSize: 20,
  },
  item: {
    borderBottomWidth: 3,
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    marginVertical: 8,
    paddingHorizontal: 15,
  },
  topics: {
    paddingLeft: 20,
  },
});

export default Topic;
