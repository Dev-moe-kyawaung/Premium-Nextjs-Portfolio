import portfolioData from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10 backdrop-blur-md md:p-10"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>
          <h3 className="mt-3 text-3xl font-bold text-white">
            Let&apos;s build something meaningful together.
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            If you want to collaborate, discuss a project, or connect professionally,
            feel free to reach out. I am always open to learning, building, and growing.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href={`mailto:${portfolioData.profile.email}`}
            className="block rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-900"
          >
            <span className="block text-xs uppercase tracking-[0.25em] text-slate-400">
              Email
            </span>
            <span className="mt-1 block text-sm font-medium">
              {portfolioData.profile.email}
            </span>
          </a>

          <a
            href={portfolioData.profile.github}
            target="_blank"
            className="block rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-900"
          >
            <span className="block text-xs uppercase tracking-[0.25em] text-slate-400">
              GitHub
            </span>
            <span className="mt-1 block text-sm font-medium">
              {portfolioData.profile.github}
            </span>
          </a>

          <a
            href={portfolioData.profile.portfolio}
            target="_blank"
            className="block rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-900"
          >
            <span className="block text-xs uppercase tracking-[0.25em] text-slate-400">
              Portfolio
            </span>
            <span className="mt-1 block text-sm font-medium">
              {portfolioData.profile.portfolio}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
