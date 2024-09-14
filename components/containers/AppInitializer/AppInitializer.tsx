'use client';

import { FC } from 'react';
import { useAppDispatch } from '@/store';
import { setInitializedStatus } from '@/store';
import { QuestionsData } from '@/types/types';

export const AppInitializer: FC<{ data: QuestionsData }> = ({ data }) => {
  const dispatch = useAppDispatch();
  void dispatch(setInitializedStatus(data));

  return null;
};
