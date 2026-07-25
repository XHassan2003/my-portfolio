import { motion } from "framer-motion";
import { STACK } from "../data/stack";
import { fadeUp, staggerContainer, staggerItem, viewport } from "../lib/motion";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <div className="grid md:grid-cols-12 gap-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="md:col-span-4"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            (Toolbox)
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Tools I reach for.
          </h2>
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer}
          className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6"
        >
          {STACK.map((s, i) => (
            <motion.li
              key={s}
              variants={staggerItem}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="flex items-baseline justify-between border-b border-foreground/10 py-4"
            >
              <span className="font-display text-xl md:text-2xl">{s}</span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}