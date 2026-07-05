import { ExternalLink } from "lucide-react";
import { CERTS } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certs" className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            (Certifications)
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Verified learning.
          </h2>
        </div>
        <ul className="md:col-span-8 divide-y divide-foreground/10 border-y border-foreground/10">
          {CERTS.map((c) => (
            <li key={c.url}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-5 hover:text-accent transition-colors"
              >
                <span className="font-display text-lg md:text-xl">{c.t}</span>
                <ExternalLink className="h-4 w-4 opacity-40 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
