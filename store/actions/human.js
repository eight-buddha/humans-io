import * as FileSystem from 'expo-file-system';

export const ADD_HUMAN = 'ADD_HUMAN';

export const addHuman = (name, image) => {
  return async dispatch => {
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });

      dispatch({
        type: ADD_HUMAN,
        humanData: {
          id: new Date().getTime(),
          name,
          image: newPath,
        },
      });
    } catch (e) {
      console.log('Move error:', e);
      throw e;
    }
  };
};
