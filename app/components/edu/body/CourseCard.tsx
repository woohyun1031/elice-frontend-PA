import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardDescription from './CardDescription';
import CardIconText from './CardIconText';
import CardLabel from './CardLabel';
import CardTitle from './CardTitle';
import { IOrgCourse } from '#types/course';

export default function CourseCard(props: IOrgCourse) {
  return (
    <Link
      href="/"
      className="flex w-full cursor-pointer flex-col align-middle sm:w-sm_card md:w-md_card xl:w-xl_card"
    >
      <div className="relative h-card w-full rounded-lg bg-white">
        <div className="px-6 py-7">
          <CardLabel label="미설정" />
          <CardTitle label={props.title} />
          <CardDescription label={props.short_description} />
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <CardIconText
                id={1}
                src="/images/difficulty.svg"
                label="난이도"
                value="중급"
              />
              <CardIconText
                src="/images/class.svg"
                label="수업"
                value="온라인"
                id={2}
              />
              <CardIconText
                src="/images/period.svg"
                label="기간"
                value="무제한"
                id={3}
              />
            </div>
            <div>
              <Image
                src={props.logo_file_url ?? ''}
                alt="Card Logo"
                width={52}
                height={52}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full px-6 pb-5 pt-0">
          <div className="w-full border-t border-solid border-gray-200 pt-4">
            <span className="inline-block text-base font-bold leading-normal text-elice">
              {props.enroll_type ? '구독' : props.is_free ? '무료' : '유료'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
