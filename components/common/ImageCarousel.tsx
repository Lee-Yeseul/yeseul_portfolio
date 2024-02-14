"use client";
import Image from "next/image";
import { useRef, useState } from "react";

interface CardProps {
  imageList: { id: number; src: any }[];
}

type MoveToNthSlide = (
  targetImageIndex: number,
  translateNumber: number
) => void;

export default function ImageCarousel({ imageList: data }: CardProps) {
  const imageList = [data[data.length - 1], ...data, data[0]];
  const ref = useRef<HTMLDivElement>(null);

  const [touch, setTouch] = useState({
    start: 0,
    end: 0,
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [style, setStyle] = useState({
    transform: `translateX(-${currentImageIndex}00%)`,
    transition: `all 0.3s ease-in-out`,
  });

  const moveToNthSlide: MoveToNthSlide = (
    targetImageIndex = 1,
    translateNumber = 1
  ) => {
    setCurrentImageIndex(targetImageIndex);
    setStyle({
      transform: `translateX(-${translateNumber}00%)`,
      transition: `0s`,
    });
  };

  const handleSwife = (direction: number) => {
    setCurrentImageIndex((prev) => prev + direction);
    setStyle({
      transform: `translateX(-${currentImageIndex + direction}00%)`,
      transition: `all 0.3s ease-in-out`,
    });
    if (currentImageIndex === 1 && direction < 0) {
      setTimeout(
        () => moveToNthSlide(imageList.length - 1, imageList.length - 2),
        500
      );
      return;
    }
    if (currentImageIndex === imageList.length - 2 && direction > 0) {
      setTimeout(() => moveToNthSlide(1, 1), 400);
      return;
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouch((prev) => {
      return {
        ...prev,
        start: e.touches[0].pageX,
      };
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (ref.current) {
      const current = ref.current.clientWidth * currentImageIndex;
      const result = -current + (e.targetTouches[0].pageX - touch.start);
      setStyle({
        transform: `translate3d(${result}px, 0px, 0px)`,
        transition: "0ms",
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const end = e.changedTouches[0].pageX;
    if (touch.start > end) {
      handleSwife(1);
    } else {
      handleSwife(-1);
    }
    setTouch((prev) => {
      return {
        ...prev,
        end,
      };
    });
  };

  return (
    <div className="relative overflow-hidden rounded-lg hover:cursor-pointer group">
      <div
        className="flex items-center"
        ref={ref}
        style={style}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        onTouchEnd={(e) => handleTouchEnd(e)}
      >
        {imageList.map((image, index) => (
          <Image
            width={500}
            key={index}
            className="aspect-square"
            src={image.src}
            alt="프로젝트 설명 이미지"
          />
        ))}
      </div>
      <button
        onClick={() => handleSwife(-1)}
        className="absolute left-2 top-1/2 w-8 h-8 bg-blue-500 text-white rounded-full p-2 hover:shadow-sm shadow-grey-500 invisible group-hover:visible opacity-75 hover:opacity-100"
      >
        {"<"}
      </button>

      <button
        onClick={() => handleSwife(1)}
        className="absolute right-2 top-1/2 w-8 h-8 bg-blue-500 text-white rounded-full p-2 hover:shadow-sm shadow-grey-500 invisible group-hover:visible opacity-75 hover:opacity-100"
      >
        {">"}
      </button>
      <div className="absolute bottom-2 w-full">
        <div className="flex justify-center items-center gap-1.5">
          {data.map((image, index) => (
            <div
              key={index}
              className={`rounded-full ${
                image.id === currentImageIndex - 1
                  ? "bg-[#1f3ae9] w-2.5 h-2.5"
                  : "bg-[#98a7fe] w-2 h-2"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
