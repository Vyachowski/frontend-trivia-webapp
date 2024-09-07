'use client';

import { FC, ReactNode } from 'react';

export const ClientProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
