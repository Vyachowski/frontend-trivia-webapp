'use client';

import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import { setRunningStatus, useAppDispatch, useAppSelector } from '@/store';
import { ModalTypes } from '@/types/types';
import { useState } from 'react';
const cx = classNames.bind(styles);

export const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<undefined | string>(undefined);
  const { isModalOpened, modalType } = useAppSelector(
    (state) => state.app.interface
  );

  const renderModalContent = (type: ModalTypes | null) => {
    switch (type) {
      case ModalTypes.USER_NAME:
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
                />
              </label>
            </div>
            <div className={cx('footer')}>
              <button
                className={cx('submit-button')}
                type="button"
                onClick={() => dispatch(setRunningStatus(username))}
              >
                Start game
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    isModalOpened && (
      <div className={cx(['modal', { isOpen: 'show' }])} tabIndex={-1}>
        <div className={cx('dialog')}>
          <div className={cx('content')}>{renderModalContent(modalType)}</div>
        </div>
      </div>
    )
  );
};
