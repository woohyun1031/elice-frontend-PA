'use client';

import React from 'react';
import { Footer, Header } from '@components/common';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
