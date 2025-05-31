"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import ParallaxText from "@/components/paralax-text";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["50px", "end start"],
  });

  // Map scroll progress to scale.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const translateY = useTransform(scrollYProgress, [0, 1], [1, 180]);

  return (
    <section
      ref={ref}
      className="relative h-[90vh] sm:[90vh] overflow-hidden flex items-center justify-center"
    >
      <div className="heroBackground w-[500px] h-[500px] blur-[60px] -right-[40vw] sm:w-[850px] sm:h-[850px] sm:blur-[130px] sm:-right-[5vw] xl:w-[2050px] xl:h-[2050px] xl:-right-[20vw] xl:-top-[20vh]" />

      <motion.div
        style={{ translateY }}
        className="relative flex flex-col items-center z-20 mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.7 },
          }}
          className="px-9 -mb-3 sm:-mb-5 z-10"
        >
          <h1 className="flex flex-col items-center text-6xl sm:text-[11vw] xl:text-[5vw] text-shadow-2xs font-black leading-[0.8]">
            <span className="sm:-translate-x-12">Creative</span>
            <span className="sm:translate-x-12">Agency</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.7 },
          }}
          className="w-3/4 sm:w-4/6 shadow-glow"
        >
          <motion.div
            className="rounded-2xl md:rounded-4xl overflow-hidden mask-b-from-40% mask-b-to-100%"
            style={{ scale }}
          >
            <Image
              src="/hero-image.jpg"
              alt="Website Design"
              width={1080}
              height={900}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.7 },
        }}
        className="absolute bottom-0 left-0 right-0"
      >
        <ParallaxText baseVelocity={-2}>Knotty Studios</ParallaxText>
        <ParallaxText baseVelocity={1}>Digital Agency</ParallaxText>
      </motion.div>
    </section>
  );
}
