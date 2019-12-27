import React, {useContext, memo, useEffect, useCallback, useMemo} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import {API_KEY} from '../config/axios';
import useFetch from '../hooks/useFetch';
import MainContext from '../context/MainContext';
import LoadingIndicator from './LoadingIndicator';
import Header from './Header';
import Tag from './Tag';

function Item({title, img, section, published_date, uri}) {
  const {navigation} = useContext(MainContext);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Details', {uri})}>
      <Image style={styles.thumbnail} source={{uri: img}} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.updatedDate}>
          Published {moment(published_date).format('MMMM DD,YYYY')}
        </Text>
        <Tag section={section} />
      </View>
    </TouchableOpacity>
  );
}

const MemoizedItem = memo(Item);

function TopTrending() {
  const {data, loading, fetch} = useFetch(
    `mostpopular/v2/viewed/1.json?api-key=${API_KEY}`,
    [],
  );

  const filteredData = useMemo(
    () => data.filter(item => item.media.length > 0),
    [data],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header fontSize={25} style={styles.header}>
        Trending
      </Header>
      <View style={styles.wrapper}>
        {loading && <LoadingIndicator />}
        <FlatList
          refreshing={loading}
          onRefresh={fetch}
          keyExtractor={item => item.url}
          data={filteredData}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
          renderItem={({item}) => (
            <MemoizedItem
              key={item.id}
              uri={item.url}
              section={item.section}
              title={item.title}
              published_date={new Date(item.published_date).toISOString()}
              img={
                item.media[0]['media-metadata'].filter(
                  item => item.format === 'Standard Thumbnail',
                )[0].url
              }
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    color: '#000',
    marginBottom: 10,
  },
  wrapper: {
    height: '100%',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
  },
  thumbnail: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  content: {
    flex: 3,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  updatedDate: {
    color: '#A1A4AA',
    fontWeight: 'bold',
  },
  listSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default TopTrending;
