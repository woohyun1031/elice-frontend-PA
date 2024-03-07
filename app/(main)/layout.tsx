import '@styles/globals.css';
import React from 'react';
import Providers from './providers';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement {
  return (
    <html lang="ko">
      <head>
        <link
          rel="icon"
          href="https://cdn-api.elice.io/api-attachment/attachment/d7c98cc0b75644c8806b08c36604ac0c/%E1%84%8B%E1%85%A6%E1%86%AF%E1%84%8F%E1%85%A1%E1%84%83%E1%85%A6%E1%84%86%E1%85%B5%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9%2040x40.png"
          sizes="any"
        />
      </head>
      <body className="bg-body">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
