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
  Standby = 'STANDBY',
  Initialized = 'INITIALIZED',
  Running = 'RUNNING',
  Error = 'ERROR',
}

export enum GameStates {
  Running = 'RUNNING',
  Win = 'WIN',
  Lost = 'LOST',
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
  userName = 'USER_NAME',
  lost = 'LOST',
  win = 'WIN',
}
