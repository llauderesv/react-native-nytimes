import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
  },
  header: {
    color: '#000',
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
    height: 90,
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
