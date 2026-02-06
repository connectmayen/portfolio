"use client";

import React from "react";
import type { NavLink } from "@/types";

interface NavbarProps {
    navLinks: NavLink[];
    activeSection: string;
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, activeSection, onNavClick }) => {
    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-8">
            <div className="w-full max-w-5xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-white/12 backdrop-blur border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">

                {/* Home Link (Left) */}
                <a
                    href="#home"
                    onClick={(e) => onNavClick(e, 'home')}
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
                            onClick={(e) => onNavClick(e, link.id)}
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
    );
};

export default Navbar;
