import { motion } from "framer-motion";
import Link from "next/link";

interface BlogPostProps {
  id: number;
  title: string;
  description: string;
  link: string;
  image?: string;
  index: number;
}

const BlogPost: React.FC<BlogPostProps> = ({
  id,
  title,
  description,
  link,
  image,
  index,
}) => {
  return (
    <Link href={`/blog/${id}`} className="block">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.21, 1, 0.44, 1]
        }}
        className="group relative cursor-pointer"
      >

        <div className="relative aspect-video rounded-2xl mb-6 overflow-hidden border border-white/5 bg-zinc-900 group-hover:border-white/10 transition-all duration-500">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800/10 to-zinc-900 group-hover:scale-105 transition-transform duration-700">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700"
              />
            ) : (
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <svg
                  className="w-12 h-12 text-zinc-800 group-hover:text-zinc-600 transition-colors duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </motion.div>
            )}
          </div>
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500 pointer-events-none" />
        </div>

        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100 group-hover:text-zinc-300 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-zinc-400 leading-relaxed line-clamp-2 font-light">
            {description}
          </p>
          <div className="pt-2 flex items-center justify-end gap-2 text-sm font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
            <span>Full Story</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        <div className="absolute -inset-4 bg-white/0 group-hover:bg-white/[0.01] rounded-[2rem] -z-10 transition-all duration-500" />
      </motion.article>
    </Link>
  );
};

export default BlogPost;
