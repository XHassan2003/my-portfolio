import { useState } from "react";
import { Copy, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "../lib/motion";

const EMAIL: string = "hassanaansari786@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout((): void => {
        setCopied(false);
      }, 1600);
    } catch {
      // Clipboard not available
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-40"
    >
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        (Contact)
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        transition={{ delay: 0.1 }}
        className="mt-6 font-display text-6xl md:text-[10vw] leading-[0.95] tracking-tight"
      >
        Let's build
        <br />
        <span className="italic text-accent">something.</span>
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={staggerContainer}
        className="mt-14 grid md:grid-cols-2 gap-10 items-end"
      >
        <motion.div variants={staggerItem}>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Email
          </p>

          <motion.button
            onClick={copyEmail}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="group inline-flex items-center gap-3 font-display text-2xl md:text-4xl hover:text-accent transition-colors break-all text-left"
          >
            {EMAIL}
            <Copy className="h-5 w-5 opacity-40 group-hover:opacity-100 shrink-0" />
          </motion.button>

          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="ml-3 font-mono text-xs text-accent inline-block"
              >
                copied
              </motion.span>
            )}
          </AnimatePresence>

          <p className="mt-4 font-mono text-xs text-muted-foreground">
            +92 312 1835641
          </p>
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="flex md:justify-end gap-3 flex-wrap"
        >
          <motion.a
            href={`mailto:${EMAIL}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
            Email me
          </motion.a>

          <motion.a
            href="https://github.com/XHassan2003"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground transition-colors"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/hassan-ansari-a135751b7/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground transition-colors"
          >
            <FaLinkedin className="h-4 w-4" />
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Contact;