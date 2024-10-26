import styles from './Page.module.scss';
import classNames from 'classnames/bind';
import { TestImage } from '@/assets';

import { ClientProvider, ProgressList, Timer } from '@/components';
import { HintList } from '@/components';
import { Modal } from '@/components';
import { QuestionsAnswers } from '@/components';

import normalizedData from '@/api';

const cx = classNames.bind(styles);

const { questions, options, answers } = normalizedData;

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
            <HintList />
          </div>
          <div className={cx('timer-wrapper')}>
            <Timer />
          </div>
        </div>
        <ProgressList />
      </section>
      <section className={cx('question-answers')}>
        <QuestionsAnswers data={normalizedData} />
      </section>
      <ClientProvider>
        <Modal />
      </ClientProvider>
    </>
  );
}
