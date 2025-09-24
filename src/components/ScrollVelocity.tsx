import React from "react";

interface ScrollVelocityProps {
  texts: string[];
  velocity?: number; // higher = faster
  className?: string;
}

const ScrollVelocity: React.FC<ScrollVelocityProps> = ({ texts, velocity = 2, className }) => {
  const durationSec = Math.max(6 / Math.max(velocity, 0.1), 2); // clamp reasonable range

  const renderRow = (key: string) => (
    <div key={key} className="flex items-center gap-8 px-4">
      {texts.map((t, i) => (
        <span
          key={i}
          className="whitespace-nowrap text-base md:text-lg lg:text-xl font-semibold text-foreground/90 tracking-wide"
        >
          {t}
        </span>
      ))}
    </div>
  );

  return (
    <div className={"relative overflow-hidden w-full " + (className ?? "")}> 
      <div
        className="scroll-velocity flex"
        style={{ animationDuration: `${durationSec}s` }}
        aria-hidden
      >
        {renderRow("a")}
        {renderRow("b")}
        {renderRow("c")}
      </div>
    </div>
  );
};

export default ScrollVelocity;


