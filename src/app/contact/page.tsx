
"use client";

import { Mail, Github, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-beige">
      <div className="section max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          Get in touch
        </h1>

        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
          Have a question about our learning resources, want to share feedback,
          or interested in contributing? We'd be glad to hear from you.
        </p>

        <div className="mt-8 flex flex-col gap-5 text-sm">
          <a
            href="mailto:florence.thebrancheshr@gmail.com"
            className="flex items-center gap-3 text-forest hover:text-forest-light"
          >
            <Mail size={18} />
            florence.thebrancheshr@gmail.com
          </a>

          <a
            href="https://github.com/irhawo08-sys/Sisegidi"
            className="flex items-center gap-3 text-forest hover:text-forest-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://instagram.com/thebrancheshr"
            className="flex items-center gap-3 text-forest hover:text-forest-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} />
            @thebrancheshr
          </a>
        </div>
      </div>
    </section>
  );
}
