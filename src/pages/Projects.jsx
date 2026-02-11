import { profile } from "../data/profile.js";
import { FadeIn, SectionHeader } from "../components/ui/Primitives.jsx";
import { ExternalLink, ImageOff } from "lucide-react";

function ProjectCard({ project }) {
  const hasImage = Boolean(project.image);

  return (
    // ✅ Outer wrapper clips EVERYTHING inside (image included)
    <div className="glass rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex flex-col">
      {/* ✅ Image area (always clipped) */}
      <div className="w-full aspect-[16/9] bg-white/5 border-b border-white/10 overflow-hidden">
        {h<img
  src={`${import.meta.env.BASE_URL}${project.image.replace(/^\/+/, "")}`}
  alt={project.title}
/>


  alt={`${project.title} screenshot`}
  loading="lazy"
  className={
    "w-full h-full block max-w-full max-h-full " +
    (project.title.toLowerCase().includes("nestcom")
      ? "object-contain bg-black/20"
      : "object-cover object-center")
  }
  onError={(e) => {
    e.currentTarget.style.display = "none";
    const fallback = e.currentTarget.parentElement?.querySelector("[data-fallback]");
    if (fallback) fallback.style.display = "flex";
  }}
/>

        ) : null}

        {/* Fallback */}
        <div
          data-fallback
          className="w-full h-full hidden items-center justify-center text-white/50"
          style={{ display: hasImage ? "none" : "flex" }}
        >
          <div className="flex items-center gap-2 text-sm">
            <ImageOff size={18} />
            Add screenshot in <span className="font-mono text-white/60">public/images</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col">
        <div className="text-lg font-semibold text-white/90">{project.title}</div>
        <div className="text-white/65">{project.description}</div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {(project.tags || []).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto pt-3 flex flex-wrap gap-2">
          {(project.links || []).map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href?.startsWith("http") ? "_blank" : undefined}
              rel={l.href?.startsWith("http") ? "noreferrer" : undefined}
              className="btn-ghost"
            >
              {l.label} <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <SectionHeader
          kicker="Projects"
          title="All projects"
          subtitle="Screenshots must be in public/images and referenced like /images/filename.png in profile.js."
        />
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-4">
        {profile.projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
