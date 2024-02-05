import Image from "next/image";
import testImage from "@/public/assets/images/test_image.jpg";
import mailIcon from "@/public/assets/icons/mail.svg";
import cakeIcon from "@/public/assets/icons/cake.svg";
import schoolIcon from "@/public/assets/icons/school.svg";
import homeIcon from "@/public/assets/icons/home.svg";
import personIcon from "@/public/assets/icons/person.svg";
import githubIcon from "@/public/assets/icons/github-mark.svg";

export default function AboutMe() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-blue-50">
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
            <div className="flex gap-2 items-center">
              <Image priority src={personIcon} alt="person" width={26} /> 이예슬
            </div>
            <div className="flex gap-2">
              <Image priority src={cakeIcon} alt="cake" width={26} /> 1998.01.19
            </div>
            <div className="flex gap-2">
              <Image priority src={homeIcon} alt="address" width={26} />
              대한민국 서울시
            </div>
            <div className="flex gap-2">
              <Image priority src={mailIcon} alt="mail" width={25} />
              ssulv3030@gmail.com
            </div>
            <div className="flex gap-2">
              <Image priority src={schoolIcon} alt="school" width={26} />
              경희대학교(정보디스플레이학과)
            </div>
            <div className="flex gap-4">
              <Image priority src={githubIcon} alt="mail" width={36} />
              <Image priority src={githubIcon} alt="mail" width={36} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
