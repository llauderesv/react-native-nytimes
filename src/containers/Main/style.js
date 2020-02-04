import {DynamicStyleSheet, DynamicValue} from 'react-native-dark-mode';

export default new DynamicStyleSheet({
  main: {
    flex: 1,
    backgroundColor: new DynamicValue('white', 'black'),
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#326AF4',
    borderBottomLeftRadius: 25,
    zIndex: 998,
  },
  topTrendingContainer: {
    flex: 1,
    paddingTop: 90,
  },
});
