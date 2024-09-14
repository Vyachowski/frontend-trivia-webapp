'use client';

import styles from './QuestionsAnswers.module.scss';
import classNames from 'classnames/bind';
import {
  increaseProgressStep,
  setLostStatus,
  setWinStatus,
  useAppDispatch,
  useAppSelector,
} from '@/store';
import { GameStates } from '@/types/types';
import { PROGRESS_LADDER } from '@/config';

const cx = classNames.bind(styles);

export const QuestionsAnswers = () => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.questions);
  const options = useAppSelector((state) => state.options);
  const answers = useAppSelector((state) => state.answers);
  const currentRoundIndex = useAppSelector((state) => state.game.progress);
  const isRoundGoing =
    useAppSelector((state) => state.game.gameState) === GameStates.ROUND;

  const handleAnswerClick = (answerNumber: number) => {
    const isAnswerRight = answerNumber === answers[currentRoundIndex];
    const lastRound = currentRoundIndex === PROGRESS_LADDER.length;

    if (isAnswerRight && lastRound) {
      dispatch(setWinStatus());
    } else if (isAnswerRight) {
      dispatch(increaseProgressStep());
    } else {
      dispatch(setLostStatus());
    }
  };

  return (
    <dl className={cx('question-answers-list')}>
      <dt className={cx('question')}>{questions[currentRoundIndex]}</dt>
      <dd className={cx('answer1')}>
        <button
          className={cx('hint-button')}
          type="button"
          onClick={() => handleAnswerClick(0)}
          disabled={!isRoundGoing}
        >
          {options[currentRoundIndex][0]}
        </button>
      </dd>
      <dd className={cx('answer2')}>
        <button
          className={cx('hint-button')}
          type="button"
          onClick={() => handleAnswerClick(1)}
          disabled={!isRoundGoing}
        >
          {options[currentRoundIndex][1]}
        </button>
      </dd>
      <dd className={cx('answer3')}>
        <button
          className={cx('hint-button')}
          type="button"
          onClick={() => handleAnswerClick(2)}
          disabled={!isRoundGoing}
        >
          {options[currentRoundIndex][2]}
        </button>
      </dd>
      <dd className={cx('answer4')}>
        <button
          className={cx('hint-button')}
          type="button"
          onClick={() => handleAnswerClick(3)}
          disabled={!isRoundGoing}
        >
          {options[currentRoundIndex][3]}
        </button>
      </dd>
    </dl>
  );
};
