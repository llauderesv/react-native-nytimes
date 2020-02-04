import React, {useContext, memo} from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import {useDynamicStyleSheet} from 'react-native-dark-mode';
import {time} from '../../utils';
import MainContext from '../../context/MainContext';
import Tag from '../../components/Tag';
import dynamicStyles from './style';

function Item({title, img, section, published_date, uri}) {
  const styles = useDynamicStyleSheet(dynamicStyles);
  const {navigation} = useContext(MainContext);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Details', {uri})}>
      <Image style={styles.thumbnail} source={{uri: img}} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.updatedDate}>
          Published {time(published_date).format('MMMM DD,YYYY')}
        </Text>
        <Tag section={section} />
      </View>
    </TouchableOpacity>
  );
}

export default memo(Item);
