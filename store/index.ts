import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { ROUND_TIME } from '@/config';
import { GameStates, ModalTypes } from '@/types/types';

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    name: undefined as string | undefined,
    score: 0,
  },
  reducers: {
    setPlayerName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setPlayerScore(state, action: PayloadAction<number>) {
      state.score = action.payload;
    },
    resetPlayerScore(state) {
      state.score = 0;
    },
  },
});

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    visible: false,
    type: ModalTypes.userName,
  },
  reducers: {
    openUserModal(state) {
      state.type = ModalTypes.userName;
      state.visible = true;
    },
    closeModal(state) {
      state.visible = false;
    },
  },
});

const roundSlice = createSlice({
  name: 'round',
  initialState: {
    count: 0,
    timeLeft: ROUND_TIME,
  },
  reducers: {
    tick(state) {
      state.timeLeft -= 1;
    },
    resetTimer(state) {
      state.timeLeft = ROUND_TIME;
    },
    increaseRoundCount(state) {
      state.count += 1;
    },
  },
});

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    state: GameStates.Running,
  },
  reducers: {
    setWinStatus(state) {
      state.state = GameStates.Win;
    },
    setLostStatus(state) {
      state.state = GameStates.Lost;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(roundSlice.actions.tick, (state, action) => {
      console.log(state, action);
    });
  },
});

export const { setWinStatus, setLostStatus } = gameSlice.actions;
export const { setPlayerName, setPlayerScore, resetPlayerScore } =
  playerSlice.actions;
export const { increaseRoundCount, tick, resetTimer } = roundSlice.actions;
export const { openUserModal, closeModal } = modalSlice.actions;

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    player: playerSlice.reducer,
    round: roundSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
