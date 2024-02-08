import Image from "next/image";

import MailIcon from "@/public/assets/icons/mail.svg";
import CakeIcon from "@/public/assets/icons/cake.svg";
import SchoolIcon from "@/public/assets/icons/school.svg";
import HomeIcon from "@/public/assets/icons/home.svg";
import PersonIcon from "@/public/assets/icons/person.svg";
import BlogIcon from "@/public/assets/icons/blog.svg";
import GithubIcon from "@/public/assets/icons/github.svg";
import telescope from "@/public/assets/images/telescope.png";

export default function AboutMe() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-blue-50">
      <div className="xl:w-1/2 lg:w-1/2 w-4/5">
        <h3 className="text-3xl font-bold">About Me</h3>
        <div className="mt-3 text-2xl">
          사용자에게 가치를 제공하는 프론트엔드 개발자 이예슬입니다.
        </div>
        <div className="mt-3 text-lg">
          아이디어를 기술로 구현하고 사용자와 서비스를 연결하는 것에 흥미를 가져
          개발자가 되었습니다. 기술을 통해 문제를 해결하는 과정에서 즐거움을
          느끼며 사용자에게 더 높은 가치를 제공하고자 노력합니다. 필요한
          것이라면 분야와 상관없이 공부하는 것을 좋아합니다.
        </div>
        <div className="mt-3 flex items-end">
          <Image src={telescope} width={100} alt="telescope icon" />
          <div className="flex text-lg/loose text-white mt-10 mb-32 ml-10 w-full">
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
              <div className="flex gap-2 items-center">
                <MailIcon width={32} fill={"white"} />
                ssulv3030@gmail.com
              </div>
            </div>

            <div className="flex gap-5">
              <a href="https://github.com/Lee-Yeseul">
                <BlogIcon
                  width={40}
                  height={40}
                  fill={"white"}
                  className="rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"
                />
              </a>
              <a href="https://velog.io/@ssulv3030/posts">
                <GithubIcon
                  width={40}
                  height={40}
                  fill={"white"}
                  className="rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-[0.5px] bg-gray-50"></div>
        <div className="w-full h-4 bg-gradient-to-r from-[#ec56a4] via-[#1f3ae9] to-[#98a7fe] blur-2xl"></div>
      </div>
    </div>
  );
}
