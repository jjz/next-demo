import './globals.css';
import { Inter } from 'next/font/google';
import { CookiesProvider } from 'next-client-cookies/server';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <CookiesProvider>
          {children}
        </CookiesProvider>
      </body>
    </html>
  );
} 