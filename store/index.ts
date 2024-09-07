import { AppFinalStates, ModalTypes, QuestionsData } from '@/types/types';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    status: AppFinalStates.STANDBY as AppFinalStates,
    interface: {
      isModalOpened: false as boolean,
      modalType: null as null | ModalTypes,
    },
    user: undefined as undefined | string,
    progress: 0,
  },
  reducers: {
    setInitializedStatus: (state, _: PayloadAction<QuestionsData>) => {
      state.status = AppFinalStates.INITIALIZED;
      state.interface.isModalOpened = true;
      state.interface.modalType = ModalTypes.USER_NAME;
    },
    setRunningStatus: (state, action) => {
      state.status = AppFinalStates.RUNNING;
      state.interface.isModalOpened = false;
      state.interface.modalType = null;
      state.user = action.payload;
    },
    increaseProgressStep: (state) => {
      state.progress += 1;
    },
    setFinishedStatus: (state) => {
      state.status = AppFinalStates.FINISHED;
    },
  },
});

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: [] as string[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setInitializedStatus,
      (_, action: PayloadAction<QuestionsData>) => {
        return [...(action?.payload?.questions || [])];
      }
    );
  },
});

export const optionsSlice = createSlice({
  name: 'options',
  initialState: [] as string[][],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setInitializedStatus,
      (_, action: PayloadAction<QuestionsData>) => {
        return [...(action?.payload?.options || [])];
      }
    );
  },
});

export const answerSlice = createSlice({
  name: 'answers',
  initialState: [] as number[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setInitializedStatus,
      (_, action: PayloadAction<QuestionsData>) => {
        return [...(action?.payload?.answers || [])];
      }
    );
  },
});

export const { setInitializedStatus, setRunningStatus } = appSlice.actions;

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
