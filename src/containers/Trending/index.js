import React, {useMemo} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {useDynamicStyleSheet} from 'react-native-dark-mode';
import {API_KEY} from '../../config/axios';
import useFetch from '../../hooks/useFetch';
import Header from '../../components/Header';
import LoadingIndicator from '../../components/LoadingIndicator';
import Item from './Item';
import dynamicStyles from './style';

function TopTrending() {
  const styles = useDynamicStyleSheet(dynamicStyles);

  const {data, loading, fetch} = useFetch(
    `mostpopular/v2/viewed/1.json?api-key=${API_KEY}`,
    [],
  );

  const filteredNoImage = useMemo(
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
          data={filteredNoImage}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
          renderItem={({item}) => (
            <Item
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

export default TopTrending;
