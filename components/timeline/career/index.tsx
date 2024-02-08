import { career } from "@/const";
import TimelineEvent from "../timelineEvent";

export default function Career() {
  const allEvent = [
    {
      title: "아우토크립트",
      subtitle: "사원",
      startDate: "2023.04",
      endDate: "2023.10",
      description: "",
      type: career,
    },
    {
      title: "엠서클",
      subtitle: "인턴",
      startDate: "2022.10",
      endDate: "2023.3",
      description: "",
      type: career,
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
