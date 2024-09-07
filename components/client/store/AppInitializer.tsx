'use client';

import { FC } from 'react';
import { useAppDispatch } from '@/store';
import { setInitializedStatus } from '@/store';
import { ClientProvider } from './ClientProvider';
import { QuestionsData } from '@/types/types';

export const AppInitializer: FC<{ data: QuestionsData }> = ({ data }) => {
  const Initializer = () => {
    const dispatch = useAppDispatch();
    void dispatch(setInitializedStatus(data));

    return null;
  };

  return (
    <ClientProvider>
      <Initializer />
    </ClientProvider>
  );
};
