import { STACK } from "../data/stack";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            (Toolbox)
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Tools I reach for.
          </h2>
        </div>
        <ul className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6">
          {STACK.map((s, i) => (
            <li
              key={s}
              className="flex items-baseline justify-between border-b border-foreground/10 py-4"
            >
              <span className="font-display text-xl md:text-2xl">{s}</span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
