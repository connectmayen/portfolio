import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const Hero = (props: HeroProps) => {
  return (
    <>
      <div className="hidden lg:block">
        <HeroDesktop {...props} />
      </div>
      <div className="block lg:hidden">
        <HeroMobile {...props} />
      </div>
    </>
  );
};

export default Hero;
