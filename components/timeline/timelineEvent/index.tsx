import { TimelineType } from "@/types";
import { ReactNode } from "react";

interface TimelineEventProps {
  event: {
    title: string;
    subtitle: string;
    type: Omit<TimelineType, "all">;
    startDate: string;
    endDate?: string;
    icon?: any;
    description: string;
  };
  children?: ReactNode;
}

export default function TimelineEvent({ event, children }: TimelineEventProps) {
  const { title, subtitle, type, startDate, endDate, icon, description } =
    event;
  return (
    <li className="mb-20 ms-6">
      <span className="absolute flex items-center justify-center rounded-full bg-blue-1000 -start-2">
        {icon ? icon : "⚪️"}
      </span>
      <div className="tex-lg">
        {startDate} {endDate && `- ${endDate}`} / {type}
      </div>
      <div className="mt-2 text-xl font-bold">{title}</div>
      <div className="mt-1 text-base">{subtitle}</div>
      <div className="mt-2 text-base">{description}</div>
      {children}
    </li>
  );
}
