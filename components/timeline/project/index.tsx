"use client";

import { useState } from "react";
import TimelineEvent from "../timelineEvent";
import { project } from "@/const";
import ProjectDialog from "@/components/common/ProjectDialog";

import thumbnailMaker1 from "@/public/assets/images/project/thumbnailMaker1.png";
import thumbnailMaker2 from "@/public/assets/images/project/thumbnailMaker2.png";
import thumbnailMaker3 from "@/public/assets/images/project/thumbnailMaker3.png";
import cherryblossom1 from "@/public/assets/images/project/cherryblossom1.png";
import cherryblossom2 from "@/public/assets/images/project/cherryblossom2.png";
import cherryblossom3 from "@/public/assets/images/project/cherryblossom3.png";
import portfolio1 from "@/public/assets/images/project/portfolio1.png";
import portfolio2 from "@/public/assets/images/project/portfolio2.png";

export const projectList = [
  {
    title: "개인 포트폴리오",
    startDate: "2024.02",
    subtitle: "Next.js를 사용한 개인 포트폴리오 서비스 | 개인 프로젝트",
    type: project,
    imageList: [
      {
        id: 0,
        src: portfolio1,
      },
      {
        id: 1,
        src: portfolio2,
      },
    ],
    projectDescription: (
      <div>
        <div className="mb-2">개인 포트폴리오 사이트입니다.</div>
        <div>
          <div className="font-bold">주요 기능</div>
          - 포트폴리오 용도로 제작한 사이트입니다.
          <br />
          <div className="font-bold">구현 방법</div>-{" "}
          <span className="font-bold">Next.js</span>와 tailwind CSS를
          사용하였습니다.
          <br />- Next.js의 App router를 사용해 개발하였으며 vercel로
          배포하였습니다.
          <br />- 번들 사이즈를 줄이기 위해 라이브러리 사용을 최소화하여 image
          Carousel, Dialog 등을 직접 구현하였습니다.
        </div>
      </div>
    ),
    githubURL: "https://github.com/Lee-Yeseul/yeseul_portfolio",
    serviceURL: "https://yeseul-portfolio.vercel.app/",
  },
  {
    title: "Thumbnail Maker",
    startDate: "2023.01 - ",
    subtitle: "블로그, Notion 썸네일 이미지 제작 서비스 | 개인 프로젝트",
    type: project,
    imageList: [
      {
        id: 0,
        src: thumbnailMaker1,
      },
      {
        id: 1,
        src: thumbnailMaker2,
      },
      {
        id: 2,
        src: thumbnailMaker3,
      },
    ],
    projectDescription: (
      <div>
        <div>
          <div>
            블로그와 노션의 간단한 썸네일 이미지를 만들 수 있는 서비스입니다.
          </div>
          <div>
            <div className="font-bold">주요 기능</div>- 제목과 부제목을 작성하고
            배경 색 또는 배경 이미지를 선택하여 썸네일 이미지를 만들어
            다운로드할 수 있습니다.
            <br />
            <div className="font-bold">구현 방법</div>-{" "}
            <span className="font-bold">React</span>와 style component를
            사용하였습니다. <br />- 오픈 API를 활용해 검색된 이미지를 배경으로
            사용할 수 있도록 구현했으며 검색은{" "}
            <span className="font-bold">intersection observer API</span>를
            활용하여 <span className="font-bold">무한 스크롤</span>로
            구현했습니다.
            <br />- 제작된 이미지를 사용자가 다운받을 수 있도록 html2canvas
            라이브러리를 위해 화면의 특정 영역을 캡쳐하여 다운받을 수 있도록
            했습니다.
            <br />- <span className="font-bold">github action</span>을 활용하여
            배포를 자동화하였습니다.
          </div>
        </div>
      </div>
    ),
    githubURL: "https://github.com/Lee-Yeseul/thumbnail_maker",
    serviceURL: "https://lee-yeseul.github.io/thumbnail_maker/",
    blogURL: "https://url.kr/slgdnt",
  },
  {
    title: "나랑 벚꽃보러 가지 않을래?",
    startDate: "2023.02",
    endDate: "2023.03",
    subtitle: "초대장 공유 서비스 | 팀 프로젝트",
    type: project,
    imageList: [
      {
        id: 0,
        src: cherryblossom1,
      },
      {
        id: 1,
        src: cherryblossom2,
      },
      {
        id: 2,
        src: cherryblossom3,
      },
    ],
    projectDescription: (
      <div>
        초대장을 꾸며 상대방에게 전달할 수 있는 서비스입니다.
        <div>
          <div className="font-bold">주요 기능</div>
          <div>
            - 초대장 문구를 작성하고 원하는 부분에 스티커와 캐릭터 이미지를 붙여
            초대장을 꾸밀 수 있습니다.
            <br />
            - 만들어진 초대장을 카카오톡을 통해 친구에게 공유할 수 있습니다.
            <br />- 초대장을 받은 사용자는 공유된 링크를 사용하여 초대장을
            확인할 수 있습니다.
          </div>
        </div>
        <div>
          <div className="font-bold">구현 방법</div>
          <div>
            - <span className="font-bold">React</span>와 tailwind CSS를
            사용했습니다.
            <br /> - 초대장 이미지 생성시 만들어진 이미지를 firebase storage에
            저장하고 공유 url에 이미지의 id를 포함하여 초대장 공유 기능을
            개발했습니다.
            <br />- 완성된 이미지를 불러오는 페이지에서 렌더링 성능 향상을 위해{" "}
            <span className="font-bold">SSR</span>을 적용했습니다.
            <br />- LightHouse로 웹 페이지의 성능 측정 후 웹 퍼포먼스 개선을
            위해 <span className="font-bold">Dynamic import와 next/font</span>을
            사용했습니다.
            <br />- drag and drop을 사용해 스티커와 캐릭터 이미지를 붙일 수
            있도록 구현했습니다.
          </div>
        </div>
      </div>
    ),
    githubURL: "https://github.com/Teo-Sprint-14th-1team/cherryblossom",
    serviceURL: "https://cherryblossom-chi.vercel.app/",
    blogURL: "https://url.kr/ktoj4g",
  },
];
export default function Project() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projectList[0]);

  const handleClickDialogOpen = (selectedProjectTitle: any) => {
    const selectedProject = projectList.find((event) => {
      return event.title === selectedProjectTitle;
    });
    if (!selectedProject) return;
    setSelectedProject(selectedProject);
    setIsDialogOpen(true);
  };

  return (
    <>
      <ol className="relative border-l-slim border-solid border-blue-100">
        {projectList.map(
          ({ title, startDate, endDate, type, subtitle }, idx) => (
            <TimelineEvent
              key={idx}
              {...{ title, startDate, endDate, type, subtitle }}
              icon="⚪️"
            >
              <button
                className="mt-3 p-2 border-solid border-gray-400 border-1 rounded-md hover:bg-gray-50 hover:text-blue-1000"
                onClick={() => handleClickDialogOpen(title)}
              >
                자세히 보기
              </button>
            </TimelineEvent>
          )
        )}
      </ol>

      {isDialogOpen && (
        <ProjectDialog
          setIsDialogOpen={(val: boolean) => setIsDialogOpen(val)}
          projectValue={selectedProject}
        />
      )}
    </>
  );
}
