import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.scss';

import { Header } from '@/app/components/Header/Header';

const roboto = Roboto({ weight: ['400', '500'], subsets: ['latin'] });

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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
