import React, { useEffect, useState } from "react";
import BlurText from "./BlurText";

type Phase = 1 | 2;

interface PreloaderProps {
  onDone?: () => void;
  durationMs?: number;
}

// Timings: line1 ~2s, line2 animates fully: ~3.5s (7 words @ 380ms + 600ms)
// Total ~5.7s; set duration ~6s with a small buffer
const Preloader: React.FC<PreloaderProps> = ({ onDone, durationMs = 6000 }) => {
  const [phase, setPhase] = useState<Phase>(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase(2), 2000); // show second line immediately after first
    const t3 = window.setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, durationMs);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t3);
    };
  }, [durationMs, onDone]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white" />
      <div className="pointer-events-none absolute -top-24 -left-24 w-[360px] h-[360px] rounded-full bg-[#bd8318] opacity-25 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#bd8318] opacity-25 blur-3xl animate-blob-2" />

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative w-full max-w-3xl p-0">
          <div className="relative h-[3.2rem] md:h-[4.2rem]">
            {/* Line 1: Introducing */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${phase === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            >
              <BlurText
                text="Introducing Spark Labs..."
                delay={380}
                animateBy="words"
                direction="bottom"
                className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-center"
                wordClassName={(w) => (w.toLowerCase() === "spark" ? "text-[#bd8318] underline underline-offset-4 decoration-[#bd8318]/70" : "text-[#000] underline underline-offset-4 decoration-black/50")}
                blurAmount={8}
              />
            </div>

            {/* Line 2: Tagline */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${phase === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
            >
              <BlurText
                text="Spark Your Business with Our AI Agents"
                delay={380}
                animateBy="words"
                direction="bottom"
                className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-center"
                wordClassName={(w) => (w.toLowerCase() === "spark" ? "text-[#bd8318] underline underline-offset-4 decoration-[#bd8318]/70" : "text-[#000] underline underline-offset-4 decoration-black/50")}
                blurAmount={8}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 animate-preloader-fade bg-white/0" />
    </div>
  );
};

export default Preloader;


