import React, {useState, useCallback, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from '../config/axios';

function BookItem({id, title, selected, onSelect, source}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[styles.item, {backgroundColor: selected ? '#ccc' : '#f1f1f1'}]}>
      {source && (
        <Image
          style={styles.cover}
          source={{uri: source['media-metadata'][0].url}}
        />
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const API_KEY = '6AguAVrvzR153CfpvEEdatYlTGOSNRdV';

function BookList() {
  const [selected, setSelected] = useState(new Map());

  // Fetching Item state...
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get(
        `mostpopular/v2/shared/1/facebook.json?api-key=${API_KEY}`,
      );
      const data = await response.data.results;
      setData(data);
    } catch (error) {
      setError('Something went wrong in the server.');
    } finally {
      setLoading(false);
    }
  }

  function refreshItem() {
    fetchData();
  }

  const onSelect = useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>NYTimes Best Seller Books</Text>
      <FlatList
        refreshing={loading}
        onRefresh={() => refreshItem()}
        data={data}
        keyExtractor={item => item.id}
        extraData={selected}
        renderItem={({item}) => (
          <BookItem
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
            source={item.media[0]}
          />
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
  container: {
    width: '100%',
    flex: 1,
  },
  item: {
    flex: 1,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    paddingTop: 20,
    paddingBottom: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    flex: 4,
  },
  cover: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default BookList;
