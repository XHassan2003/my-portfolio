import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/projects";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <div className="flex items-baseline justify-between mb-14">
        <h2 className="font-display text-4xl md:text-6xl">Selected work</h2>
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          2024 — 2026
        </span>
      </div>
      <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
        {PROJECTS.map((p) => (
          <li key={p.n}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-12 gap-4 py-8 md:py-10 items-start hover:bg-secondary/60 transition-colors -mx-4 px-4 rounded-sm"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground pt-2">
                {p.n}
              </span>
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-display text-3xl md:text-5xl leading-none group-hover:italic group-hover:text-accent transition-all">
                  {p.title}
                </h3>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {p.tag} · {p.year}
                </p>
              </div>
              <p className="col-span-12 md:col-span-4 text-sm md:text-base text-foreground/80 leading-relaxed">
                {p.desc}
              </p>
              <div className="col-span-12 md:col-span-2 flex md:justify-end items-start gap-2 pt-2">
                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  {p.stack.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-wider border border-foreground/20 rounded-full px-2 py-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 mt-1 opacity-40 group-hover:opacity-100 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
