import { ArrowUpRight } from "lucide-react";
import { FaGithub} from "react-icons/fa";
import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import {
  staggerContainer,
  staggerItem,
  fadeUp,
  viewport,
} from "../lib/motion";

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="flex items-baseline justify-between mb-14"
      >
        <h2 className="font-display text-4xl md:text-6xl">
          Selected work
        </h2>

        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          2025 — 2026
        </span>
      </motion.div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={staggerContainer}
        className="grid gap-8 sm:grid-cols-2"
      >
        {PROJECTS.map((p) => (
          <motion.li
            key={p.n}
            variants={staggerItem}
            className="group rounded-2xl border border-foreground/10 overflow-hidden hover:border-accent/40 transition-colors"
          >
            <a href={p.href} target="_blank" rel="noreferrer" className="block">
              <div className="aspect-[16/10] w-full overflow-hidden bg-secondary/60">
                {p.image ? (
                  <motion.img
                    src={p.image}
                    alt={`${p.title} preview`}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-secondary to-accent/10">
                    <span className="font-display text-3xl text-foreground/30">
                      {p.title}
                    </span>
                  </div>
                )}
              </div>
            </a>

            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {p.n}
                  </span>

                  <h3 className="font-display text-2xl md:text-3xl leading-none group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>

                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {p.tag} · {p.year}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>

                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${p.title} live`}
                    className="opacity-60 hover:opacity-100 hover:text-accent transition-all"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-wider border border-foreground/20 rounded-full px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}