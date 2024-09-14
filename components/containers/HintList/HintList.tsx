'use client';

import styles from './HintList.module.scss';
import classNames from 'classnames/bind';
import { GoogleTipIcon, GptTipIcon } from '@/assets';
const cx = classNames.bind(styles);

export const HintList = () => (
  <ul className={cx('hint-list')}>
    <li className={cx('hint')}>
      <button className={cx('hint-button')} type="button" onClick={console.log}>
        50:50
      </button>
    </li>
    <li className={cx('hint')}>
      <button className={cx('hint-button')} type="button">
        <span className="visually-hidden">Chat it!</span>
        <GptTipIcon />
      </button>
    </li>
    <li className={cx('hint')}>
      <button className={cx('hint-button')} type="button">
        <GoogleTipIcon />
        <span className="visually-hidden">Google it!</span>
      </button>
    </li>
  </ul>
);
