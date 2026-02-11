import { profile } from "../data/profile.js";
import { FadeIn, SectionHeader, Card, BadgeRow } from "../components/ui/Primitives.jsx";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <SectionHeader
          kicker="Projects"
          title="Selected Work"
          subtitle="ServiceNow website implementations, portal enhancements, and IT-backed product delivery."
        />
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        {profile.projects.map((project) => {
          const imageSrc = `${import.meta.env.BASE_URL}${project.image.replace(/^\/+/, "")}`;

          const isNestcom =
            project.title.toLowerCase().includes("nestcom");

          return (
            <Card
              key={project.title}
              className="overflow-hidden flex flex-col p-0"
            >
              {/* Image Section */}
              <div className="aspect-[16/9] w-full bg-white/5 border-b border-white/10 overflow-hidden flex items-center justify-center">
                <img
                  src={imageSrc}
                  alt={project.title}
                  loading="lazy"
                  className={`h-full w-full ${
                    isNestcom
                      ? "object-contain p-6"
                      : "object-cover object-center"
                  }`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="text-lg font-semibold text-white/90">
                  {project.title}
                </div>

                <div className="text-white/70 text-sm leading-relaxed">
                  {project.description}
                </div>

                <BadgeRow items={project.tags} />

                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {(project.links || []).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href?.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        link.href?.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="btn-ghost"
                    >
                      {link.label} <ExternalLink size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
