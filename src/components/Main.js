import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainContext from '../context/MainContext';
import Topics from './Topics';
import TopStories from './TopStories';
import TopTrending from './TopTrending';
import Details from './Details';

const topics = [
  {id: 1, topic: 'technology'},
  {id: 2, topic: 'business'},
  {id: 3, topic: 'books'},
  {id: 4, topic: 'automobiles'},
  {id: 5, topic: 'fashion'},
  {id: 6, topic: 'food'},
  {id: 7, topic: 'health'},
  {id: 8, topic: 'science'},
  {id: 9, topic: 'movies'},
  {id: 10, topic: 'sundayreview'},
  {id: 11, topic: 'theater'},
  {id: 12, topic: 'nyregion'},
  {id: 13, topic: 'realestate'},
];

function Main({navigation}) {
  const [selected, setSelected] = useState(new Map());
  const [topic, setTopic] = useState(topics[0].topic);

  // Select Item in Flat list
  const onSelect = useCallback(
    id => {
      selected.clear();
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
      setTopic(topics.filter(item => item.id === id)[0].topic);
    },
    [selected],
  );

  useEffect(() => {
    onSelect(1);
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar barStyle="light-content" />

      <MainContext.Provider value={{navigation: navigation}}>
        {/* Discover */}
        <View style={styles.headerContainer}>
          <SafeAreaView>
            <Topics data={topics} onSelect={onSelect} selected={selected} />
            <TopStories topic={topic} />
          </SafeAreaView>
        </View>

        {/* Trending */}
        <View style={styles.topTrendingContainer}>
          <TopTrending />
        </View>
      </MainContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    flex: 2.5,
    backgroundColor: '#326AF4',
    borderBottomLeftRadius: 25,
    zIndex: 998,
  },
  topTrendingContainer: {
    paddingTop: 90,
    flex: 3,
  },
});

const AppNavigator = createStackNavigator({
  Main: {screen: Main, navigationOptions: {header: null}},
  Details: {
    screen: Details,
    navigationOptions: {
      headerStyle: {backgroundColor: '#326AF4'},
      headerTintColor: '#fff',
    },
  },
});

export default createAppContainer(AppNavigator);
