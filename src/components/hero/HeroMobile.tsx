import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

// ----------------------------------------------------------------------
// 🎮 CONTROLS (Like After Effects)
// Position (0,0) is the CENTER of the profile picture.
// X: Negative = Left, Positive = Right
// Y: Negative = Up, Positive = Down
// Rotation: Degrees
// Size: Pixel width/height
// ----------------------------------------------------------------------
const iconLayers = [
    // 1. Illustrator - Extreme Left (Ear Level)
    { id: "ai", icon: "/icons/ai.png", x: -105, y: 40, rotate: -12, size: 90, delay: 0 },

    // 2. Premiere Pro - Upper Left
    { id: "pp", icon: "/icons/pp.png", x: -75, y: 10, rotate: -12, size: 130, delay: 0.15 },

    // 3. Photoshop - Top Left Peak
    { id: "ps", icon: "/icons/ps.png", x: -40, y: -5, rotate: -12, size: 90, delay: 0.35 },

    // 4. CapCut - Top Center (Crown)
    { id: "cc", icon: "/icons/cc.png", x: 0, y: 10, rotate: 0, size: 44, delay: 0.1 },

    // 5. DaVinci - Top Right Peak (Mirror of Ps)
    { id: "dvr", icon: "/icons/dvr.png", x: 40, y: -20, rotate: 12, size: 90, delay: 0.55 },

    // 6. After Effects - Upper Right (Mirror of Pp)
    { id: "ae", icon: "/icons/ae.png", x: 85, y: -10, rotate: 12, size: 130, delay: 0.25 },

    // 7. Audition - Extreme Right (Mirror of Ai)
    { id: "au", icon: "/icons/au.png", x: 110, y: 20, rotate: 6, size: 90, delay: 0.75 },
];

const HeroMobile = ({ onNavClick }: HeroProps) => {
    return (
        <div id="home" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 pt-16 pb-6 overflow-hidden bg-black">
            {/* Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] animate-pulse" />
            </div>

            {/* Floating Icons Background (Simplified Radial feeling) */}
            <div className="absolute inset-0 z-0 opacity-30">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border border-white/5 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vw] border border-white/5 rounded-full"
                />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center text-center">
                {/* Profile Image with Ring */}
                <div className="relative w-64 h-64 mb-10">
                    {/* Background Glow - Subtle Halo behind everything with breathing pulse */}
                    <motion.div
                        animate={{ opacity: [0.3, 0.45, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-[-20px] rounded-full bg-gradient-to-t from-zinc-900 via-zinc-800/40 to-transparent blur-3xl z-0"
                    />

                    <div className="relative w-full h-full rounded-full overflow-hidden border-[1px] border-white/10 bg-zinc-900 shadow-2xl">
                        {/* 1. ICONS LAYER (Background) - Controlled by array above */}
                        {iconLayers.map((layer) => (
                            <div
                                key={layer.id}
                                className="absolute z-0"
                                style={{
                                    left: "50%",
                                    top: "50%",
                                    width: layer.size,
                                    height: layer.size,
                                    // Static Position & Rotation
                                    transform: `translate(calc(-50% + ${layer.x}px), calc(-50% + ${layer.y}px)) rotate(${layer.rotate}deg)`,
                                }}
                            >
                                {/* Entrance Animation (Slide Up) - Restored */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 0.6, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: layer.delay,
                                        ease: [0.21, 0.47, 0.32, 0.98]
                                    }}
                                    className="w-full h-full"
                                >
                                    {/* Removed Wiggle Animation for Mobile */}
                                    <Image
                                        src={layer.icon}
                                        alt={layer.id}
                                        width={layer.size}
                                        height={layer.size}
                                        className="drop-shadow-lg w-full h-full object-contain blur-[1px]"
                                    />
                                </motion.div>
                            </div>
                        ))}

                        {/* 2. PROFILE IMAGE LAYER (Foreground) */}
                        {/* Note: Remove overflow-hidden so icons can stick out if needed, OR keep it if we want them contained in the circle.
                           The screenshot shows them clearly sticking OUT or at least very large.
                           However, the Main_Image needs to be clipped to a circle? Or is it a cutout floating?
                           If it's a cutout, we don't want a circle border clipping it.
                           Let's assume we want the 'cutout' look. I'll remove the border/bg color from the image container 
                           so it looks like just the person. 
                        */}
                        <div className="relative z-10 w-full h-full">
                            <Image
                                src="/Main_Image.png"
                                alt="Nur Al Mahmud Mayen"
                                fill
                                className="object-cover object-top scale-110"
                                priority
                            />
                        </div>
                    </div>
                </div>
                {/* Text Content */}
                <div className="flex flex-col items-center mb-8">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-4xl font-bold text-white uppercase tracking-tighter italic mb-2"
                    >
                        Nur Al Mahmud <span className="text-zinc-400">Mayen</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="h-[2px] w-20 bg-white mb-4"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-zinc-400 text-lg tracking-[0.2em] uppercase font-light"
                    >
                        Video Editor & Storyteller
                    </motion.p>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-zinc-500 text-base leading-relaxed mb-10 max-w-sm"
                >
                    Transforming raw footage into cinematic masterpieces. Specialized in high-end post-production and visual effects.
                </motion.p>

                {/* Buttons */}
                <div className="flex flex-col w-full gap-4 px-4">
                    <a
                        href="#my-work"
                        onClick={(e) => onNavClick(e, 'my-work')}
                        className="w-full py-5 bg-white text-black rounded-2xl font-bold text-lg shadow-[0_10px_30px_rgba(255,255,255,0.1)] active:scale-95 transition-transform"
                    >
                        Watch My Work
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => onNavClick(e, 'contact')}
                        className="w-full py-5 border-2 border-white text-white rounded-2xl font-bold text-lg backdrop-blur-sm active:scale-95 transition-transform"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>

            {/* Scroll Indicator - Fades out after 4 seconds */}
            <motion.div
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 4, duration: 1, ease: "easeOut" }}
                className="mt-6 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </motion.div>
        </div>
    );
};

export default HeroMobile;
