import styles from './Timer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const Timer = () => (
  <div className={cx('timer')}>
    <p className={cx('time')}>60</p>
  </div>
);
