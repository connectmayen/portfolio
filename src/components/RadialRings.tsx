"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Tool {
  name: string;
  icon: string;
  ringIndex: number;
  angle: number;
}

const tools: Tool[] = [
  { name: "Photoshop", icon: "/icons/ps.png", ringIndex: 0, angle: 120 },
  { name: "Illustrator", icon: "/icons/ai.png", ringIndex: 0, angle: 290 },

  { name: "Premiere Pro", icon: "/icons/pp.png", ringIndex: 1, angle: 360 },
  { name: "Audition", icon: "/icons/au.png", ringIndex: 1, angle: 210 },

  { name: "After Effects", icon: "/icons/ae.png", ringIndex: 2, angle: 210 },
  { name: "DaVinci", icon: "/icons/dvr.png", ringIndex: 2, angle: 150 },
  { name: "CapCut", icon: "/icons/cc.png", ringIndex: 2, angle: 340 },
];

export default function RadialRings() {
  const containerRef = useRef<HTMLDivElement>(null);

  const rings = [60, 95, 125];
  const ringSpeed = [80, 110, 140];
  const ringDirection = [1, -1, 1];

  // 🔹 Intro animation (restore your original behavior)
  const ringVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.4,
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  // Scroll-based 3D depth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const depth = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const tiltX = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const tiltY = useTransform(scrollYProgress, [0, 1], [0, -18]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ perspective: "1200px" }}
    >
      {rings.map((size, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={ringVariants}
          initial="hidden"
          animate="visible"
          className="absolute rounded-full border border-white/20"
          style={{
            width: `${size}vmin`,
            height: `${size}vmin`,
            transformStyle: "preserve-3d",
            willChange: "transform",
            transform: "translateZ(0)", // Force GPU acceleration
          }}
        >
          {/* ROTATION STARTS AFTER INTRO */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ rotateZ: 360 * ringDirection[i] }}
            transition={{
              delay: 1.8, // ⬅️ lets hero text & image breathe
              duration: ringSpeed[i],
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {tools
              .filter((tool) => tool.ringIndex === i)
              .map((tool) => {
                const radius = size / 2;
                const rad = (tool.angle * Math.PI) / 180;
                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);

                return (
                  <div
                    key={tool.name}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}vmin, ${y}vmin)`,
                    }}
                  >
                    <motion.div
                      className="relative w-10 h-10 sm:w-14 sm:h-14"
                      style={{
                        transformStyle: "preserve-3d",
                        z: depth,
                        rotateX: tiltX,
                        rotateY: tiltY,
                      }}
                      animate={{ rotateZ: -360 * ringDirection[i] }}
                      transition={{
                        delay: 1.8,
                        duration: ringSpeed[i],
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.35)]" />

                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        fill
                        className="object-contain p-2"
                      />
                    </motion.div>
                  </div>
                );
              })}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
