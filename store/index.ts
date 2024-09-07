import {
  AppStates,
  GameStates,
  ModalTypes,
  QuestionsData,
} from '@/types/types';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    status: AppStates.STANDBY as AppStates,
    user: undefined as undefined | string,
  },
  reducers: {
    setInitializedStatus: (state, _: PayloadAction<QuestionsData>) => {
      state.status = AppStates.INITIALIZED;
    },
    setRunningStatus: (state, action) => {
      state.status = AppStates.RUNNING;
      state.user = action.payload;
    },
  },
});

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState: {
    isModalOpened: false as boolean,
    modalType: null as null | ModalTypes,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setInitializedStatus, (state) => {
      state.isModalOpened = true;
      state.modalType = ModalTypes.USER_NAME;
    }),
      builder.addCase(setRunningStatus, (state) => {
        state.isModalOpened = false;
        state.modalType = null;
      });
  },
});

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    timeLeft: 60,
    gameState: GameStates.PAUSE,
    progress: 0,
  },
  reducers: {
    tick(state) {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      } else {
        state.gameState = GameStates.LOST;
      }
    },
    resetTime(state) {
      state.timeLeft = 60;
    },
    win(state) {
      state.gameState = GameStates.WIN;
    },
    increaseProgressStep: (state) => {
      state.progress += 1;
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
export const { tick, resetTime, win } = gameSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    game: gameSlice.reducer,
    interface: interfaceSlice.reducer,
    questions: questionsSlice.reducer,
    options: optionsSlice.reducer,
    answers: answerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
