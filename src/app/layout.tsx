'use client';

import localFont from "next/font/local";
import "../styles/globals.css";
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import Header from "@/components/header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ApolloProvider client={client}>
          <Header />
          <main>
            {children}
          </main>
        </ApolloProvider>
      </body>
    </html>
  );
}
