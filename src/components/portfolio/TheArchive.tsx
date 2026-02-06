"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import youtubeMetadata from "@/data/youtube-metadata.json";

type CategoryFilter =
  | "all"
  | "documentary"
  | "podcast"
  | "talking-head"
  | "shorts";

const categories: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "documentary", label: "Documentaries" },
  { id: "podcast", label: "Podcasts" },
  { id: "talking-head", label: "Talking Heads" },
  { id: "shorts", label: "Shorts" },
];

export default function TheArchive() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  /* ================= SCROLL BACKGROUND (STABLE) ================= */
  const { scrollYProgress } = useScroll();
  const xRaw = useTransform(scrollYProgress, [0, 1], ["10vw", "70vw"]);
  const yRaw = useTransform(scrollYProgress, [0, 1], ["5vh", "85vh"]);
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [0.9, 1.2]);
  const opacityRaw = useTransform(scrollYProgress, [0, 1], [0.4, 0.25]);

  const spring = { stiffness: 60, damping: 20, restDelta: 0.001 };
  const x = useSpring(xRaw, spring);
  const y = useSpring(yRaw, spring);
  const scale = useSpring(scaleRaw, spring);
  const opacity = useSpring(opacityRaw, spring);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          style={{ x, y, scale, opacity }}
          className="absolute w-[45vw] h-[45vw] max-w-[720px] max-h-[720px] bg-indigo-500/40 blur-[180px] rounded-full"
        />
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-soft-light"
          style={{
            backgroundImage: "url('/grain_01.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "2048px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <Link
            href="/"
            className="inline-flex items-center text-zinc-400 hover:text-white transition mb-6 group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            The Archive
          </h1>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl">
            A complete collection of crafted stories, frames, and ideas.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-white/[0.08] text-white border-white/20 shadow-lg"
                  : "bg-white/[0.02] text-zinc-500 border-white/5 hover:text-zinc-300 hover:bg-white/[0.04]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="bg-white/[0.03] rounded-3xl p-8 sm:p-10 border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                >
                  <ProjectCard
                    videoId={item.id}
                    role={item.role}
                    videoData={
                      youtubeMetadata[item.id as keyof typeof youtubeMetadata] || null
                    }
                    priority={index < 3}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}