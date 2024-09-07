import { AppFinalStates } from '@/types/types';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const appSlice = createSlice({
  name: 'app',
  initialState: AppFinalStates.STANDBY,
  reducers: {
    setInitializedState: () => {
      return AppFinalStates.INITIALIZED;
    },
  },
});

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setInitializedState, (_, action) => {
      return [...(action?.payload?.questions || [])];
    });
  },
});

export const optionsSlice = createSlice({
  name: 'options',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setInitializedState, (_, action) => {
      return [...(action?.payload?.options || [])];
    });
  },
});

export const answerSlice = createSlice({
  name: 'answers',
  initialState: [] as number[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setInitializedState, (_, action) => {
      return [...(action?.payload?.answers || [])];
    });
  },
});

export const { setInitializedState } = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    questions: questionsSlice.reducer,
    options: optionsSlice.reducer,
    answers: answerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
