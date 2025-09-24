import React, { useEffect, useMemo, useState } from "react";

type AnimateBy = "letters" | "words";
type Direction = "top" | "bottom" | "left" | "right";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: AnimateBy;
  direction?: Direction;
  onAnimationComplete?: () => void;
  className?: string;
  wordClassName?: (word: string) => string | undefined;
  blurAmount?: number; // starting blur amount in px
}

const directionToTransform: Record<Direction, string> = {
  top: "translateY(-8px)",
  bottom: "translateY(8px)",
  left: "translateX(-8px)",
  right: "translateX(8px)",
};

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 120,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className,
  wordClassName,
  blurAmount = 8,
}) => {
  const items = useMemo(() => {
    return animateBy === "words" ? text.split(/(\s+)/) : Array.from(text);
  }, [text, animateBy]);

  const [active, setActive] = useState(false);

  useEffect(() => {
    // Activate animation shortly after mount so transitions can run
    const start = window.setTimeout(() => setActive(true), 20);
    // Compute last animated index excluding whitespace chunks
    const numAnimated = items.filter((chunk) => !/\s+/.test(chunk)).length;
    const totalVisibleDelay = (numAnimated - 1) * delay + 600; // include transition duration
    const doneTimer = window.setTimeout(() => {
      onAnimationComplete?.();
    }, Math.max(totalVisibleDelay, 0));
    return () => {
      window.clearTimeout(start);
      window.clearTimeout(doneTimer);
    };
  }, [items, delay, onAnimationComplete]);

  return (
    <span className={className} aria-hidden={false}>
      {items.map((chunk, index) => {
        const isSpace = /\s+/.test(chunk);
        const extraClass = !isSpace && wordClassName ? wordClassName(chunk.replace(/[^\w]/g, "")) : undefined;
        // compute delay index ignoring spaces so timing is consistent across phrases
        const animatedIndex = items.slice(0, index + 1).filter((c) => !/\s+/.test(c)).length - 1;
        return isSpace ? (
          <span key={index}>{chunk}</span>
        ) : (
          <span
            key={index}
            className={`inline-block will-change-transform will-change-filter ${extraClass ?? ""}`}
            style={{
              transition: "opacity 600ms ease, filter 600ms ease, transform 600ms ease",
              transitionDelay: `${Math.max(animatedIndex, 0) * delay}ms`,
              filter: active ? "blur(0px)" : `blur(${blurAmount}px)`,
              transform: active ? "none" : directionToTransform[direction],
              opacity: active ? 1 : 0,
            }}
          >
            {chunk}
          </span>
        );
      })}
    </span>
  );
};

export default BlurText;


