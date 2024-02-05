import { activity, all, career, project } from "@/const";

export type TimelineType =
  | typeof all
  | typeof project
  | typeof career
  | typeof activity;
