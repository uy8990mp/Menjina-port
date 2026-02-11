import { ExternalLink } from "lucide-react";
import { BadgeRow, Card } from "./ui/Primitives.jsx";

export default function ProjectCard({ project }) {
  return (
    <Card className="h-full flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-semibold text-white/90">{project.title}</div>
          <div className="muted mt-1">{project.description}</div>
        </div>
      </div>

      <BadgeRow items={project.tags} />

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {(project.links || []).map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            {l.label} <ExternalLink size={16} />
          </a>
        ))}
      </div>
    </Card>
  );
}
