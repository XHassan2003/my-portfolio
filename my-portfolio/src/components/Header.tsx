import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Karachi",
        })
      );
    };

    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-6 md:px-10 pt-8 flex items-center justify-between text-xs uppercase tracking-[0.18em]"
    >
      {/* Logo */}
      <a href="#" className="font-mono hover:text-accent transition-colors">
        Hassan Ansari
      </a>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a
          href="#work"
          className="hover:text-accent transition-colors"
        >
          Work
        </a>

        <a
          href="#experience"
          className="hover:text-accent transition-colors"
        >
          Experience
        </a>

        <a
          href="#about"
          className="hover:text-accent transition-colors"
        >
          About
        </a>

        <a
          href="#contact"
          className="hover:text-accent transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* Availability */}
      <a
        href="#contact"
        className="font-mono text-muted-foreground hover:text-accent transition-colors"
      >
        <motion.span
          className="inline-block h-1.5 w-1.5 rounded-full bg-accent mr-2 align-middle"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        Available for work · {time}
      </a>
    </motion.header>
  );
}