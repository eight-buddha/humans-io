import * as FileSystem from 'expo-file-system';

import { humanSlice } from './humanSlice';

export const addHuman = (name, image) => {
  return async dispatch => {
    dispatch(humanSlice.actions.prepareImageCopy);
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      dispatch(
        humanSlice.actions.imageCopySuccess({
          id: new Date().getTime(),
          name,
          image: newPath,
        }),
      );
    } catch (e) {
      dispatch(humanSlice.actions.imageCopyError(e));
    }
  };
};
