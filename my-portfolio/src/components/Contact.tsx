import { useState } from "react";
import { Copy, Mail} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        (Contact)
      </p>

      <h2 className="mt-6 font-display text-6xl md:text-[10vw] leading-[0.95] tracking-tight">
        Let's build
        <br />
        <span className="italic text-accent">something.</span>
      </h2>

      <div className="mt-14 grid md:grid-cols-2 gap-10 items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Email
          </p>

          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-3 font-display text-2xl md:text-4xl hover:text-accent transition-colors break-all text-left"
          >
            {EMAIL}
            <Copy className="h-5 w-5 opacity-40 group-hover:opacity-100 shrink-0" />
          </button>

          {copied && (
            <span className="ml-3 font-mono text-xs text-accent">
              copied
            </span>
          )}

          <p className="mt-4 font-mono text-xs text-muted-foreground">
            +92 312 1835641
          </p>
        </div>

        <div className="flex md:justify-end gap-3 flex-wrap">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
            Email me
          </a>

          <a
            href="https://github.com/XHassan2003"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground transition-colors"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/hassan-ansari-a135751b7/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground transition-colors"
          >
            <FaLinkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;