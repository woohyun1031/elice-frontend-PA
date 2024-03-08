'use client';

import React, { createContext, Suspense } from 'react';
import { Footer, Header } from '@components/common';
import { useSearchParams } from 'next/navigation';

export const PaginationContext = createContext({
  offset: 0,
  setOffset: (value: any) => {},
});

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const searchParams = useSearchParams();
  const [offsetCnt, setOffsetCnt] = React.useState(0);

  React.useEffect(() => {
    setOffsetCnt(0);
  }, [searchParams]);

  return (
    <Suspense>
      <PaginationContext.Provider
        value={{ offset: offsetCnt, setOffset: setOffsetCnt }}
      >
        <Header />
        {children}
        <Footer />
      </PaginationContext.Provider>
    </Suspense>
  );
}
