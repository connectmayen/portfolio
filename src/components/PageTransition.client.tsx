"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={typeof window !== 'undefined' ? window.location.pathname : 'server'} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
