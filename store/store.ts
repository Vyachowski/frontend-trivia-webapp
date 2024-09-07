import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    appState: 'standby',
  },
  reducers: {
    setInitializedState: (state) => {
      state.appState = 'initialized';
    },
  },
});

export const { setInitializedState } = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
