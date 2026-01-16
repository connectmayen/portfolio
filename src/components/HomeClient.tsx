"use client";

import { useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { navLinks } from "@/data/site-data";
import Hero from "@/components/Hero";
import MyWork from "@/components/MyWork";
import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";

export default function HomeClient() {
    const myWorkRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState<string>("home");

    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        if (typeof window === "undefined") return;
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.pushState(null, "", window.location.pathname + window.location.search);
            setActiveSection("home");
            return;
        }
        const el = document.getElementById(id);
        if (el) {
            // Calculate position relative to document
            const rect = el.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const elementPosition = rect.top + scrollTop;
            const offsetPosition = elementPosition - 100;

            const distance = Math.abs((window.pageYOffset || document.documentElement.scrollTop) - offsetPosition);
            // Always use instant scroll to eliminate any lag
            const behavior: ScrollBehavior = "auto";

            window.scrollTo({
                top: offsetPosition,
                behavior
            });

            try {
                history.pushState(null, "", `#${id}`);
            } catch (err) {
                console.error("Failed to push state:", err);
            }
            setActiveSection(id);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: myWorkRef,
        offset: ["start end", "start center"],
    });
    const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
    const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const ids = ["home", "my-work", "about", "blogs", "contact"];
        const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const best = entries.reduce<IntersectionObserverEntry | null>((currBest, ent) => {
                    if (!currBest) return ent;
                    return ent.intersectionRatio > currBest.intersectionRatio ? ent : currBest;
                }, null);
                if (best && best.isIntersecting && best.target instanceof HTMLElement) {
                    setActiveSection(best.target.id);
                }
            },
            { root: null, threshold: [0.1, 0.5, 0.8], rootMargin: '-10% 0px -70% 0px' }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const srcs = ["/gmail.png", "/linkedin.png", "/instagram.png", "/whatsapp.png"];

        // Preload Contact images immediately on mount
        srcs.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">

            <main className="relative z-10 pt-20">
                {/* Top navigation: centered links for Home, About, Blogs, Contact */}
                <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-8">
                    <div className="w-full max-w-5xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-white/12 backdrop-blur border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">

                        {/* Home Link (Left) */}
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, 'home')}
                            className="text-white text-base sm:text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
                        >
                            Home
                        </a>

                        {/* Centered Links */}
                        <div className="flex items-center gap-3 sm:gap-8">
                            {navLinks.filter(link => link.id !== 'home').map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    aria-label={link.label}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className={`${activeSection === link.id ? 'text-white' : 'text-zinc-400'} text-xs sm:text-sm font-medium hover:text-white transition-colors duration-150`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Spacer for centering */}
                        <div className="w-[50px] hidden sm:block"></div>
                    </div>
                </nav>
                <Hero onNavClick={handleNavClick} />

                <MyWork
                    portfolioRef={myWorkRef as React.RefObject<HTMLDivElement>}
                    smoothRotateX={smoothRotateX}
                    smoothScale={smoothScale}
                />

                <About />

                <Blogs />

                <Contact />


                {/* Footer */}
                <footer className="py-8 px-6 sm:px-8 lg:px-12 border-t border-zinc-800">
                    <div className="max-w-7xl mx-auto text-center text-zinc-400">
                        <p>© {new Date().getFullYear()} Mayen. All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
}
