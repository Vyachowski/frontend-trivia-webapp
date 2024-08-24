import styles from './styles/Page.module.scss';
import classNames from 'classnames/bind';
import { GoogleTipIcon, GptTipIcon, TestImage } from './assets';
import { HIGHLIGHTED_STEPS, PROGRESS_LADDER } from './constants';
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
              <span>User 1</span>
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
          <div className={cx('timer-wrapper')}>
            <div className={cx('timer')}>
              <p className={cx('time')}>60</p>
            </div>
          </div>
        </div>
        <ul className={cx('progress-list')}>
          {PROGRESS_LADDER.map((step, index) => (
            <li
              className={cx([
                'progress-item',
                { 'progress-item--active': index === 0 },
              ])}
              key={step}
            >
              <span className={cx('progress-number')}>{index + 1}</span>
              <span
                className={cx([
                  'progress-text',
                  {
                    'progress-text--highlighted':
                      HIGHLIGHTED_STEPS.includes(index),
                  },
                ])}
              >
                {step}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section className={cx('question-answers')}>
        <dl className={cx('question-answers-list')}>
          <dt className={cx('question')}>Question</dt>
          <dd className={cx('answer1')}>
            <button type="button">Answer 1</button>
          </dd>
          <dd className={cx('answer2')}>
            <button type="button">Answer 2</button>
          </dd>
          <dd className={cx('answer3')}>
            <button type="button">Answer 3</button>
          </dd>
          <dd className={cx('answer4')}>
            <button type="button">Answer 4</button>
          </dd>
        </dl>
      </section>
    </>
  );
}
