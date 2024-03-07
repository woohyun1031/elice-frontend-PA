'use client';

import Image from 'next/image';
import React from 'react';

export default function SearchBox() {
  const [isFocus, setIsFocus] = React.useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <div className="bg-search w-full">
      <div
        className={`${isFocus ? 'border-elice' : 'border-search'} flex w-full flex-row rounded border border-solid transition duration-300`}
      >
        <div className="flex p-4 align-middle">
          <Image
            src="/images/search.svg"
            alt="Search.svg"
            width={16}
            height={16}
            priority
            className={`${isFocus ? 'border-elice' : 'border-search'} transition duration-300`}
          />
        </div>
        <div className="relative mx-4 flex w-full overflow-hidden">
          <input
            placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
            className="my-3 w-full text-sm focus:outline-none "
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>
    </div>
  );
}
