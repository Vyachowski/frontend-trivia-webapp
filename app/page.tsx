import styles from './styles/Page.module.scss';
import classNames from 'classnames/bind';
import { GoogleTipIcon, GptTipIcon, TestImage } from './assets';
const cx = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <section className={cx('page-wrapper')}>
        <div className={cx('scoreboard')}>
          <h2 className={cx('scoreboard-title')}>Scoreboard</h2>
          <ul className={cx('scoreboard-list')}>
            <li className={cx('scoreboard-item')}>
              <div className={cx('scoreboard-image')}>
                <TestImage />
              </div>
              <span>user 1</span>
            </li>
          </ul>
        </div>
        <div className={cx('game')}>
          <div className={cx('hints-wrapper')}>
            <ul className={cx('hint-list')}>
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
                  <GptTipIcon />
                </button>
              </li>
              <li className={cx('hint')}>
                <button
                  className={cx('hint-button')}
                  type="button"
                  // onClick={() => console.log('Hint clicked!')}
                >
                  <GoogleTipIcon />
                  <span className="visually-hidden">Google it!</span>
                </button>
              </li>
            </ul>
          </div>
          <div className={cx('timer')}>
            <p className={cx('time')}>30</p>
          </div>
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
