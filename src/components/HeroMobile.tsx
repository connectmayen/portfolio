import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const HeroMobile = ({ onNavClick }: HeroProps) => {
    return (
        <div id="home" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden bg-black">
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
                    <div className="absolute inset-[-10px] rounded-full border-2 border-white/10 animate-spin-slow" />
                    <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/20 bg-zinc-900 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                        <Image
                            src="/Main_Image.png"
                            alt="Nur Al Mahmud Mayen"
                            fill
                            className="object-cover object-top scale-110"
                            priority
                        />
                    </div>

                    {/* Floating software icons (Mobile version) */}
                    {/* Premiere Pro - Top Right */}
                    <div className="absolute top-0 -right-2 w-12 h-12 bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/20 p-2 shadow-xl animate-bounce-slow">
                        <Image src="/icons/pp.png" alt="PR" width={32} height={32} />
                    </div>
                    {/* After Effects - Bottom Left */}
                    <div className="absolute bottom-4 -left-6 w-12 h-12 bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/20 p-2 shadow-xl animate-bounce-slow delay-700">
                        <Image src="/icons/ae.png" alt="AE" width={32} height={32} />
                    </div>

                    {/* Photoshop - Top Left */}
                    <div className="absolute -top-2 -left-2 w-10 h-10 bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/20 p-2 shadow-xl animate-bounce-slow delay-300">
                        <Image src="/icons/ps.png" alt="PS" width={32} height={32} />
                    </div>
                    {/* DaVinci - Bottom Right */}
                    <div className="absolute bottom-6 -right-4 w-11 h-11 bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/20 p-2 shadow-xl animate-bounce-slow delay-500">
                        <Image src="/icons/dvr.png" alt="DVR" width={32} height={32} />
                    </div>
                    {/* Illustrator - Right */}
                    <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-9 h-9 bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/20 p-1.5 shadow-xl animate-bounce-slow delay-200">
                        <Image src="/icons/ai.png" alt="AI" width={32} height={32} />
                    </div>
                    {/* Audition - Left */}
                    <div className="absolute top-1/2 -left-5 -translate-y-1/2 w-9 h-9 bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/20 p-1.5 shadow-xl animate-bounce-slow delay-1000">
                        <Image src="/icons/au.png" alt="AU" width={32} height={32} />
                    </div>
                    {/* CapCut - Top Center */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/20 p-1.5 shadow-xl animate-bounce-slow delay-150">
                        <Image src="/icons/cc.png" alt="CC" width={32} height={32} />
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-center mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-zinc-400 text-lg tracking-[0.2em] uppercase font-light"
                    >
                        Video Editor & Storyteller
                    </motion.p>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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

            {/* Scroll Indicator */}
            <div className="mt-12 animate-bounce opacity-40">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default HeroMobile;
