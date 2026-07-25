import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-32 pb-24 md:pb-40"
    >
      <motion.p
        variants={item}
        className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8"
      >
        Software engineer · Full stack · AI enthusiast
      </motion.p>

      <h1 className="font-display text-[13vw] md:text-[9vw] leading-[0.92] tracking-tight overflow-hidden">
        <motion.span variants={item} className="block">Hassan</motion.span>
        <motion.span variants={item} className="block italic text-accent">
          Ansari.
        </motion.span>
      </h1>

      <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
        <motion.p
          variants={item}
          className="md:col-span-7 text-lg md:text-2xl font-display leading-snug max-w-2xl"
        >
          I build modern, scalable web applications end-to-end — from database
          schema to the last pixel — and love exploring intelligent systems
          along the way.
        </motion.p>
        <motion.div
          variants={item}
          className="md:col-span-5 md:justify-self-end flex items-center gap-3 flex-wrap"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
          >
            See selected work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground transition-colors"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}