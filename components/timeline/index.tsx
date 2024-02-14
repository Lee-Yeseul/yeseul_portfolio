"use client";

import { useState } from "react";
import Activity from "./activity";
import All from "./all";
import Career from "./career";
import Project from "./project";
import { TimelineType } from "@/types";
import { all, project, career, activity } from "@/const";

export default function TimeLine() {
  const [activatedTimeline, setActivatedTimeline] = useState<TimelineType>(all);
  const timelineTypeList = [career, project, activity, all];

  const handleClickFilterButon = (type: TimelineType) => {
    setActivatedTimeline(type);
  };
  return (
    <div className="pt-20 flex flex-col items-center">
      <div className="xl:w-1/2 lg:w-1/2 w-4/5">
        <div>
          {timelineTypeList.map((type) => (
            <button
              key={type}
              className={`border-solid px-3 py-2 rounded-full text-base mr-3 ${
                activatedTimeline === type
                  ? "bg-white text-black"
                  : "text-white bg-gray-800"
              }`}
              onClick={() => handleClickFilterButon(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="ml-2 pt-10 pb-20">
          {activatedTimeline === all && (
            <>
              <Career />
              <Project />
              <Activity />
            </>
          )}
          {activatedTimeline === career && <Career />}
          {activatedTimeline === project && <Project />}
          {activatedTimeline === activity && <Activity />}
        </div>
      </div>
    </div>
  );
}
