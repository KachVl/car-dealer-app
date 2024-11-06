import localFont from 'next/font/local';
import './globals.css';
import Head from 'next/head';
import { AppContextProvider } from '@/context/AppContext';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Car Dealer App',
  description: 'Created with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppContextProvider>
          <Header />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
