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

export enum AppStates {
  STANDBY = 'STANDBY',
  INITIALIZED = 'INITIALIZED',
  RUNNING = 'RUNNING',
  ERROR = 'ERROR',
}

export enum GameStates {
  PAUSE = 'PAUSE',
  ROUND = 'ROUND',
  WIN = 'WIN',
  LOST = 'LOST',
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

export enum ModalTypes {
  USER_NAME = 'USER_NAME',
  LOST = 'LOST',
  WIN = 'WIN',
}
