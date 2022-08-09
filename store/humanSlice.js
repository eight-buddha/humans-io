import { createSlice } from '@reduxjs/toolkit';

import Human from '../models/human';

export const humanSlice = createSlice({
  name: 'human',
  initialState: {
    humans: [],
    loading: false,
    error: '',
  },
  reducers: {
    prepareImageCopy(state) {
      state.loading = true;
    },
    imageCopySuccess(state, action) {
      state.loading = false;
      state.error = '';
      state.humans.push(new Human(action.payload.id, action.payload.name, action.payload.image));
    },
    imageCopyError(state, action) {
      state.loading = false;
      state.error = action.message;
    },
  },
});

export default humanSlice.reducer;
