import React, {useMemo} from 'react';
import {FlatList, View} from 'react-native';
import {API_KEY} from '../../config/axios';
import useFetch from '../../hooks/useFetch';
import Header from '../../components/Header';
import LoadingIndicator from '../../components/LoadingIndicator';
import Item from './Item';
import styles from './style';

function TopStories({topic}) {
  const {data, loading} = useFetch(
    `topstories/v2/${topic}.json?api-key=${API_KEY}`,
    [],
    topic,
  );

  const filteredData = useMemo(
    () =>
      data.filter(
        item => Array.isArray(item.multimedia) && item.multimedia.length > 0,
      ),
    [data],
  );

  return (
    <View style={styles.container}>
      <View style={styles.topStories}>
        <Header fontSize={25}>Top Stories</Header>
      </View>
      <View>
        {loading && <LoadingIndicator />}
        <FlatList
          horizontal={true}
          keyExtractor={item => item.url}
          extraData={topic}
          data={filteredData}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Item
              key={item.url}
              uri={item.url}
              section={item.section}
              title={item.title}
              published_date={item.published_date}
              img={item.multimedia.filter(item => item.format === 'superJumbo')}
            />
          )}
        />
      </View>
    </View>
  );
}

export default TopStories;
