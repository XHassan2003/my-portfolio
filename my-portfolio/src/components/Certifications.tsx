import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { CERTS } from "../data/certifications";
import { fadeUp, staggerContainer, staggerItem, viewport } from "../lib/motion";

export default function Certifications() {
  return (
    <section id="certs" className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <div className="grid md:grid-cols-12 gap-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="md:col-span-4"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            (Certifications)
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Verified learning.
          </h2>
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer}
          className="md:col-span-8 divide-y divide-foreground/10 border-y border-foreground/10"
        >
          {CERTS.map((c) => (
            <motion.li key={c.url} variants={staggerItem}>
              <motion.a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center justify-between py-5 hover:text-accent transition-colors"
              >
                <span className="font-display text-lg md:text-xl">{c.t}</span>
                <ExternalLink className="h-4 w-4 opacity-40 group-hover:opacity-100" />
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}