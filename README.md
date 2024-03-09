- [Elice Frontend Team PA, Course Search](#elice-frontend-team-pa--course-search)
  - [목표](#목표)
  - [개발 환경](#개발-환경)
  - [로컬 실행](#로컬-환경)
  - [임시 배포 URL](#임시-배포-url)
  - [프로젝트 구성](#프로젝트-구성)
  - [주요 기능 구현](#주요-기능-구현)
    - [1. UI 구현 요구사항](#1-ui-구현-요구사항)
    - [2. 300ms debounced search](#2-300ms-debounced-search)
    - [3. url query를 사용한 Filter Search 구현](#3-url-query를-사용한-filter-search-구현)
    - [4. 라이브러리를 사용하지 않은 페이지네이션](#4-라이브러리를-사용하지-않은-페이지네이션)
    - [5. Middleware API를 사용한 데이터 요청 구현](#5-middleware-api를-사용한-데이터-요청-구현)
  - [추가 기능](#추가-기능)
    - [course 파싱과정 하드코딩 없이 동적으로 가능하게 구현](#course-파싱과정-하드코딩-없이-동적으로-가능하게-구현)
    - [기타 추가 구현](#기타-추가-구현)
  - [트러블슈팅](#트러블슈팅)
    - [useSearchParams 함수 빌드 에러](#usesearchparams-함수-빌드-에러)
    - [cotext api에서 발생하는 불필요한 리렌더링](#cotext-api에서-발생하는-불필요한-리렌더링)

[이미지]

# Elice Frontend Team PA, Course Search

## 목표

- 엘리스 웹 서비스의 일부인 과목 검색(Course Search)의 간소화된 버전 주어진 요구사항에 맞게 구현

---

## 개발 환경

- **코어**: [Next.js App router v14.1.2](https://nextjs.org/), [TypeScript v5](https://www.typescriptlang.org/)

- **스타일링**: [Tailwind CSS v3.3.0](https://tailwindcss.com)

- **상태 관리**: [React Local State](https://yarnpkg.com/), [ContextAPI](https://react.dev/learn/passing-data-deeply-with-context)

- **API 서버**: [API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes), [Axios v1.6.7](https://axios-http.com/docs/intro)

- **개발 환경**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

- **패키지 매니저**: [YarnPkg](https://yarnpkg.com/)

- **CI/CD**: [Vercel (optional)](https://vercel.com/)

---

## 로컬 실행

해당 어플리케이션은 `Node.js v18.17` 이상을 요구하고 있습니다.  
환경변수는 `/.env.sample` 파일을 참고해주시기 바랍니다.

```bash
git clone https://github.com/woohyun1031/elice-frontend-PA.git
cd elice-frontend-PA
yarn install
yarn run dev
```

## 임시 배포 URL

- https://elice-frontend-pa-zeta.vercel.app

임시 배포된 어플리케이션은 과제 기간 이후 삭제될 예정입니다. Vercel을 사용하여 배포하였습니다.

---

## 프로젝트 구성

```bash
📦elice-app
 ┣ 📂 app
 ┃ ┣ 📂 (main)
 ┃ ┃ ┣ 📂 edu
 ┃ ┣ 📂 apis
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 common
 ┃ ┃ ┗ 📂 edu
 ┃ ┣ 📂 constants
 ┃ ┣ 📂 containers
 ┃ ┣ 📂 contexts
 ┃ ┣ 📂 hooks
 ┃ ┣ 📂 mocks
 ┃ ┣ 📂 types
 ┃ ┗ 📂 utils
 ┣ 📂 pages
 ┃ ┗ 📂 api
 ┗ 📂 public
   ┣ 📂 images
   ┗ 📂 styles
```

프로젝트 구조는 크게 라우팅을 담당하는 `/app`폴더와 API 서버를 담당하는 `/pages`폴더로 두 개의 라우터로 분리되어 있다.

- **app**
  - **(main)**
    - **edu**: "edu" 페이지 라우팅
  - **apis**: pages의 API 서버와 통신
  - **components**: UI 컴포넌트 담당
  - **contants**: 정적 변수 정의
  - **containers**: 컴포넌트와 함께 핵심 로직을 사용하는 컨테이너
  - **contexts**: 전역 변수 사용을 위한 contexts api
  - **hooks**: 전역적으로 사용되는 커스텀 훅
  - **mocks**: API 필터링을 위해 사용되는 mock 폴더
  - **types**: 전역적으로 사용되는 타입
  - **utils**: 전역적으로 사용되는 함수
- **pages**
  - **apis**: API 요청 로직 담당 폴더
- **public**
  - **images**: 정적 이미지(.png, .svg)파일
  - **styles**: tailwind 세팅을 위한 globals.css 파일

---

## 주요 기능 구현

### 1. UI 구현 요구사항

[이미지]  
제시되어있는 요구사항에 맞춰 UI를 구현하였다.

제한되어있는 시간내에 최대한의 효율을 만들어내기 위해 Tailwind CSS를 도입하였다.  
클래스명을 따로 고려하지 않는 이점과 CSS파일을 별도로 관리하지 않고 주어진 기능에만  
집중할 수 있게 도와주는 장점으로 `Tailwind CSS`를 선택하였다.

1232px 기준으로 4개의 Course 카드가 들어가게 하기 위해 `calc(25% - 12px)`로 카드 사이즈를 지정하였다.

### 2. 300ms debounced search

[이미지]  
검색기능은 url query 방식으로 동작한다. 로컬 input과 url을 동기화를 시키려면
상당한 부담이 될 수 있다.  
요구사항에 맞춰 300ms의 debounce를 걸어주는 `useDebounce` 커스텀 훅을
제작하였다.  
간단하게 리액트 기본 훅으로 구현하여 연속된 url입력을 방지하고 불필요한 API 호출을 최소화하였다.

```TypeScript
import React from 'react';

export default function useDebounce(value: string, delay: number = 300) {
 const [debouncedValue, setDebouncedValue] = React.useState(value);

 React.useEffect(() => {
   const timer = setTimeout(() => {
     setDebouncedValue(value);
   }, delay);

   return () => {
     clearTimeout(timer);
   };
 }, [value, delay]);

 return debouncedValue;
}
```

### 3. url query를 사용한 Filter Search 구현

[이미지]  
브라우저를 새로고침을해도 선택된 필터가 유지될수 있도록 하기 위해 url query를 사용하여 Filter와 Search를  
구현하였다. `useOnSubmit` 커스텀 훅을 구현하여 Filter와 Search에서 각각 search params를 수정할 수 있게 만들어준다.  
search params가 변경되면 서버컴포넌트에서 요청을 보내 courses를 받아 props로 넘겨주는 방식으로 진행하였다.
프로젝트를 진행하면서 컴포넌트와 함수가 순수 본연의 역할만을 수행할 수 있게 최대한 분리시켜 실행이 될 수 있도록 제작을 하였다.

```TypeScript
export type TOnSubmitReturn = {
  onSubmit: (key: string, values: string[] | number[]) => void;
};

export default function useOnSubmit(): TOnSubmitReturn {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onSubmit = React.useCallback(
    (key: string, value: (string | number)[]) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.delete(key);
      value.forEach((v) => params.append(key, String(v)));
      router.replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  return { onSubmit };
}
```

### 4. 라이브러리를 사용하지 않은 페이지네이션

페이지네이션에는 주요한 두 가지 조건이 있다.

1. 현재 페이지 기준 앞쪽으로 최대 4개, 뒷쪽으로 최대 4개의 페이지를 더 표시한다.
2. 검색 필터가 변경되면 첫 페이지로 초기화된다.

먼저 현재 페이지 기준으로 앞쪽,뒷쪽으로 각각 4개씩 최대 총 9개의 페이지를 구현할 수 있게 만들었다.  
처음 레퍼런스 페이지에서 보여진 페이지 개수가 5개인 걸 감안하여, 동적으로 보여질 페이지의 개수를 지정할 수 있게 구현하였다.

[이미지]

url query로 서버컴포넌트에서 요청을 보내는게 아닌 클라이언트 컴포넌트에서 요청을 보내고  
context api로 props drilling을 하여 courses 전역 변수를 구현하였다.  
offset값도 마찬가지로 search params가 변경되면 초기화가 되어야 하기에 위와 마찬가지로  
전역변수로 구현하였다.

```TypeScript
// /contexts/contexts.ts
export const CoursesContext = createContext<CoursesContextType>({
  courses: [],
  setCourses: () => {},
});

// /(main))/edu/form.tsx
const [courses, setCourses] = React.useState(props.courses);
...
return <CoursesContext.Provider value={{ courses, setCourses}} />
...

// /conponents/pagination/Pagination.tsx

const { setCourses } = React.useContext(CoursesContext);
...
// 요청 로직
setCourses(result.courses);
...

```

### 5. Middleware API를 사용한 데이터 요청 구현

클라이언트와 엘리스 서버를 이어주는 API Routes를 사용한 API 서버로 데이터를 요청받았다.  
클라이언트와 API 서버를 같은 origin으로 맞추어 CORS문제를 해결하고 "서버 to 서버" 방식으로 진행하였으며  
course를 구성하기위한 필수 data만 필터링하여 클라이언트로 전달하였다.

```TypeScript
import React from 'react';

export default function useDebounce(value: string, delay: number = 300) {
 const [debouncedValue, setDebouncedValue] = React.useState(value);

 React.useEffect(() => {
   const timer = setTimeout(() => {
     setDebouncedValue(value);
   }, delay);

   return () => {
     clearTimeout(timer);
   };
 }, [value, delay]);

 return debouncedValue;
}
```

## 추가 기능

### course 파싱과정 하드코딩 없이 동적으로 가능하게 구현

필터의 항목들은 동적으로 추가가 될 가능성이 있는 컴포넌트로 판단하여,  
추가로 필요한 필터를 상수에만 입력하여 동적으로 필터 추가 및 파싱이 가능하도록 설계하였다.

```TypeScript
// /constants/course.ts
export const COURSE_CONVERT_OBJECTS: Record<
  string,
  (v: string) => Record<string, Object> | undefined
> = {
  keyword: (value) => {
    return { title: `%${value}%` };
  },
  price: (value) => {
    switch (value) {
      case '29':
        return { enroll_type: 0, is_free: true };
      case '30':
        return { enroll_type: 0, is_free: false };
      default:
        return;
    }
  },
};

// /utils/convertSearchParamsToCourseObject.ts

export default function convertSearchParamsToCourseObject(
  searchParams: Record<string, string | string[]>,
): Record<string, string> {
  return {
    filter_conditions: JSON.stringify({
      $and: Object.entries(searchParams).map(([key, value]) => {
        if (Array.isArray(value)) {
          return { $or: value.map((v) => COURSE_CONVERT_OBJECTS[key]?.(v)) };
        }
        return { $or: [COURSE_CONVERT_OBJECTS[key]?.(value)] };
      }),
    }),
  };
}

```

`convertSearchParamsToCourseObject`에서 필요한 search params만을 `COURSE_CONVERT_OBJECTS`에서  
가져올 수 있도록 구현하였다.

### 기타 추가 구현

1. SearchBox, CourseCard에 hover, focuse 이벤트 이펙트 추가
2. CourseCard가 나열되는 개수 반응형으로 컨트롤  
   [이미지]
3. 검색결과 없을 때 대체 UI 제작
   [이미지]
4. 에러핸들링으로 서버 에러 발생시 에러 UI 대체
   [이미지]

---

## 트러블슈팅

### useSearchParams 함수 빌드 에러

`⨯ useSearchParams() should be wrapped in a suspense boundary at page "/app/(main)/edu/form/FilterForm.tszx".`

빌드 시 `useSearchParams`훅을 사용한 컴포넌트에서 위와 같은 에러가 발생했다.  
클라이언트 컴포넌트에서만 사용할 수 있는 `useSearchParams`는 위에 Suspense 경계가 래핑되지 않은 경우  
Suspense 경계를 찾아 올라가고 결국 없으면 SSR에서 전체가 CSR로 로딩을 하는데 v14.0.5부턴 에러라고 판단하여  
빌드에러를 발생시키고 있다.
`useSearchParms`를 사용하는 컴포넌트를 Suspense로 감싸줘서 Suspense 경계를 만들어준다.

```TypeScript
import { Suspense } from 'react';
...
return (
  <Suspense>
    <FilterForm />
  </Suspense>
)
```

### cotext api에서 발생하는 불필요한 리렌더링

`The object passed as the value prop to the Context provider changes every render" consider using useMemo error?`

현재 전역상태를 구현하기 위해 `useState`훅과 `Context API`를 사용하였다.  
다른 전역상태 라이브러리들과 다르게 공유할 상태가 필요한 Children을 Cotext.Provider로 랩핑을 해주는데  
상태값이 변경되지 않았음에도 해당 Context를 사용하는 Children들은 전부 리렌더링이 발생하였다.

```TypeScript
  const contextsValue = React.useMemo(
    () => ({ courses, setCourses }),
    [courses, setCourses],
  );
```

Cotext.Provider를 필요한 곳에만 랩핑하고 useMemo훅으로 상태값에 의존성을 넣어서 불필요한 렌더링은 발생시키지 않게 만들었다.
