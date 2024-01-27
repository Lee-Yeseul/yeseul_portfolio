"use client";

import { useState } from "react";
import Activity from "./activity";
import All from "./all";
import Career from "./career";
import Project from "./project";

const all = "all" as const;
const project = "project" as const;
const career = "career" as const;
const activity = "activity" as const;
type TimelineType =
  | typeof all
  | typeof project
  | typeof career
  | typeof activity;

export default function TimeLine() {
  const [activatedTimeline, setActivatedTimeline] = useState<TimelineType>(all);

  const handleClickFilterButon = (type: TimelineType) => {
    setActivatedTimeline(type);
  };
  return (
    <div className="pt-20 flex flex-col items-center bg-blue-1000 text-blue-50">
      <div className="w-1/2">
        <div>
          <button
            className={`border-solid px-3 py-2 rounded-full text-base mr-3 ${
              activatedTimeline === all
                ? "bg-white text-black"
                : "text-white bg-gray-800"
            }`}
            onClick={() => handleClickFilterButon(all)}
          >
            all
          </button>
          <button
            className={`border-solid px-3 py-2 rounded-full text-base mr-3 ${
              activatedTimeline === career
                ? "bg-white text-black"
                : "text-white bg-gray-800"
            }`}
            onClick={() => handleClickFilterButon(career)}
          >
            career
          </button>
          <button
            className={`border-solid px-3 py-2 rounded-full text-base mr-3 ${
              activatedTimeline === project
                ? "bg-white text-black"
                : "text-white bg-gray-800"
            }`}
            onClick={() => handleClickFilterButon(project)}
          >
            project
          </button>
          <button
            className={`border-solid px-3 py-2 rounded-full text-base mr-3 ${
              activatedTimeline === activity
                ? "bg-white text-black"
                : "text-white bg-gray-800"
            }`}
            onClick={() => handleClickFilterButon(activity)}
          >
            activity
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
