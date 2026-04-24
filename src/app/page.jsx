import BackgroundFX from "@/components/BackgroundFX";
import ContactSection from "@/components/ContactSection";
import FeatureCard from "@/components/FeatureCard";
import GithubStats from "@/components/GithubStats";
import ParticleDots from "@/components/ParticleDots";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import TechBadge from "@/components/TechBadge";
import portfolioData from "@/data/portfolio";
import Link from "next/link";

export default function HomePage() {
  const featuredProjects = portfolioData.projects.filter((project) => project.featured);

  return (
    <main className="relative overflow-hidden">
      <section className="relative">
        <BackgroundFX />
        <ParticleDots />

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              {portfolioData.profile.availability}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
              {portfolioData.profile.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-slate-200 md:text-2xl">
              {portfolioData.profile.title}
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 md:text-base">
              {portfolioData.profile.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View Projects
              </Link>
              <a
                href="#contact"
                className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {portfolioData.skills.slice(0, 8).map((skill) => (
                <TechBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <GithubStats />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Features"
          title="What I Focus On"
          subtitle="A premium developer portfolio should reflect technical skill, visual clarity, scalability, and real usability."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {portfolioData.features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Skills"
          title="Technology Stack"
          subtitle="A flexible and modern stack for creating responsive interfaces, backend services, and production-ready solutions."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {portfolioData.skills.map((skill) => (
            <TechBadge key={skill} label={skill} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Projects"
          title="Featured Work"
          subtitle="Selected work that highlights development quality, design thinking, and component-driven structure."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore All Projects
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <ContactSection />
      </section>
    </main>
  );
}

