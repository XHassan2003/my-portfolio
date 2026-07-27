import { ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../lib/motion";

export default function Hero() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl px-6 md:px-10 pt-16 sm:pt-20 md:pt-32 pb-16 sm:pb-24 md:pb-40"
    >
      <motion.p
        variants={staggerItem}
        className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 sm:mb-8"
      >
        Software engineer · Full stack · AI enthusiast
      </motion.p>

      <h1 className="font-display text-[15vw] sm:text-[13vw] md:text-[9vw] leading-[0.92] tracking-tight overflow-hidden">
        <motion.span variants={staggerItem} className="block">Hassan</motion.span>
        <motion.span variants={staggerItem} className="block italic text-accent">
          Ansari.
        </motion.span>
      </h1>

      <div className="mt-8 sm:mt-10 md:mt-14 grid md:grid-cols-12 gap-6 sm:gap-8 items-end">
        <motion.p
          variants={staggerItem}
          className="md:col-span-7 text-base sm:text-lg md:text-2xl font-display leading-snug max-w-2xl"
        >
          I build modern, scalable web applications end-to-end — from database
          schema to the last pixel — and love exploring intelligent systems
          along the way.
        </motion.p>
        <motion.div
          variants={staggerItem}
          className="md:col-span-5 md:justify-self-end flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
          >
            See selected work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download="Hassan_Ansari_Resume.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Download resume"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground transition-colors"
          >
            <Download className="h-4 w-4" />
            Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}