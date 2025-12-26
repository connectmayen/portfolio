"use client";

import { motion, MotionValue } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import youtubeMetadata from "@/data/youtube-metadata.json";

interface MyWorkProps {
  portfolioRef: React.RefObject<HTMLDivElement>;
  smoothRotateX: MotionValue<number>;
  smoothScale: MotionValue<number>;
}

const MyWork: React.FC<MyWorkProps> = ({
  portfolioRef,
  smoothRotateX,
  smoothScale,
}) => {

  return (
    <section
      id="my-work"
      className="relative z-30 -mt-20 pt-0 pb-10 px-6 sm:px-8 lg:px-12"
      ref={portfolioRef}
    >
      <motion.div
        style={{
          rotateX: smoothRotateX,
          scale: smoothScale,
          transformPerspective: 1200,
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.2), 0 20px 50px rgba(0,0,0,0.5)",
        }}
        className="max-w-7xl mx-auto bg-black/90 backdrop-blur-xl rounded-3xl p-10 sm:p-12 border border-white/20 ring-1 ring-white/10 will-change-transform"
        transition={{ type: "spring", stiffness: 120, damping: 30 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-12 animate-fade-in-up">
          My Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((p) => p.isFeatured)
            .slice(0, 6)
            .map((item, index) => (
              <ProjectCard
                key={item.id}
                videoId={item.id}
                role={item.role}
                videoData={youtubeMetadata[item.id as keyof typeof youtubeMetadata] || null}
                priority={index < 3}
              />
            ))}
        </div>

        {/* Future Category Filter Placeholder: 
            [All] [Documentaries] [Podcasts] [Talking Heads] [Shorts] 
        */}

        <div className="mt-16 flex justify-center">
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl text-zinc-100 font-semibold transition-all duration-300 shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Projects
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default MyWork;
