export interface IOrgCourse {
  courseType: number;
  tags: string[];
  title: string;
  shortDescription: string;
  classType: number;
  logoFileUrl: null | string;
  enrolledRolePeriod: null | string;
  enrolledRoleBeginDatetime: number | null;
  enrolledRoleEndDatetime: number | null;
  beginDatetime: number;
  endDatetime: null | number;
  isDiscounted: boolean;
  discountedPrice: string;
  discountedPriceUsd: string;
  discountRate: null | any;
  price: string;
  priceUsd: string;
  enrollType: number;
  isFree: boolean;
}
export interface IOrgCourseListResponses {
  _result: {
    status: 'ok' | 'fail';
  };
  course_count: number;
  courses: IOrgCourse[];
}
