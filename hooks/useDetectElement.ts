import { useEffect, useState } from "react";

interface UseDetectElementProps {
  threshold: number;
  onIntersect: (entries: IntersectionObserverEntry[]) => void;
}

export default function useDetectElement({
  threshold,
  onIntersect,
}: UseDetectElementProps) {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(onIntersect, {
      threshold,
    });
    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [onIntersect, target]);

  return [setTarget];
}
