import Image from "next/image";
import testImage from "@/public/assets/images/test_image.jpg";

export default function AboutMe() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-1000 text-blue-50">
      <div className="w-1/2">
        <h3 className="text-3xl font-bold">About Me</h3>
        <div className="mt-3 text-2xl">
          FEConf 2023의 스피커와 프로그램을 소개합니다.
        </div>
        <div className="mt-3 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dicta
          optio eius dolorem, aliquid nostrum quibusdam natus tenetur iure, non
          eos nisi atque, laudantium commodi quam autem architecto? Quidem, quo.
        </div>
        <div className="mt-3 bg-gray-50 flex items-center rounded-lg">
          <div className="p-8 w-[48%]">
            <Image
              src={testImage}
              width={250}
              alt="profile image"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-5 text-lg text-black">
            <div>🟦 이예슬</div>
            <div>🟦 1998.01.19</div>
            <div>🟦 대한민국 서울시</div>
            <div>🟦 ssulv3030@gmail.com</div>
            <div>🟦 경희대학교(정보디스플레이학과)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
