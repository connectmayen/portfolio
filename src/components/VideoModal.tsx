"use client";

import { motion } from "framer-motion";
import React from "react";
import { Project } from "@/data/projects";

export default function VideoModal({ open, project, onClose }: { open: boolean; project: Project | null; onClose: () => void; }) {
  if (!open || !project) return null;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-60 flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} className="relative max-w-4xl w-full bg-black/95 rounded-2xl p-6 border border-white/10">
        <div className="flex justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-semibold text-zinc-100">{project.title}</h3>
          </div>
          <button aria-label="Close" onClick={onClose} className="text-zinc-300 bg-white/6 p-2 rounded-md">
            ✕
          </button>
        </div>

        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${project.id}`}
            title={project.title}
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="text-zinc-300">
          <p className="mb-3">{project.description}</p>
        </div>

      </motion.div>
    </motion.div>
  );
}
