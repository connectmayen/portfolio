"use client";

import { MotionValue } from "framer-motion";
import MyWorkDesktop from "./MyWorkDesktop";
import MyWorkMobile from "./MyWorkMobile";

interface MyWorkProps {
  portfolioRef: React.RefObject<HTMLDivElement>;
  smoothRotateX: MotionValue<number>;
  smoothScale: MotionValue<number>;
}

const MyWork: React.FC<MyWorkProps> = ({
  portfolioRef,
  smoothRotateX,
  smoothScale,
}) => {

  return (
    <div id="my-work">
      <MyWorkDesktop
        portfolioRef={portfolioRef}
        smoothRotateX={smoothRotateX}
        smoothScale={smoothScale}
      />
      <MyWorkMobile
        portfolioRef={portfolioRef}
      />
    </div>
  );
};

export default MyWork;
