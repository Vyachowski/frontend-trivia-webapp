import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: {
    type: '', // about, hallOfFame
    isOpen: false,
  }
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    example: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export default uiSlice.reducer;
