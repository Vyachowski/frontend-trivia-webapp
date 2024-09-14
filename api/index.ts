import { PROGRESS_LADDER } from '@/config';
import questions from './db.json';
import { QuestionRecord, QuestionsData } from '@/types/types';

const getQuestionsAndAnswers = (data: QuestionRecord[]) => {
  if (data?.length === PROGRESS_LADDER.length) {
    return questions;
  }

  throw new Error('Game questions is not a valid data');
};

const getGameDataFromJson = () => getQuestionsAndAnswers(questions);

const normalizeGameData = (data: QuestionRecord[]) =>
  data.reduce<QuestionsData>(
    (acc, dataset) => {
      acc.questions.push(dataset.question);
      acc.options.push(dataset.options);
      acc.answers.push(dataset.answer);

      return acc;
    },
    {
      questions: [],
      options: [],
      answers: [],
    }
  );

const data = getGameDataFromJson();
const normalizedData = normalizeGameData(data);

export default normalizedData;
