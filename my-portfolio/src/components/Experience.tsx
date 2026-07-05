import { EXPERIENCE } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            (Experience)
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Where I've built.
          </h2>
        </div>
        <ol className="md:col-span-8 space-y-10">
          {EXPERIENCE.map((e) => (
            <li key={e.company} className="border-l-2 border-accent/40 pl-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl md:text-3xl">
                  {e.role} · <span className="italic text-accent">{e.company}</span>
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-foreground/80 text-base leading-relaxed">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
