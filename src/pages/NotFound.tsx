import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

type Direction = "left" | "right";
type Size = "big" | "small";

const marqueeAnimation = (direction: Direction) => ({
  animate: {
    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
  },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    duration: 22,
    ease: "linear",
  },
});

const MarqueeRow = ({
  direction = "left",
  size = "big",
}: {
  direction?: Direction;
  size?: Size;
}) => {
  const textClass =
    size === "big"
      ? "text-[22vw] sm:text-[16vw] md:text-[12vw] leading-none font-semibold tracking-tight text-foreground/5"
      : "text-[4vw] sm:text-[2.4vw] md:text-[1.2vw] leading-none font-medium tracking-[0.35em] text-foreground/15 uppercase";

  const items = useMemo(() => Array.from({ length: 8 }), []);

  return (
    <motion.div
      className="flex gap-10 whitespace-nowrap"
      {...marqueeAnimation(direction)}
    >
      {[0, 1].map((loop) => (
        <span key={loop} className="flex gap-10">
          {items.map((_, i) => (
            <span key={`${loop}-${i}`} className={textClass}>
              PAGE NOT FOUND
            </span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

const MarqueeBlock = ({ direction }: { direction: Direction }) => (
  <div className="space-y-2 sm:space-y-3">
    <MarqueeRow direction={direction} size="big" />
    <MarqueeRow direction={direction} size="small" />
  </div>
);

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      {/* бегущие тексты */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="
            absolute inset-x-[-20%]
            bottom-0
            sm:bottom-auto sm:top-1/4
            space-y-2 sm:space-y-3
          "
        >
          <MarqueeBlock direction="left" />
          <MarqueeBlock direction="right" />
          <MarqueeBlock direction="left" />
        </div>
      </div>

      {/* gold-градиент */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(250,204,21,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(250,204,21,0.12),transparent_55%)] mix-blend-screen opacity-70" />

      {/* кнопка внизу */}
      <div className="relative z-10 flex h-screen flex-col justify-end pb-10">
        <div className="flex justify-center">
          <a
            href="/"
            className="rounded-full border border-primary/60 bg-background/85 px-6 py-2.5 text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-primary hover:bg-primary hover:text-black transition-colors shadow-[0_18px_45px_rgba(0,0,0,0.75)]"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;