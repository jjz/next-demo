import './globals.css';
import { Inter } from 'next/font/google';
import { CookiesProvider } from 'next-client-cookies/server';
import ClientIntlProvider from './ClientIntlProvider';

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
          <ClientIntlProvider>
            {children}
          </ClientIntlProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}