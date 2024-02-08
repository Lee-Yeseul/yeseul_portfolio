"use client";

import { useState } from "react";
import ProjectDialog from "../../common/ProjectDialog";
import TimelineEvent from "../timelineEvent";
import { project } from "@/const";

export default function Project() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleClickDialogOpen = () => {
    setIsDialogOpen(true);
  };
  const allEvent = [
    {
      title: "아우토크립트",
      subtitle: "사원",
      startDate: "2023.04",
      endDate: "2023.10",
      description: "",
      type: project,
    },
    {
      title: "엠서클",
      subtitle: "인턴",
      startDate: "2022.10",
      endDate: "2023.3",
      description: "",
      type: project,
    },
  ];
  return (
    <>
      <ol className="relative border-l-slim border-solid border-blue-100">
        {allEvent.map((event, idx) => (
          <TimelineEvent key={idx} event={event}>
            <button
              className="mt-3 p-2 border-solid border-gray-400 border-1 rounded-md hover:bg-gray-50 hover:text-blue-1000"
              onClick={handleClickDialogOpen}
            >
              자세히 보기
            </button>
          </TimelineEvent>
        ))}
      </ol>

      {isDialogOpen && (
        <ProjectDialog
          setIsDialogOpen={(val: boolean) => setIsDialogOpen(val)}
        />
      )}
    </>
  );
}
