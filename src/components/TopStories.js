import React, {useContext, memo, useMemo} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import moment from 'moment';
import {API_KEY} from '../config/axios';
import useFetch from '../hooks/useFetch';
import MainContext from '../context/MainContext';
import Header from './Header';
import Tag from './Tag';
import LoadingIndicator from './LoadingIndicator';

function Item({title, img, section, published_date, uri}) {
  const {navigation} = useContext(MainContext);
  return (
    <ImageBackground
      source={img}
      style={styles.cover}
      imageStyle={{borderRadius: 8, opacity: 1}}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', {uri})}>
        <Tag section={section} style={styles.section} />
        <Text numberOfLines={2} style={styles.title}>{title}</Text>
        <Text numberOfLines={1} style={styles.publishedDate}>
          {moment(published_date).format('MMMM DD,YYYY')}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

// Create a memoized version of Item
const MemoizedItem = memo(Item);

function TopStories({topic}) {
  const {data, loading} = useFetch(
    `topstories/v2/${topic}.json?api-key=${API_KEY}`,
    [],
    topic,
  );

  const filteredData = useMemo(
    () => data.filter(item => item.multimedia.length > 0),
    [data],
  );

  return (
    <View style={styles.container}>
      <View style={styles.topStories}>
        <Header fontSize={25}>Top Stories</Header>
      </View>
      <View style={styles.wrapper}>
        {loading && <LoadingIndicator />}
        <FlatList
          horizontal={true}
          keyExtractor={item => item.url}
          extraData={topic}
          data={filteredData}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <MemoizedItem
              key={item.url}
              uri={item.url}
              section={item.section}
              title={item.title}
              published_date={new Date(item.published_date).toISOString()}
              img={item.multimedia.filter(item => item.format === 'superJumbo')}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    zIndex: 999,
  },
  wrapper: {},
  item: {
    height: '100%',
    borderRadius: 8,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  title: {
    marginBottom: 5,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cover: {
    width: 350,
    height: 180,
    marginHorizontal: 5,
  },
  section: {
    marginTop: 30,
    marginBottom: 10,
  },
  publishedDate: {
    color: '#f1f1f1',
    fontSize: 15,
  },
  topStories: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default TopStories;
