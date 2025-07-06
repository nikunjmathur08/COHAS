import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatItemsProps {
  label: string,
  endValue: number,
  suffix?: string,
  duration?: number,
}

const StatItem = ({label, endValue, suffix = "", duration = 2000}: StatItemsProps) => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const fps = 60;
    const increment = endValue / (duration / (1000 / fps));

    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setValue(endValue);
        clearInterval(interval);
      } else {
        setValue(Math.floor(start));
      }
    }, 1000/fps);

    return () => clearInterval(interval);
  }, [endValue, duration]);

  return (
    <div className="flex flex-col items-center border-r border-dashed border-gray-300 last:border-none">
      <p className="text-black mb-2">{label}</p>
      <h3 className="text-4xl text-primary font-bold">
        {value.toLocaleString()}
        {suffix}
      </h3>
    </div>
  );
};

export default StatItem;