"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
    videoId: string;
    role?: string;
    videoData: {
        title: string;
        author_name: string;
        thumbnail_url: string;
    } | null;
    priority?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    videoId,
    role,
    videoData,
    priority = false,
}) => {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    // Body scroll lock – safe version
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    // Escape to close
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    if (!videoData) {
        return (
            <div className="w-full p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] animate-pulse">
                <div className="aspect-video rounded-xl bg-zinc-800/30 mb-4" />
                <div className="h-4 w-3/4 bg-zinc-800/40 rounded mb-2" />
                <div className="h-3 w-1/3 bg-zinc-800/40 rounded" />
            </div>
        );
    }

    const modal = (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpen(false)}
                    role="dialog"
                    aria-modal="true"
                >
                    <motion.div
                        className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
                        initial={{ scale: 0.94, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.94, opacity: 0 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                            title={videoData.title}
                        />

                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close video"
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition"
                        >
                            ✕
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <>
            <motion.article
                className="group relative h-full rounded-2xl border border-white/[0.05] bg-white/[0.015] p-4 transition-colors hover:bg-white/[0.03]"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                role="button"
                tabIndex={0}
                onClick={() => setOpen(true)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(true)}
                aria-label={`Play ${videoData.title}`}
            >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
                    <Image
                        src={videoData.thumbnail_url}
                        alt={videoData.title}
                        fill
                        priority={priority}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                    />

                    {/* Editorial overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Play */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white ml-0.5">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold leading-snug text-zinc-100 line-clamp-2">
                        {videoData.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs uppercase tracking-widest text-zinc-400 mt-auto">
                        <span>{videoData.author_name}</span>
                        {role && (
                            <span className="px-2 py-0.5 border border-white/20 rounded-full text-[9px]">
                                {role}
                            </span>
                        )}
                    </div>
                </div>
            </motion.article>

            {mounted && createPortal(modal, document.body)}
        </>
    );
};

export default ProjectCard;
