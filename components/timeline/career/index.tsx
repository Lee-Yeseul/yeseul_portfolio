import { all } from "@/const";
import TimelineEvent from "../timelineEvent";

export default function Career() {
  const allEvent = [
    {
      title: "토스 커뮤니티 프론트엔드 엔지니어의 성장",
      subtitle: "토스",
      startDate: "2022.02",
      endDate: "2022.03",
      description:
        "대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다. 국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다. 국회의원의 수는 법률로 정하되, 200인 이상으로 한다. 군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다.",
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
