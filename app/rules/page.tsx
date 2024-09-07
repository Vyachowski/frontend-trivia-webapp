import styles from './Page.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function AboutPage() {
  return (
    <div className={cx('page-wrapper')}>Here is an info about the app!</div>
  );
}
