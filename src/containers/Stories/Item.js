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

const BASE_WIDTH = 75;
function Item({title, img, section, published_date, uri}) {
  const {navigation} = useContext(MainContext);

  const itemWidth = useMemo(
    () =>
      Math.round(((Dimensions.get('window').width - BASE_WIDTH) * 10) / 1000) *
      100,
    [BASE_WIDTH],
  );

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
