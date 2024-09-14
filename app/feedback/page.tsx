import styles from './Page.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function AboutPage() {
  return (
    <div className={cx('page-wrapper')}>
      Send your feedback to vyachowski@yandex.ru
    </div>
  );
}
