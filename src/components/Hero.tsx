import Image from "next/image";
import RadialRings from "./RadialRings";

const imageObjectPosition = "center 35%";

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

// Positioning configuration for Timeline Layers - Tweak these values to perfect the layout
const tlConfig = {
  audio: { x: 0, y: -40, scale: 100 },     // Bottom Green Layer
  video: { x: 0, y: 15, scale: 100 },     // Middle Blue Layer
  adjustment: { x: -160, y: 35, scale: 100 },     // Top Left Purple Layer
  nested: { x: 160, y: 35, scale: 100 },     // Top Right Green Layer
};

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
              <div className="mt-2 uppercase text-lg sm:text-xl text-zinc-300 tracking-[0.15em] sm:tracking-[0.35em] whitespace-nowrap">
                Video Editor & Visual Storyteller
              </div>
            </div>
            <p className="text-xl sm:text-2xl text-zinc-400 mb-8 leading-relaxed animate-fade-in-up animate-delay-100">
              Every project is a new story waiting to be told. I bring that
              story to life through cinematic editing, dynamic motion graphics,
              and polished post-production that makes your content stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-200">
              <a
                href="#my-work"
                onClick={(e) => onNavClick(e, 'my-work')}
                className="px-8 py-4 bg-white text-center text-black rounded-full font-medium hover:bg-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Watch My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => onNavClick(e, 'contact')}
                className="px-8 py-4 border-2 border-white text-center text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Let's Create Something
              </a>
            </div>
          </div>

          <div className="relative w-full h-[520px] lg:h-[640px] rounded-2xl animate-fade-in animate-delay-300">
            {/* LAYER 1: The Image (Scaled) */}
            <div className="relative w-full h-full text-center">
              <div className="inline-block relative w-full h-full scale-[1.5]">
                <Image
                  src="/Main_Image.png"
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  style={{
                    objectPosition: imageObjectPosition,
                  }}
                  priority
                />
              </div>
            </div>

            {/* LAYER 2: Timeline Elements (The "Video Editor" UI) */}
            <div className="absolute bottom-[-40px] left-0 w-full flex flex-col items-center z-30 pointer-events-none">

              {/* Container for the timeline stack - Anchored to bottom */}
              <div className="relative w-[140%] h-[300px] flex flex-col justify-end origin-bottom scale-50 sm:scale-75 md:scale-100 -mb-10 sm:-mb-16">

                {/* ROW 3: Top Layers (Stacked on top of Video) */}
                <div className="absolute bottom-[160px] left-0 w-full flex justify-center items-end px-[15%] z-32">
                  {/* Adjustment Layer */}
                  <div
                    className="w-[45%] mr-1"
                    style={{
                      transform: `translate(${tlConfig.adjustment.x}px, ${tlConfig.adjustment.y}px) scale(${tlConfig.adjustment.scale / 100})`
                    }}
                  >
                    <div className="animate-fade-in-left animate-delay-200" style={{ animationFillMode: 'both' }}>
                      <Image src="/Adjustment_Layer.png" alt="Adjustment Layer" width={400} height={100} className="w-full h-auto drop-shadow-lg" />
                    </div>
                  </div>
                  {/* Nested Sequence */}
                  <div
                    className="w-[35%] ml-1"
                    style={{
                      transform: `translate(${tlConfig.nested.x}px, ${tlConfig.nested.y}px) scale(${tlConfig.nested.scale / 100})`
                    }}
                  >
                    <div className="animate-fade-in-right animate-delay-200" style={{ animationFillMode: 'both' }}>
                      <Image src="/Nested-Sequence.png" alt="Nested Sequence" width={300} height={100} className="w-full h-auto drop-shadow-lg" />
                    </div>
                  </div>
                </div>

                {/* ROW 2: Video Layer */}
                <div className="absolute bottom-[90px] left-0 w-full flex justify-center z-33">
                  <div
                    className="w-[60%]"
                    style={{
                      transform: `translate(${tlConfig.video.x}px, ${tlConfig.video.y}px) scale(${tlConfig.video.scale / 100})`
                    }}
                  >
                    <div className="animate-fade-in-up animate-delay-800" style={{ animationFillMode: 'both' }}>
                      <Image src="/Video_Layer.png" alt="Video Layer" width={600} height={120} className="w-full h-auto drop-shadow-lg" />
                    </div>
                  </div>
                </div>

                {/* ROW 1: Audio Layer */}
                <div className="absolute bottom-0 left-0 w-full flex justify-center z-31">
                  <div
                    className="w-[90%]"
                    style={{
                      transform: `translate(${tlConfig.audio.x}px, ${tlConfig.audio.y}px) scale(${tlConfig.audio.scale / 100})`
                    }}
                  >
                    <div className="animate-fade-in-up animate-delay-1100" style={{ animationFillMode: 'both' }}>
                      <Image src="/Audio_Layer.png" alt="Audio Layer" width={800} height={150} className="w-full h-auto drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
