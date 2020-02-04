import {DynamicStyleSheet, DynamicValue} from 'react-native-dark-mode';

export default new DynamicStyleSheet({
  loadingContainer: {
    zIndex: 999,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    width: '100%',
  },
  loadingIndicator: {
    alignSelf: 'center',
    width: '30%',
    borderRadius: 5,
    padding: 20,
    backgroundColor: new DynamicValue(
      'rgba(0,0,0,0.6)',
      'rgba(255,255,255,0.3)',
    ),
  },
});
