import portfolioData from "@/data/portfolio";
import TechBadge from "@/components/TechBadge";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const project = portfolioData.projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Dev-moe-kyawaung`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailsPage({ params }) {
  const project = portfolioData.projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10 backdrop-blur-md md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Project Detail
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-6 text-sm leading-8 text-slate-300 md:text-base">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={project.github}
            target="_blank"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View GitHub
          </Link>
          <Link
            href={project.live}
            target="_blank"
            className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Live Demo
          </Link>
          <Link
            href="/projects"
            className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}

