"use client";

import useDetectElement from "@/hooks/useDetectElement";
import { useCallback, useRef, useState } from "react";

export default function Skills() {
  const tempArray = [
    {
      title: "HTML/CSS",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,minus non? Expedita a neque ad vel assumenda ex sed ea culpa quasi,quasi,quasi",
    },
    {
      title: "JavaScript",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,minus non? Expedita a neque ad vel assumenda ex sed ea culpa quasi,quasi,quasi",
    },
    {
      title: "TypeScript",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,minus non? Expedita a neque ad vel assumenda ex sed ea culpa quasi,quasi,quasi",
    },
    {
      title: "React.js",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,minus non? Expedita a neque ad vel assumenda ex sed ea culpa quasi,quasi,quasi",
    },
    {
      title: "Next.js",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,minus non? Expedita a neque ad vel assumenda ex sed ea culpa quasi,quasi,quasi",
    },
    {
      title: "Vue.js",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,minus non? Expedita a neque ad vel assumenda ex sed ea culpa quasi,quasi,quasi",
    },
    {
      title: "Backend",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,minus non? Expedita a neque ad vel assumenda ex sed ea culpa quasi,quasi,quasi",
    },
    {
      title: "Tools",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,minus non? Expedita a neque ad vel assumenda ex sed ea culpa quasi,quasi,quasi",
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
            className={`absolute -left-16 bottom-1/2 ${
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
                className="shrink-0 w-64 h-64 p-5 border-1 border-solid border-gray-300 rounded-md"
                ref={
                  idx === 0
                    ? setLeftScrollTarget
                    : idx === tempArray.length - 1
                    ? setRightScrollTarget
                    : null
                }
              >
                <div className="font-bold text-lg">🟡 {title}</div>
                <div className="mt-3 text-base">{description}</div>
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
