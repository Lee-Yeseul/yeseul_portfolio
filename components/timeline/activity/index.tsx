import { all } from "@/const";
import TimelineEvent from "../timelineEvent";
export const activityList = [
  {
    title: "TEOConf",
    subtitle: "staff",
    startDate: "2023.04",
    endDate: "2023.10",
    description:
      "프론트엔드 개발자를 위한 컨퍼런스인 TEOConf의 1,2회 컨퍼런트 기획 및 운영에 참여",
    type: all,
  },
];
export default function Activity() {
  return (
    <ol className="relative border-l-slim border-solid border-blue-100">
      {activityList.map((event, idx) => (
        <TimelineEvent key={idx} {...event} icon="⚪️" />
      ))}
    </ol>
  );
}
