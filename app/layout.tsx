import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import '@/styles/globals.scss';

import { AppInitializer, ClientProvider } from '@/components';
import { Header } from '@/components';

import normalizedData from '@/api';

const roboto = Roboto({
  weight: ['100', '400', '500'],
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  description:
    "If you ready to check your knowledge and take the first place – let's go! Go throw fifteen questions with three tips and get your leaderboard position!",
  title: 'The Frontend King: Millionaire Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ClientProvider>
          <AppInitializer data={normalizedData} />
          <Header />
          <main style={{ paddingBlock: '42px' }}>{children}</main>
        </ClientProvider>
      </body>
    </html>
  );
}
