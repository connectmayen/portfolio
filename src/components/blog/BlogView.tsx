"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "@/data/site-data";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    clamp,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlogView = () => {
    const { id } = useParams();
    const [post, setPost] = useState<any>(null);

    /* ---------------- Cursor Motion ---------------- */
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 60, damping: 30 });
    const smoothY = useSpring(mouseY, { stiffness: 60, damping: 30 });

    /* ---------------- Viewport ---------------- */
    const [vp, setVp] = useState({ w: 1200, h: 800 });

    useEffect(() => {
        const foundPost = blogPosts.find((p) => p.id === Number(id));
        if (foundPost) setPost(foundPost);

        if (typeof window === "undefined") return;
        if ("ontouchstart" in window) return; // Disable cursor effects on touch devices

        const updateVp = () =>
            setVp({ w: window.innerWidth, h: window.innerHeight });

        updateVp();
        window.addEventListener("resize", updateVp);

        mouseX.set(window.innerWidth / 2);
        mouseY.set(window.innerHeight / 2);

        const handleMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMove);

        return () => {
            window.removeEventListener("resize", updateVp);
            window.removeEventListener("mousemove", handleMove);
        };
    }, [id, mouseX, mouseY]);

    /* ---------------- Glow Transforms ---------------- */
    const glow1X = useTransform(smoothX, (v) =>
        clamp(-vp.w * 0.35, (v - vp.w / 2) * 0.6, vp.w * 0.35)
    );
    const glow1Y = useTransform(smoothY, (v) =>
        clamp(-vp.h * 0.35, (v - vp.h / 2) * 0.6, vp.h * 0.35)
    );

    const glow2X = useTransform(smoothX, (v) =>
        clamp(-vp.w * 0.25, (v - vp.w / 2) * -0.4, vp.w * 0.25)
    );
    const glow2Y = useTransform(smoothY, (v) =>
        clamp(-vp.h * 0.25, (v - vp.h / 2) * -0.4, vp.h * 0.25)
    );

    if (!post) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-zinc-700 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black text-zinc-100 relative overflow-hidden">
            {/* ================= BACKGROUND ================= */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    style={{ x: glow1X, y: glow1Y }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-indigo-500/20 blur-[160px] rounded-full"
                />

                <motion.div
                    style={{ x: glow2X, y: glow2Y }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] bg-zinc-500/15 blur-[150px] rounded-full"
                />

                <div
                    className="absolute inset-0 opacity-[0.08] mix-blend-soft-light"
                    style={{
                        backgroundImage: "url('/grain_01.jpg')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "2048px",
                    }}
                />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
                {/* Back Nav */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12"
                >
                    <Link
                        href="/#blogs"
                        className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white"
                    >
                        <svg
                            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
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
                        <span className="text-sm uppercase tracking-wide">
                            Back to Portfolio
                        </span>
                    </Link>
                </motion.div>

                <article className="space-y-12">
                    {/* Header */}
                    <header className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl sm:text-6xl font-bold tracking-tight"
                        >
                            {post.title}
                        </motion.h1>

                        <div className="flex items-center gap-3 text-sm text-zinc-400">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
                                <Image
                                    src="/IMG_6576.JPG"
                                    alt="Nur Al Mahmud Mayen"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-zinc-300">Nur Al Mahmud Mayen</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                    >
                        <Image
                            src={post.image || "/placeholder.jpg"}
                            alt={post.title}
                            fill
                            className="object-cover opacity-80"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-invert prose-zinc max-w-none"
                    >
                        <p className="text-xl italic border-l-2 border-zinc-700 pl-6 text-zinc-300">
                            {post.description}
                        </p>

                        <div className="space-y-8 text-zinc-400">
                            {post.content?.map((item: any, idx: number) =>
                                item.type === "heading" ? (
                                    <h2
                                        key={idx}
                                        className="text-2xl font-bold text-white mt-12"
                                    >
                                        {item.text}
                                    </h2>
                                ) : (
                                    <p key={idx}>{item.text}</p>
                                )
                            )}
                        </div>
                    </motion.div>

                    {/* Footer CTA */}
                    <motion.footer
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="pt-16 border-t border-white/25 mt-24"
                    >
                        <div className="group relative bg-white/12 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.6)] flex flex-col sm:flex-row items-center justify-between gap-8 overflow-hidden">
                            {/* Internal interactive glow backdrop */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 space-y-2 text-center sm:text-left">
                                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                    Interested in working together?
                                </h4>
                                <p className="text-zinc-400 text-base font-light leading-relaxed max-w-sm">
                                    Let’s turn your raw footage into a compelling narrative that captivates your audience.
                                </p>
                            </div>

                            <div className="relative z-10">
                                <Link href="/#contact">
                                    <motion.button
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="relative px-7 py-3.5 bg-white text-black font-bold rounded-xl hover:bg-zinc-100 transition-colors shadow-[0_10px_25px_rgba(255,255,255,0.1)] overflow-hidden group/btn text-sm"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Get in Touch
                                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-zinc-200 translate-y-full group-hover/btn:translate-y-0 transition-transform" />
                                    </motion.button>
                                </Link>
                            </div>

                            {/* Decorative accent border glow */}
                            <div className="absolute top-0 inset-x-20 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        </div>
                    </motion.footer>
                </article>
            </div>
        </main>
    );
};

export default BlogView;
