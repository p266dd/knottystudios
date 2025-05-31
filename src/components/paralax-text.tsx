"use client";

import { useRef } from "react";
import { wrap } from "framer-motion";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

export default function ParallaxText({
  children,
  baseVelocity = 100,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex flex-nowrap -tracking-wide leading-3.5 whitespace-nowrap overflow-hidden [mask-image:radial-gradient(circle,white_0%,transparent_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat]">
      <motion.div className="flex flex-nowrap" style={{ x }}>
        <span className="block font-black uppercase mr-12 whitespace-nowrap text-7xl text-white/15 sm:text-9xl">
          {children}
        </span>
        <span className="block font-black uppercase mr-12 whitespace-nowrap text-7xl text-white/15 sm:text-9xl">
          {children}
        </span>
        <span className="block font-black uppercase mr-12 whitespace-nowrap text-7xl text-white/15 sm:text-9xl">
          {children}
        </span>
        <span className="block font-black uppercase mr-12 whitespace-nowrap text-7xl text-white/15 sm:text-9xl">
          {children}
        </span>
      </motion.div>
    </div>
  );
}
