'use client';

import styles from './QuestionsAnswers.module.scss';
import classNames from 'classnames/bind';
import {
  startNewRound,
  setLostStatus,
  setWinStatus,
  useAppDispatch,
  useAppSelector,
  setPlayerScore,
} from '@/store';
import { GameStates } from '@/types/types';
import { PROGRESS_LADDER } from '@/config';

const cx = classNames.bind(styles);

export const QuestionsAnswers = ({ data }: any) => {
  const dispatch = useAppDispatch();

  const { questions, options, answers } = data;

  const currentRoundIndex = useAppSelector((state) => state.round.count);
  const isRoundGoing =
    useAppSelector((state) => state.game.state) === GameStates.Start;

  const handleAnswerClick = (answerNumber: number) => {
    const isAnswerRight = answerNumber === answers[currentRoundIndex];
    const lastRound = currentRoundIndex === PROGRESS_LADDER.length;
    const scoreForRightAnswer = PROGRESS_LADDER[currentRoundIndex];

    if (isAnswerRight && lastRound) {
      dispatch(setWinStatus());
    } else if (isAnswerRight) {
      dispatch(startNewRound());
      dispatch(setPlayerScore(scoreForRightAnswer));
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
