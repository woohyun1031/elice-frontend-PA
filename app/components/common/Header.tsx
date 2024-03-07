'use client';

import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 w-full justify-center bg-white px-6 py-3">
      <div className="mx-2 flex w-full flex-wrap items-center justify-between">
        <Link
          href="/edu"
          className="mr-6 flex flex-shrink-0 cursor-pointer items-center"
        >
          <span className="text-xl font-extralight text-gray-800">
            엘카데미
          </span>
        </Link>
      </div>
    </header>
  );
}
