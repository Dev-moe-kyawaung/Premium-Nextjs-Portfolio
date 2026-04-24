import Link from "next/link";
import portfolioData from "@/data/portfolio";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-wide text-white">
          {portfolioData.profile.name}
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm text-slate-300 transition hover:text-white">
            Home
          </Link>
          <Link
            href="/projects"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Projects
          </Link>
          <a href="#skills" className="text-sm text-slate-300 transition hover:text-white">
            Skills
          </a>
          <a href="#contact" className="text-sm text-slate-300 transition hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
