import { all } from "@/const";
import TimelineEvent from "../timelineEvent";
import { activityList } from "../activity";
import { careerList } from "../career";
import { projectList } from "../project";

export default function All() {
  activityList;
  careerList;
  projectList;
  const allEvent = [...activityList, ...careerList, ...projectList];
  const sortedEventList = [...activityList, ...careerList, ...projectList].sort(
    (a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      // return dateB - dateA;
      return dateA < dateB ? 1 : 0;
    }
  );
  console.log(sortedEventList);
  return (
    <ol className="relative border-l-slim border-solid border-blue-100">
      {allEvent.map((event, idx) => (
        <TimelineEvent key={idx} {...event} icon="⚪️" />
      ))}
    </ol>
  );
}
