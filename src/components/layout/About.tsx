import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 1, 0.44, 1],
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: [0.21, 1, 0.44, 1],
        delay: 0.4,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative pt-14 pb-10 px-6 sm:px-8 lg:px-12 overflow-hidden bg-black"
    >
      {/* Subtle background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft cinematic glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[30%] -left-[20%] w-[70%] h-[70%] bg-indigo-500/10 blur-[180px] rounded-full"
        />

        {/* Light film grain */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
          style={{
            backgroundImage: "url('/grain_01.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "512px",
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-14 tracking-tight"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-16 items-start">
          {/* Column 1: Image */}
          <motion.div
            variants={itemVariants}
            className="relative w-full lg:w-[400px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl shadow-indigo-500/5 mx-auto lg:mx-0 flex-shrink-0"
          >
            <Image
              src="/IMG_6576.JPG"
              alt="Nur Al Mahmud Mayen"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 400px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Column 2: Text Description & Software */}
          <div className="h-full flex flex-col justify-between">
            <motion.div variants={itemVariants} className="space-y-4 xl:space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed font-light">
                I’m a Computer Science & Engineering (CSE) student,
                but my real interest has always lived at the intersection of
                storytelling, visuals, and impact. While I study technology, I’m
                deeply drawn to video editing—especially documentary-style
                content that explains the world, challenges narratives, and
                makes people think.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed font-light">
                My passion for documentaries grew from regularly watching
                creators like Dhruv Rathee, Johnny Harris, and
                Voice of Dhaka. Their ability to turn complex political,
                historical, and social topics into engaging visual stories
                inspired me to explore video editing not just as a skill, but as
                a medium of truth and influence.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed font-light">
                I work mainly with Adobe Premiere Pro and After Effects,
                focusing on clean edits, strong pacing, sound design, and
                visuals that support the story rather than distract from it. I
                enjoy shaping raw footage into a clear narrative—whether it’s a
                documentary, explainer, social media video, or branded content.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed font-light">
                Although my academic background is in CSE, I see myself as a
                creative problem-solver. Technology helps me understand systems;
                storytelling helps me explain them. My long-term goal is to
                combine creativity, technology, and media to build meaningful
                projects, platforms, and narratives that matter.
              </p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.5, duration: 1.5 }}
                className="text-sm text-zinc-400 italic font-light leading-relaxed pt-2"
              >
                This portfolio is not just a collection of edits — it’s a
                reflection of how I see stories, ideas, and the world.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Editing Tools Section */}
        <motion.div
          variants={itemVariants}
          className="mt-24 sm:mt-32"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-10 tracking-tight">
            Software Expertise
          </h2>

          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-center">
            {[
              { name: "Adobe Illustrator", icon: "/icons/ai.png" },
              { name: "Adobe Photoshop", icon: "/icons/ps.png" },
              { name: "Adobe After Effects", icon: "/icons/ae.png" },
              { name: "Adobe Premiere Pro", icon: "/icons/pp.png" },
              { name: "Adobe Audition", icon: "/icons/au.png" },
              { name: "CapCut", icon: "/icons/cc.png" },
              { name: "DaVinci Resolve", icon: "/icons/dvr.png" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-4 px-5 py-3 rounded-xl bg-zinc-900/60 border border-white/10 backdrop-blur-sm group hover:border-indigo-500/40 transition-all duration-300"
              >
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-zinc-200 font-medium whitespace-nowrap group-hover:text-white transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
