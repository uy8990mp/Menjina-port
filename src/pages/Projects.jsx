import { profile } from "../data/profile.js";
import { FadeIn, SectionHeader, Card, BadgeRow } from "../components/ui/Primitives.jsx";
import { ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  const imgSrc = `${import.meta.env.BASE_URL}${String(project.image || "").replace(/^\/+/, "")}`;

  return (
    <Card className="p-0 overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="w-full aspect-[16/9] bg-white/5 border-b border-white/10 overflow-hidden">
        {project.image ? (
          <img
            src={imgSrc}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              // Hide broken image if file path is wrong
              e.currentTarget.style.display = "none";
            }}
          />
        ) : null}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col">
        <div className="text-lg font-semibold text-white/90">{project.title}</div>
        <div className="muted">{project.description}</div>

        {project.tags?.length ? <BadgeRow items={project.tags} /> : null}

        {/* Links */}
        {project.links?.length ? (
          <div className="mt-auto pt-3 flex flex-wrap gap-2">
            {project.links.map((l) => (
              <a
                key={`${project.title}-${l.label}`}
                href={l.href}
                target={String(l.href || "").startsWith("http") ? "_blank" : undefined}
                rel={String(l.href || "").startsWith("http") ? "noreferrer" : undefined}
                className="btn-ghost"
              >
                {l.label} <ExternalLink size={16} />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </Card>
  );
}

export default function Projects() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <SectionHeader
          kicker="Projects"
          title="Projects"
          subtitle="Screenshots live in public/images. This page automatically supports GitHub Pages base paths."
        />
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-4">
        {profile.projects?.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
