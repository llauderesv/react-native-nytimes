import React, {useContext, useMemo, memo} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import MainContext from '../../context/MainContext';
import Tag from '../../components/Tag';
import styles from './style';
import {time} from '../../utils';

const DEVICE_WIDTH = Dimensions.get('window').width;

function Item({title, img, section, published_date, uri}) {
  const {navigation} = useContext(MainContext);

  // Get the width of item base on the size of the device window
  // to make it 1/4 width size
  const itemWidth = useMemo(() => Math.round(DEVICE_WIDTH / 1.3), [
    DEVICE_WIDTH,
  ]);

  return (
    <ImageBackground
      source={img}
      style={[styles.cover, {width: itemWidth}]}
      imageStyle={{borderRadius: 10}}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', {uri})}>
        <Tag section={section} style={styles.section} />
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.publishedDate}>
          {time(published_date).format('MMMM DD,YYYY')}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default memo(Item);
