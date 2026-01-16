"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import youtubeMetadata from "@/data/youtube-metadata.json";

interface MyWorkMobileProps {
    portfolioRef: React.RefObject<HTMLDivElement>;
}

const MyWorkMobile: React.FC<MyWorkMobileProps> = ({ portfolioRef }) => {
    return (
        <div className="block md:hidden">
            <section
                id="my-work-mobile"
                className="relative z-30 -mt-10 pt-0 pb-10 px-4"
                ref={portfolioRef}
            >
                <div
                    className="bg-black/90 backdrop-blur-xl rounded-3xl p-6 border border-white/20 ring-1 ring-white/10"
                >
                    <h2 className="text-4xl font-bold text-zinc-100 mb-8 animate-fade-in-up text-center">
                        My Work
                    </h2>

                    <div className="flex flex-col gap-8">
                        {projects
                            .filter((p) => p.isFeatured)
                            .slice(0, 6)
                            .map((item, index) => (
                                <ProjectCard
                                    key={item.id}
                                    videoId={item.id}
                                    role={item.role}
                                    videoData={youtubeMetadata[item.id as keyof typeof youtubeMetadata] || null}
                                    priority={index < 2}
                                />
                            ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Link href="/portfolio">
                            <button
                                className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-zinc-100 font-semibold transition-all duration-300 shadow-xl overflow-hidden w-full"
                            >
                                <span className="relative z-10 flex justify-center items-center gap-2">
                                    View All Projects
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyWorkMobile;
