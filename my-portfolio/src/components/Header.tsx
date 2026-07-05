import { useEffect, useState } from "react";

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
        }),
      );
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="mx-auto max-w-6xl px-6 md:px-10 pt-8 flex items-center justify-between text-xs uppercase tracking-[0.18em]">
      <span className="font-mono">HA — 2026</span>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#work" className="hover:text-accent transition-colors">Work</a>
        <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
        <a href="#about" className="hover:text-accent transition-colors">About</a>
        <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
      </nav>
      <span className="font-mono text-muted-foreground">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent mr-2 align-middle" />
        Karachi · {time}
      </span>
    </header>
  );
}
