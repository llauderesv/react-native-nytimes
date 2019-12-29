import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 2,
    zIndex: 999,
    marginLeft: 20,
  },
  item: {
    height: '100%',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  title: {
    flex: 2,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cover: {
    height: '100%',
    marginHorizontal: 5,
    justifyContent: 'flex-end',
  },
  section: {
    alignSelf: 'baseline',
    marginBottom: 10,
  },
  publishedDate: {
    color: '#f1f1f1',
    fontSize: 15,
    flex: 1,
  },
  topStories: {
    marginTop: 10,
    marginBottom: 10,
  },
});
