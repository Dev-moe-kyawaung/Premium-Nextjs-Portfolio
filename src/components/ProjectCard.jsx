import Link from "next/link";
import TechBadge from "./TechBadge";

export default function ProjectCard({ project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
      <div className="h-48 w-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.excerpt}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View Details
          </Link>
          <Link
            href={project.github}
            target="_blank"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            GitHub
          </Link>
          <Link
            href={project.live}
            target="_blank"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
