import RadialRings from "./RadialRings";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const Hero = ({ onNavClick }: HeroProps) => {
  return (
    <div id="home" className="relative w-full">
      <div className="hidden md:block absolute inset-0 z-0" style={{ clipPath: "polygon(0 6px, 100% 6px, 100% 200%, 0 200%)" }}>
        <RadialRings />
      </div>

      <HeroDesktop onNavClick={onNavClick} />
      <HeroMobile onNavClick={onNavClick} />
    </div>
  );
};

export default Hero;
