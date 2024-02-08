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

  const handleClickFilterButon = (type: TimelineType) => {
    setActivatedTimeline(type);
  };
  return (
    <div className="pt-20 flex flex-col items-center">
      <div className="xl:w-1/2 lg:w-1/2 w-4/5">
        <div>
          <button
            className={`border-solid px-3 py-2 rounded-full text-base mr-3 ${
              activatedTimeline === all
                ? "bg-white text-black"
                : "text-white bg-gray-800"
            }`}
            onClick={() => handleClickFilterButon(all)}
          >
            {all}
          </button>
          <button
            className={`border-solid px-3 py-2 rounded-full text-base mr-3 ${
              activatedTimeline === career
                ? "bg-white text-black"
                : "text-white bg-gray-800"
            }`}
            onClick={() => handleClickFilterButon(career)}
          >
            {career}
          </button>
          <button
            className={`border-solid px-3 py-2 rounded-full text-base mr-3 ${
              activatedTimeline === project
                ? "bg-white text-black"
                : "text-white bg-gray-800"
            }`}
            onClick={() => handleClickFilterButon(project)}
          >
            {project}
          </button>
          <button
            className={`border-solid px-3 py-2 rounded-full text-base mr-3 ${
              activatedTimeline === activity
                ? "bg-white text-black"
                : "text-white bg-gray-800"
            }`}
            onClick={() => handleClickFilterButon(activity)}
          >
            {activity}
          </button>
        </div>
        <div className="ml-2 pt-10 pb-20">
          {activatedTimeline === all && <All />}
          {activatedTimeline === career && <Career />}
          {activatedTimeline === project && <Project />}
          {activatedTimeline === activity && <Activity />}
        </div>
      </div>
    </div>
  );
}
