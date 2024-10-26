'use client';

import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import { useAppDispatch, useAppSelector } from '@/store';
import { ModalTypes } from '@/types/types';
import { useState } from 'react';
import { PROGRESS_LADDER } from '@/config';
const cx = classNames.bind(styles);

export const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<undefined | string>(undefined);
  const { visible, type } = useAppSelector((state) => state.modal);
  const score = useAppSelector((state) => state.player.score);

  const renderModalContent = (type: ModalTypes | null) => {
    switch (type) {
      case ModalTypes.userName:
        return (
          <>
            <div className={cx('header')}>
              <h2 className={cx(['title'])}>Enter your name or nickname</h2>
            </div>
            <div className={cx('body')}>
              <label className={cx('label')}>
                <input
                  className={cx('input')}
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  data-1p-ignore
                />
              </label>
            </div>
            <div className={cx('footer')}>
              <button
                className={cx('submit-button')}
                type="button"
                onClick={() => console.log('Uiiiii')}
              >
                Start game
              </button>
            </div>
          </>
        );
      case ModalTypes.lost:
        return (
          <>
            <div className={cx('header')}>
              <h2 className={cx(['title'])}>Not this time, Champ :(</h2>
            </div>
            <div className={cx('body')}>
              <p style={{ textAlign: 'center' }}>
                Your final score is: {PROGRESS_LADDER[score]}
              </p>
            </div>
            <div className={cx('footer')}>
              <button
                className={cx('submit-button')}
                type="button"
                // onClick={() => dispatch(startGame())}
              >
                Try again
              </button>
            </div>
          </>
        );
      case ModalTypes.win:
        return (
          <>
            <div className={cx('header')}>
              <h2 className={cx(['title'])}>Not this time, Champ :(</h2>
            </div>
            <div className={cx('body')}>
              <p>Your final score is: {PROGRESS_LADDER[score]}</p>
            </div>
            <div className={cx('footer')}>
              <button
                className={cx('submit-button')}
                type="button"
                // onClick={() => dispatch(setRunningStatus(username))}
              >
                Try again
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    visible && (
      <div className={cx(['modal', { isOpen: 'show' }])} tabIndex={-1}>
        <div className={cx('dialog')}>
          <div className={cx('content')}>{renderModalContent(type)}</div>
        </div>
      </div>
    )
  );
};
