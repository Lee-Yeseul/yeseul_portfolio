import Image from "next/image";

import MailIcon from "@/public/assets/icons/mail.svg";
import CakeIcon from "@/public/assets/icons/cake.svg";
import SchoolIcon from "@/public/assets/icons/school.svg";
import HomeIcon from "@/public/assets/icons/home.svg";
import PersonIcon from "@/public/assets/icons/person.svg";
import telescope from "@/public/assets/images/telescope.png";

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
        <div className="mt-3 flex items-end">
          <Image src={telescope} width={100} alt="telescope icon" />
          <div className="flex text-xl/loose text-white mt-10 mb-32 ml-10 w-full">
            <div className="mr-10">
              <div className="flex gap-2 items-center">
                <PersonIcon width={32} fill={"white"} />
                이예슬
              </div>
              <div className="flex gap-2 items-center">
                <CakeIcon width={32} fill={"white"} />
                1998.01.19
              </div>
              <div className="flex gap-2 items-center">
                <HomeIcon width={32} fill={"white"} />
                대한민국 서울시
              </div>
              <div className="flex gap-2 items-center">
                <SchoolIcon width={32} fill={"white"} />
                경희대학교(정보디스플레이학과)
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <MailIcon width={32} fill={"white"} />
                ssulv3030@gmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[0.5px] bg-gray-50"></div>
        <div className="w-full h-4 bg-gradient-to-r from-[#ec56a4] via-[#1f3ae9] to-[#98a7fe] blur-2xl"></div>
      </div>
    </div>
  );
}
