'use client';

import styles from './HintList.module.scss';
import classNames from 'classnames/bind';
import { GoogleTipIcon, GptTipIcon } from '@/assets';
import { useAppSelector } from '@/store';
import { GameStates } from '@/types/types';

const cx = classNames.bind(styles);

export const HintList = () => {
  const isRoundGoing =
    useAppSelector((state) => state.game.state) === GameStates.Start;

  return (
    <ul className={cx('hint-list')}>
      <li className={cx('hint')}>
        <button
          className={cx('hint-button')}
          type="button"
          onClick={console.log}
          disabled={!isRoundGoing}
        >
          50:50
        </button>
      </li>
      <li className={cx('hint')}>
        <button
          className={cx('hint-button')}
          type="button"
          disabled={!isRoundGoing}
        >
          <span className="visually-hidden">Chat it!</span>
          <GptTipIcon />
        </button>
      </li>
      <li className={cx('hint')}>
        <button
          className={cx('hint-button')}
          type="button"
          disabled={!isRoundGoing}
        >
          <GoogleTipIcon />
          <span className="visually-hidden">Google it!</span>
        </button>
      </li>
    </ul>
  );
};
