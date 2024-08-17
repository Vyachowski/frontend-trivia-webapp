import Image from 'next/image';
import styles from './styles/Page.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <section className={cx('page-wrapper')}>
        <div className={cx('scoreboard')}>
          <h2 className={cx('scoreboard-title')}></h2>
          <ul className={cx('scoreboard-list')}>
            <li className={cx('scoreboard')}>
              <Image width={100} height={100} src="" alt="Test." />
              <span>user 1</span>
            </li>
          </ul>
        </div>
        <div className={cx('game')}>
          <header className={cx('hints-wrapper')}>
            <ul className={cx('hints')}>
              <li className={cx('hint')}>
                <button
                  className={cx('hint-button')}
                  type="button"
                  // onClick={() => console.log('Hint clicked!')}
                >
                  50:50
                </button>
              </li>
              <li className={cx('hint')}>
                <button
                  className={cx('hint-button')}
                  type="button"
                  // onClick={() => console.log('Hint clicked!')}
                >
                  <span className="visually-hidden">Chat it!</span>
                </button>
              </li>
              <li className={cx('hint')}>
                <button
                  className={cx('hint-button')}
                  type="button"
                  // onClick={() => console.log('Hint clicked!')}
                >
                  <span className="visually-hidden">Google it!</span>
                </button>
              </li>
            </ul>
          </header>
        </div>
        <div className={cx('progress')}></div>
      </section>
      <section className={cx('question-answers')}>
        <dl className={cx('question-answers-list')}>
          <dt className={cx('question')}>13</dt>
          <dd className={cx('answer')}>123</dd>
          <dd className={cx('answer')}>123</dd>
          <dd className={cx('answer')}>123</dd>
          <dd className={cx('answer')}>123</dd>
        </dl>
      </section>
    </>
  );
}
