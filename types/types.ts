export const enum Environments {
  Development = 'development',
  Test = 'test',
  Production = 'production',
}

export const enum Locales {
  En = 'en',
  Ru = 'ru',
  He = 'he',
}

export enum AppFinalStates {
  STANDBY = 'STANDBY',
  INITIALIZED = 'INITIALIZED',
  RUNNING = 'RUNNING',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR',
}

export interface QuestionRecord {
  question: string;
  options: string[];
  answer: number;
}

export interface QuestionsData {
  questions: string[];
  options: string[][];
  answers: number[];
}
