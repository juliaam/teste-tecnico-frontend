import type { Metadata } from 'next';
import '../styles/globals.css';
import { inter } from '../styles/fonts';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Teste técnico - Júlia',
  description: 'Frontend',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-dvh py-5 flex flex-col gap-5">
          <Header />
          <main className="mx-14">{children}</main>
        </div>
      </body>
    </html>
  );
}
