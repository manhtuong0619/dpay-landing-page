import { Metadata } from 'next';

import Layout from '@/components/layout';
import { appConfigs } from '@/config/app-config';

import './globals.scss';

export const metadata: Metadata = {
  title: 'DPay',
  description: 'Fast, Secure, and Modern Digital Payment PWA',
  keywords: ['DPay', 'Digital Payment', 'PWA', 'QR Payment', 'Web3', 'Crypto Payment', 'Somnia', 'Wallet'],
  openGraph: {
    title: 'DPay - Digital Payment Solution',
    description: 'Fast, Secure, and Modern Digital Payment PWA',
    url: appConfigs.hostURL,
    siteName: 'DPay',
    images: [
      {
        url: `${appConfigs.hostURL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'DPay Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DPay - Digital Payment Solution',
    description: 'Fast, Secure, and Modern Digital Payment PWA',
    images: {
      url: `${appConfigs.hostURL}/og-image.png`,
      alt: 'DPay Logo',
      width: 1200,
      height: 630,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-[#FFF]">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
