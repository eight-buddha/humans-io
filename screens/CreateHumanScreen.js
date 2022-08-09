import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import ImagePicker from '../components/ImagePicker';
import TextInput from '../components/TextInput';
import { addHuman } from '../store/humanAction';

const CreateHumanScreen = props => {
  const [humanName, setHumanName] = useState('');
  const [image, setImage] = useState('');
  const { navigation } = props;

  const dispatch = useDispatch();

  const imageTakenHandler = useCallback(imagePath => {
    setImage(imagePath);
  }, []);

  const handleSave = useCallback(() => {
    dispatch(addHuman(humanName, image));
    navigation.navigate('Main');
  }, [dispatch, humanName, image, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ImagePicker onImageTaken={imageTakenHandler} />

        <TextInput placeholder="Human name" onChangeText={name => setHumanName(name)} />
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
};

CreateHumanScreen.navigationOptions = {
  headerTitle: 'Add New Human',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  innerContainer: {
    paddingHorizontal: 8,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#a3a3a3',
  },
});

export default CreateHumanScreen;
