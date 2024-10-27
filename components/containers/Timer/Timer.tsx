'use client';

import { setLostStatus, tick, useAppDispatch, useAppSelector } from '@/store';
import styles from './Timer.module.scss';
import classNames from 'classnames/bind';
import { AppStates, GameStates } from '@/types/types';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

export const Timer = () => {
  const dispatch = useAppDispatch();

  const isGameRunning =
    useAppSelector((state) => state.game.state) === GameStates.Start;
  const timeLeft = useAppSelector((state) => state.round.timeLeft);

  useEffect(() => {
    if (isGameRunning) {
      const intervalId = setInterval(() => {
        dispatch(tick());
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [dispatch, isGameRunning]);

  return (
    <div className={cx('timer')}>
      <p className={cx('time')}>{timeLeft}</p>
    </div>
  );
};
