import { TimelineType } from "@/types";
import { ReactNode } from "react";

interface TimelineEventProps {
  title: string;
  subtitle?: string;
  type: Omit<TimelineType, "all">;
  startDate: string;
  endDate?: string;
  description?: ReactNode;
  icon?: string;
  children?: ReactNode;
}

export default function TimelineEvent(props: TimelineEventProps) {
  const {
    title,
    subtitle,
    type,
    startDate,
    endDate,
    description,
    icon,
    children,
  } = props;

  return (
    <li className="pb-10 ms-6">
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
