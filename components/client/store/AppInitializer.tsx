'use client';

import { FC } from 'react';
import { useAppDispatch } from '@/store/store';
import { setInitializedState } from '@/store/store';
import { ClientProvider } from './ClientProvider';

export const AppInitializer: FC<{ data: any }> = ({ data }) => {
  const Initializer = () => {
    const dispatch = useAppDispatch();
    dispatch(setInitializedState(data));
    return null;
  };

  return (
    <ClientProvider>
      <Initializer />
    </ClientProvider>
  );
};
