'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 w-full justify-center bg-white px-6 py-3">
      <div className="mx-2 flex w-full flex-wrap items-center justify-between">
        <Link
          href="/edu"
          className="relative mr-6 flex h-full w-40 flex-shrink-0 cursor-pointer items-center"
        >
          <Image
            src="https://cdn-api.elice.io/api/file/58c7f7253d0c45b384e757953c1dcd55/%E1%84%8B%E1%85%A6%E1%86%AF%E1%84%8F%E1%85%A1%E1%84%83%E1%85%A6%E1%84%86%E1%85%B5_kr%404x.png?se=2100-12-31T00%3A00%3A00Z&sp=r&sv=2021-12-02&sr=b&sig=ambqFbUklwfxNCv8ohIXBGpyBwmE7AdZH9rKKTBg150%3D"
            alt="엘리스 아카데미"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </div>
    </header>
  );
}
