'use client';

import {
  openUserModal,
  setStartStatus,
  setLostStatus,
  useAppDispatch,
  useAppSelector,
  openLostModal,
} from '@/store';
import { GameStates } from '@/types/types';
import { FC, ReactNode, useEffect } from 'react';

export const App: FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();

  const gameState = useAppSelector((state) => state.game.state);
  const timeLeft = useAppSelector((state) => state.round.timeLeft);
  const playerName = useAppSelector((state) => state.player.name);

  useEffect(() => {
    if (playerName) {
      dispatch(setStartStatus());
    }
  }, [playerName, dispatch]);

  useEffect(() => {
    if (!playerName) {
      dispatch(openUserModal());
    }
  }, [playerName, dispatch]);

  useEffect(() => {
    if (timeLeft === 0 || gameState === GameStates.Lost) {
      dispatch(setLostStatus());
      dispatch(openLostModal());
    }
  }, [timeLeft, dispatch, gameState]);

  return children;
};
