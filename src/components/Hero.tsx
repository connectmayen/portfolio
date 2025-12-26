import Image from "next/image";
import RadialRings from "./RadialRings";

const imageObjectPosition = "center 18%";

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const Hero = ({ onNavClick }: HeroProps) => {
  return (
    <div id="home" className="relative w-full">
      <div className="absolute inset-0 z-0" style={{ clipPath: "polygon(0 6px, 100% 6px, 100% 200%, 0 200%)" }}>
        <RadialRings />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto pt-20 pb-8 px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="min-w-0">
            <div className="flex flex-col items-start animate-fade-in-up mb-6">
              <h1 className="whitespace-nowrap uppercase font-bold text-[clamp(2rem,6vw,3rem)] leading-tight text-zinc-100">
                Nur Al Mahmud Mayen
              </h1>
              <div className="mt-2 uppercase text-lg sm:text-xl text-zinc-300 tracking-[0.35em] whitespace-nowrap">
                Video Editor & Visual Storyteller
              </div>
            </div>
            <p className="text-xl sm:text-2xl text-zinc-400 mb-8 leading-relaxed animate-fade-in-up animate-delay-100">
              Every project is a new story waiting to be told. I bring that
              story to life through cinematic editing, dynamic motion graphics,
              and polished post-production that makes your content stand out.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-200">
              <a
                href="#my-work"
                onClick={(e) => onNavClick(e, 'my-work')}
                className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Watch My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => onNavClick(e, 'contact')}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Let's Create Something
              </a>
            </div>
          </div>
          <div className="relative w-full h-[520px] lg:h-[640px] rounded-2xl overflow-hidden animate-fade-in animate-delay-300">
            <Image
              src="/Main_Image.png"
              alt="Profile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover scale-[1.1]"
              style={{
                objectPosition: imageObjectPosition,
              }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
