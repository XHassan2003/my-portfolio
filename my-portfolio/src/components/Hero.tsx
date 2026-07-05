import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-32 pb-24 md:pb-40">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
        Software engineer · Full stack · AI enthusiast
      </p>
      <h1 className="font-display text-[13vw] md:text-[9vw] leading-[0.92] tracking-tight">
        Hassan
        <br />
        <span className="italic text-accent">Ansari.</span>
      </h1>
      <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
        <p className="md:col-span-7 text-lg md:text-2xl font-display leading-snug max-w-2xl">
          I build modern, scalable web applications end-to-end — from database
          schema to the last pixel — and love exploring intelligent systems
          along the way.
        </p>
        <div className="md:col-span-5 md:justify-self-end flex items-center gap-3 flex-wrap">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
          >
            See selected work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
