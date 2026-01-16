import Image from "next/image";

interface HeroMobileProps {
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const HeroMobile = ({ onNavClick }: HeroMobileProps) => {
    return (
        <div className="block md:hidden relative w-full pt-24 pb-8 px-6">
            <div className="flex flex-col items-center text-center">

                {/* 1. Mobile Text Info */}
                <div className="mb-8 animate-fade-in-up">
                    <h1 className="uppercase font-bold text-4xl leading-tight text-zinc-100 mb-2">
                        Nur Al<br />Mahmud<br />Mayen
                    </h1>
                    <div className="uppercase text-sm text-zinc-400 tracking-[0.2em]">
                        Video Editor &<br />Visual Storyteller
                    </div>
                </div>

                {/* 2. Mobile Image (Simplified) */}
                <div className="relative w-full h-[400px] mb-8 animate-fade-in animate-delay-200">
                    <Image
                        src="/Main_Image.png"
                        alt="Profile"
                        fill
                        sizes="100vw"
                        className="object-contain"
                        style={{ objectPosition: "center bottom" }}
                        priority
                    />
                </div>

                {/* 3. Mobile Buttons */}
                <div className="w-full flex flex-col gap-4 animate-fade-in-up animate-delay-300">
                    <a
                        href="#my-work"
                        onClick={(e) => onNavClick(e, 'my-work')}
                        className="w-full py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all"
                    >
                        Watch My Work
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => onNavClick(e, 'contact')}
                        className="w-full py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all"
                    >
                        Let's Create Something
                    </a>
                </div>

            </div>
        </div>
    );
};

export default HeroMobile;
