"use client";

import useDetectElement from "@/hooks/useDetectElement";
import { useCallback, useRef, useState } from "react";

export default function Skills() {
  const tempArray = [
    {
      title: "HTML/CSS",
      description: (
        <div>
          ● 웹 표준을 준수하며 시맨틱 태그를 적극적으로 활용합니다. <br />●
          반응형 디자인을 구현할 수 있습니다.
          <br />● scss, sass 등의 css 전처리기를 활용할 수 있습니다.
        </div>
      ),
    },
    {
      title: "JavaScript/TypeScript",
      description: (
        <div>
          ● ES6+ 문법에 익숙합니다.
          <br />
          ● TypeScript를 사용하여 타입 안전성을 지키려 노력합니다. <br />●
          Jest를 사용해 테스트 코드를 작성한 경험이 있습니다.
        </div>
      ),
    },
    {
      title: "React.js",
      description: (
        <div>
          ● React의 함수형 컴포넌트와 hook을 활용하여 재사용 가능한 컴포넌트를
          구현할 수 있습니다. <br />● Recoil, Zustand 등의 상태관리 라이브러리
          사용 경험이 있습니다.
        </div>
      ),
    },
    {
      title: "Next.js",
      description: (
        <div>
          ● Page router와 App router의 차이를 알고 있으며 상황에 따라 CSR, SSR,
          SSG, ISR 등 적합한 렌더링 방식을 활용할 수 있습니다.
        </div>
      ),
    },
    {
      title: "Vue.js",
      description: (
        <div>
          ● Vue3의 composition API를 활용할 수 있습니다.
          <br /> ● Pinia 등의 상태관리 라이브러리 사용 경험이 있습니다.
        </div>
      ),
    },
    {
      title: "Backend",
      description: (
        <div>
          ● Express를 사용해 RESTful API를 만들 수 있습니다.
          <br /> ● MongoDB와 Postgres를 사용한 경험이 있습니다.
        </div>
      ),
    },
    {
      title: "Tools",
      description: (
        <div>
          ● Git을 사용해 협업할 수 있으며 상황에 따라 적합한 merge 전략을 사용할
          수 있습니다. <br />● JIRA, Confluence, Slack, Notion을 활용해 협업한
          경험이 있습니다.
        </div>
      ),
    },
  ];
  const ref = useRef<HTMLDivElement>(null);

  const [leftScrollBtnVisibleState, setLeftScrollBtnVisible] = useState(false);
  const [rightScrollBtnVisibleState, setRightScrollBtnVisible] = useState(true);

  const [setLeftScrollTarget] = useDetectElement({
    threshold: 1,
    onIntersect: useCallback(([{ isIntersecting }]) => {
      if (isIntersecting) setLeftScrollBtnVisible(false);
      else setLeftScrollBtnVisible(true);
    }, []),
  });

  const [setRightScrollTarget] = useDetectElement({
    threshold: 0.5,
    onIntersect: useCallback(([{ isIntersecting }]) => {
      if (isIntersecting) setRightScrollBtnVisible(false);
      else setRightScrollBtnVisible(true);
    }, []),
  });

  const handleClickRightscrollBtn = () => {
    const scrollMargin = 100;
    if (!ref.current) return;
    const { scrollWidth, clientWidth, scrollLeft } = ref.current;

    if (scrollWidth - clientWidth <= scrollLeft + clientWidth - scrollMargin)
      return (ref.current.scrollLeft = scrollWidth - clientWidth);

    return (ref.current.scrollLeft = scrollLeft + clientWidth - scrollMargin);
  };

  const handleClickLeftScrollBtn = () => {
    const scrollMargin = 100;
    if (!ref.current) return;
    const { clientWidth, scrollLeft } = ref.current;

    if (scrollLeft < clientWidth) return (ref.current.scrollLeft = 0);

    return (ref.current.scrollLeft = scrollLeft - clientWidth + scrollMargin);
  };

  return (
    <div className="py-20 flex flex-col items-center">
      <div className="xl:w-1/2 lg:w-1/2 w-4/5">
        <h3 className="text-3xl font-bold">Skills</h3>
        <div className="relative mt-20">
          <div
            className={`absolute -left-16 top-1/2 ${
              leftScrollBtnVisibleState ? "visible animate-fade-in" : "hidden"
            } z-30 text-white`}
          >
            <button
              className="w-8 h-8 border-solid border-gray-300 border-1 rounded-full p-2 hover:shadow-md shadow-grey-500"
              onClick={handleClickLeftScrollBtn}
            >
              {"<"}
            </button>
          </div>
          <div
            className="flex flex-nowrap overflow-x-scroll gap-3 scrollbar-hide scroll-smooth"
            ref={ref}
          >
            {tempArray.map(({ title, description }, idx) => (
              <div
                key={idx}
                id={String(idx)}
                className="shrink-0 w-72 h-64 p-5 border-1 border-solid border-gray-300 bg-white/10 rounded-md"
                ref={
                  idx === 0
                    ? setLeftScrollTarget
                    : idx === tempArray.length - 1
                    ? setRightScrollTarget
                    : null
                }
              >
                <div className="font-bold text-lg">{title}</div>
                <div className="mt-3 text-base/7 break-words">
                  {description}
                </div>
              </div>
            ))}
          </div>
          <div>
            <button
              className={`w-8 h-8 absolute -right-16 top-1/2 border-solid border-gray-300 border-1 rounded-full p-2 hover:shadow-md shadow-grey-500 ${
                rightScrollBtnVisibleState
                  ? "visible animate-fade-in"
                  : "hidden"
              }`}
              onClick={handleClickRightscrollBtn}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
