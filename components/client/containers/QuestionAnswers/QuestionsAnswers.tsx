'use client';

import { useEffect, useState } from 'react';
import styles from './QuestionsAnswers.module.scss';
import classNames from 'classnames/bind';
import {
  increaseProgressStep,
  resetTime,
  useAppDispatch,
  useAppSelector,
} from '@/store';
import { ClientProvider } from '../../store/ClientProvider';

const cx = classNames.bind(styles);

export const QuestionsAnswersComponent = () => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.questions);
  const options = useAppSelector((state) => state.options);
  const answers = useAppSelector((state) => state.answers);
  const currentRoundIndex = useAppSelector((state) => state.game.progress);
  console.log(currentRoundIndex);

  const handleAnswerClick = (answerNumber: number) => {
    if (answerNumber === answers[currentRoundIndex]) {
      dispatch(resetTime());
      dispatch(increaseProgressStep());
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
        >
          {options[currentRoundIndex][0]}
        </button>
      </dd>
      <dd className={cx('answer2')}>
        <button
          className={cx('hint-button')}
          type="button"
          onClick={() => handleAnswerClick(1)}
        >
          {options[currentRoundIndex][1]}
        </button>
      </dd>
      <dd className={cx('answer3')}>
        <button
          className={cx('hint-button')}
          type="button"
          onClick={() => handleAnswerClick(2)}
        >
          {options[currentRoundIndex][2]}
        </button>
      </dd>
      <dd className={cx('answer4')}>
        <button
          className={cx('hint-button')}
          type="button"
          onClick={() => handleAnswerClick(3)}
        >
          {options[currentRoundIndex][3]}
        </button>
      </dd>
    </dl>
  );
};

export const QuestionsAnswers = () => (
  <ClientProvider>
    <QuestionsAnswersComponent />
  </ClientProvider>
);
