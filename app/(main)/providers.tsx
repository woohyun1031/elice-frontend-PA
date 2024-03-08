'use client';

import React, { Suspense } from 'react';
import { Footer, Header } from '@components/common';
import { useSearchParams } from 'next/navigation';
import { PaginationContext } from '@contexts/contexts';

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
