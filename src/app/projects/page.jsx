import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import portfolioData from "@/data/portfolio";

export const metadata = {
  title: "Projects | Dev-moe-kyawaung",
  description: "Explore projects by Dev-moe-kyawaung.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Portfolio"
        title="All Projects"
        subtitle="A curated collection of development work, interface systems, and branding-focused digital projects."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}

