"use client";

import { useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { navLinks } from "@/data/site-data";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import MyWork from "@/components/portfolio/MyWork";
import About from "@/components/layout/About";
import Blogs from "@/components/blog/Blogs";
import Contact from "@/components/contact/Contact";

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
                <Navbar
                    navLinks={navLinks}
                    activeSection={activeSection}
                    onNavClick={handleNavClick}
                />
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
