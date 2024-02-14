import { career } from "@/const";
import TimelineEvent from "../timelineEvent";
export const careerList = [
  {
    title: "아우토크립트",
    subtitle: "사원",
    startDate: "2023.04",
    endDate: "2023.10",
    description: (
      <div>
        <div className="font-bold">
          법인택시 통합 관제 서비스 Taffice의 프론트엔드 개발
        </div>
        <div className="text-base/loose">
          ● Vue3를 사용해 법인택시 통합 관제 서비스인 Taffice의 프론트엔드 개발,
          Taffice 서비스 런칭 및 10개 이상 법인 택시 회사와 계약
          <br />
          ● 모노레포 내에서의 공통 모듈 개발, 모노레포 환경에서의 개발 생산성
          향상에 기여
          <br />
          ● PDF 및 엑셀 파일 다운로드 기능 개발 <br />
          ● AWS S3, CloudFront를 통한 배포
          <br />● 팀내의 코드 컨벤션 관리 및 코드의 일관성을 높이기 위해 ESLint
          적용, 코드 리뷰 과정에서의 불필요한 시간 절약 및 개발 생산성 향상에
          기여
        </div>
      </div>
    ),
    type: career,
  },
  {
    title: "엠서클",
    subtitle: "인턴",
    startDate: "2022.10",
    endDate: "2023.3",
    description: (
      <div>
        <div className="font-bold">
          생체나이 리포팅 서비스 바이오에이지의 프론트엔드의 유지보수 및
          리팩토링
        </div>
        <div className="text-base/loose">
          ● React를 사용해 생체나이 리포팅 서비스인 Bioage의 프론트엔드 개발
          <br />
          ● JavaScript와 리액트 클래스형 컴포넌트로 되어있는 레거시 코드 분석 후
          TypeScript와 리액트 함수형 컴포넌트로 리팩토링 <br />
          ● 환자 개인 정보, 생체 정보 입력을 위한 form에 validation 추가
          <br />● Next.js를 사용하여 데일리 다이어트 체크리스트 서비스의
          프론트엔드 개발
        </div>
      </div>
    ),
    type: career,
  },
];
export default function Career() {
  return (
    <ol className="relative border-l-slim border-solid border-blue-100">
      {careerList.map((event, idx) => (
        <TimelineEvent key={idx} {...event} icon={"⚪️"} />
      ))}
    </ol>
  );
}
