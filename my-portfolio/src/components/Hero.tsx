import { ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../lib/motion";

export default function Hero() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-32 pb-24 md:pb-40"
    >
      <motion.p
        variants={staggerItem}
        className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        Software engineer · Full stack · AI enthusiast
      </motion.p>

      <h1 className="overflow-hidden font-display text-[13vw] leading-[0.92] tracking-tight md:text-[9vw]">
        <motion.span variants={staggerItem} className="block">
          Hassan
        </motion.span>

        <motion.span
          variants={staggerItem}
          className="block italic text-accent"
        >
          Ansari.
        </motion.span>
      </h1>

      <div className="mt-10 grid items-end gap-8 md:mt-14 md:grid-cols-12">
        <motion.p
          variants={staggerItem}
          className="max-w-2xl text-lg font-display leading-snug md:col-span-7 md:text-2xl"
        >
          I build modern, scalable web applications end-to-end — from database
          schema to the last pixel — and love exploring intelligent systems
          along the way.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="flex flex-wrap items-center gap-3 md:col-span-5 md:justify-self-end"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
          >
            See selected work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download="Hassan_Ansari_Resume.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
          >
            <Download className="h-4 w-4" />
            Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}