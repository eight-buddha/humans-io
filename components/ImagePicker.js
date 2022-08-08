import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const ImgPicker = props => {
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const [pickedImage, setPickedImage] = useState();

  const takeImageHandler = async () => {
    if (!status?.granted) {
      await requestPermission();
    } else {
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });
      setPickedImage(image.uri);
      props.onImageTaken(image.uri);
    }
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text>No image picked yet.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
    marginBottom: 15,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 200,
    overflow: 'hidden',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImgPicker;
