/* eslint-disable import/no-anonymous-default-export */
import { useCallback, useState } from "react";

export default () => {
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const intersectionRef = useCallback((el: any) => {
    if (el) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { threshold: 1 }
      );

      observer.observe(el);
      setObserver(observer);
    }
  }, []);

  return { observer, isIntersecting, intersectionRef };
};
