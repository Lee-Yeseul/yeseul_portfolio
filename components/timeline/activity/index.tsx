import { all } from "@/const";
import TimelineEvent from "../timelineEvent";

export default function Career() {
  const allEvent = [
    {
      title: "TEOConf",
      subtitle: "staff",
      startDate: "2023.08",
      endDate: "2023.12",
      description:
        "프론트엔드 개발자를 위한 컨퍼런스인 TEOConf의 1,2회 컨퍼런트 기획 및 운영에 참여했습니다.",
      type: all,
    },
  ];
  return (
    <ol className="relative border-l-slim border-solid border-blue-100">
      {allEvent.map((event, idx) => (
        <TimelineEvent key={idx} event={event} />
      ))}
    </ol>
  );
}
