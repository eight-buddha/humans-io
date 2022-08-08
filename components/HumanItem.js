import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import Text from '../components/Text';

const HumanItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.item}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <Text variant="h1" numberOfLines={1} style={styles.name}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    borderBottomColor: '#d1d5db',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#cccccc',
    borderColor: '#9ca3af',
    borderWidth: 1,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato_700Bold',
    color: '#3f3f46',
    paddingLeft: 15,
  },
});

export default HumanItem;
