import type { Metadata } from 'next';
import './styles/globals.css';
import { inter } from './styles/fonts';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
