// Centralized configuration constants

import type { Tool } from '@/types';

// Re-export navLinks from site-data for backward compatibility
export { navLinks, blogPosts } from '@/data/site-data';

// Software tools shown in About section
export const softwareTools: Tool[] = [
    { name: "Adobe Illustrator", icon: "/icons/ai.png" },
    { name: "Adobe Photoshop", icon: "/icons/ps.png" },
    { name: "Adobe After Effects", icon: "/icons/ae.png" },
    { name: "Adobe Premiere Pro", icon: "/icons/pp.png" },
    { name: "Adobe Audition", icon: "/icons/au.png" },
    { name: "CapCut", icon: "/icons/cc.png" },
    { name: "DaVinci Resolve", icon: "/icons/dvr.png" },
];
