import Image from 'next/image';
import Link from 'next/link';
import CardDescription from './CardDescription';
import CardIconText from './CardIconText';
import CardLabel from './CardLabel';
import CardTitle from './CardTitle';

export default function CourseCard() {
  return (
    <Link
      href={'/'}
      className="xl:w-xl_card md:w-md_card sm:w-sm_card flex w-full cursor-pointer flex-col align-middle"
    >
      <div className="h-card relative w-full rounded-lg bg-white">
        <div className="px-6 py-7">
          <CardLabel label="미설정" />
          <CardTitle label="[Pluralsight] Microsoft Certified: Azure Data Engineer Associate (DP-203)" />
          <CardDescription label="[Pluralsight] Governance, Risk, and Compliance for CompTIA Security+" />

          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <CardIconText
                id={1}
                src="/images/difficulty.svg"
                label="난이도"
                value={'중급'}
              />
              <CardIconText
                src="/images/class.svg"
                label="수업"
                value={'온라인'}
                id={2}
              />
              <CardIconText
                src="/images/period.svg"
                label="기간"
                value={'무제한'}
                id={3}
              />
            </div>
            <div>
              <Image
                src={
                  'https://cdn-api.elice.io/api/file/e8b77f7af0d44cf6bee8c287b471fc5c/algorithm.png?se=2024-03-14T00%3A15%3A00Z&sp=r&sv=2021-12-02&sr=b&sig=pDwE1ZmB9GICClEMHjV326KE7eriGPlolyTdFquqGZA%3D'
                }
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
            <span className="text-elice inline-block text-base font-bold leading-normal">
              구독
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}


