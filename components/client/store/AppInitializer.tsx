'use client';

import { FC } from 'react';
import { useAppDispatch } from '@/store/store';
import { setInitializedState } from '@/store/store';
import { ClientProvider } from './ClientProvider';
import { QuestionsData } from '@/types/types';

export const AppInitializer: FC<{ data: QuestionsData }> = ({ data }) => {
  const Initializer = () => {
    const dispatch = useAppDispatch();
    void dispatch(setInitializedState(data));

    return null;
  };

  return (
    <ClientProvider>
      <Initializer />
    </ClientProvider>
  );
};
