import styles from './QuestionsAnswers.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const QuestionsAnswers = () => (
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
);
