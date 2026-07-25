import { motion } from "framer-motion";
import { fadeUp, viewport } from "../lib/motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="md:col-span-4"
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          (About)
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        transition={{ delay: 0.1 }}
        className="md:col-span-8 space-y-6"
      >
        <p className="font-display text-2xl md:text-4xl leading-snug">
          I'm a software engineer with strong expertise in both front-end and
          back-end development, dedicated to building modern, scalable, and
          user-focused applications.
        </p>
        <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl">
          I enjoy transforming ideas into meaningful digital experiences
          through clean, efficient code. Alongside full-stack work, I'm an AI
          enthusiast who loves exploring intelligent systems and solving
          complex problems with logical thinking and innovative approaches.
        </p>
        <div className="pt-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
            Education
          </p>
          <p className="font-display text-xl md:text-2xl">
            Bachelor's in Software Engineering
          </p>
          <p className="text-foreground/70">
            Karachi University (UBIT) · 2022 — 2026
          </p>
        </div>
      </motion.div>
    </section>
  );
}