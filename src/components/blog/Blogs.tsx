import { motion } from "framer-motion";
import { blogPosts } from "@/data/site-data";
import BlogPost from "./BlogPost";

const Blogs = () => {
  return (
    <section id="blogs" className="relative pt-10 pb-32 px-6 sm:px-8 lg:px-12 bg-black overflow-hidden">
      {/* Cinematic background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.21, 1, 0.44, 1] }}
        className="relative z-10 max-w-7xl mx-auto bg-zinc-900/50 backdrop-blur-3xl rounded-[2.5rem] p-10 sm:p-14 border border-white/10 shadow-2xl"
        style={{
          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.03), 0 30px 60px -12px rgba(0,0,0,0.6)",
        }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 tracking-tight">
              Blog Archive
            </h2>
            <p className="text-zinc-400 text-lg font-light max-w-3xl leading-relaxed">
              Diving deep into the world of documentary editing, cinematic storytelling, and visual impact.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              link={post.link}
              image={post.image}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Blogs;
