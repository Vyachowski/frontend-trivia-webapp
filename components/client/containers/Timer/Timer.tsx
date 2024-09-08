'use client';

import {
  resetTime,
  startGame,
  tick,
  useAppDispatch,
  useAppSelector,
} from '@/store';
import styles from './Timer.module.scss';
import classNames from 'classnames/bind';
import { AppStates, GameStates } from '@/types/types';
import { useEffect } from 'react';
import { ClientProvider } from '../../store/ClientProvider';

const cx = classNames.bind(styles);

const TimerComponent = () => {
  const dispatch = useAppDispatch();
  const isAppRunning =
    useAppSelector((state) => state.app.status) === AppStates.RUNNING;
  const isGameRunning =
    useAppSelector((state) => state.game.gameState) === GameStates.ROUND;
  const timeLeft = useAppSelector((state) => state.game.timeLeft);

  useEffect(() => {
    if (isAppRunning) {
      dispatch(startGame());
    }
  }, [isAppRunning, dispatch]);

  useEffect(() => {
    if (isGameRunning) {
      const intervalId = setInterval(() => {
        dispatch(tick());
      }, 1000);

      return () => {
        clearInterval(intervalId);
        dispatch(resetTime());
      };
    }
  }, [dispatch, isGameRunning]);

  return (
    <div className={cx('timer')}>
      <p className={cx('time')}>{timeLeft}</p>
    </div>
  );
};

export const Timer = () => (
  <ClientProvider>
    <TimerComponent />
  </ClientProvider>
);
