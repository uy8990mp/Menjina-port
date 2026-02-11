import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  ExternalLink,
  ClipboardCheck,
  FileUp,
  LayoutPanelTop,
} from "lucide-react";
import { profile } from "../data/profile.js";
import { Card, FadeIn, SectionHeader, BadgeRow } from "../components/ui/Primitives.jsx";
import { Link } from "react-router-dom";

function ImgWithFallback({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      <a className="btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
        <Github size={18} /> GitHub <ExternalLink size={16} />
      </a>
      <a className="btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
        <Linkedin size={18} /> LinkedIn <ExternalLink size={16} />
      </a>
      <a className="btn-ghost" href={`mailto:${profile.email}`}>
        <Mail size={18} /> Email
      </a>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs uppercase tracking-[0.18em] text-white/55">{label}</div>
      <div className="mt-2 text-sm font-semibold text-white/90">{value}</div>
    </div>
  );
}

/**
 * ✅ FIXED CARD:
 * - Image is in its OWN wrapper (16:9) with overflow hidden
 * - Text is ALWAYS below (never overlays image)
 * - CTA lives in the content footer (not floating on image)
 */
function FeaturedProject({ title, description, tags, image, href = "#" }) {
  const isExternal = href?.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group block"
    >
      {/* ✅ Card: overflow hidden, flex column */}
      <Card className="p-0 overflow-hidden h-full flex flex-col">
        {/* ✅ Image area: fixed aspect ratio, never grows into content */}
        <div className="relative w-full aspect-[16/9] bg-white/5 border-b border-white/10 overflow-hidden shrink-0">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/15 pointer-events-none" />
        </div>

        {/* ✅ Content area: stays inside card, wraps nicely */}
        <div className="p-5 sm:p-6 flex flex-col gap-3 min-h-0">
          {/* Title: prevents weird overflow */}
          <div className="text-lg font-semibold text-white/90 leading-tight break-words">
            {title}
          </div>

          {/* Description: clamp to avoid card blow-up */}
          <p className="muted leading-relaxed break-words line-clamp-3">
            {description}
          </p>

          {/* Tags: wrap, never overflow */}
          <div className="min-w-0">
            <BadgeRow items={tags} />
          </div>

          {/* Footer: pinned to bottom */}
          <div className="mt-auto pt-2 flex justify-end">
            <span className="chip group-hover:bg-white/10 transition">
              View <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Card>
    </a>
  );
}

function Capability({ icon: Icon, title, text }) {
  return (
    <Card className="flex gap-4">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-sm font-semibold text-white/90">{title}</div>
        <div className="muted mt-1">{text}</div>
      </div>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left: Copy */}
        <div className="lg:col-span-7 space-y-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              <Sparkles size={14} />
              Website Management • ServiceNow website • Product Owner • IT
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="font-semibold tracking-tight text-white/95">
  <span className="block text-3xl sm:text-4xl lg:text-5xl">
    {profile.name}
  </span>
  <span className="block text-lg sm:text-xl text-white/70 mt-2">
    {profile.title}
  </span>
</h1>

          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-base sm:text-lg text-white/65 max-w-2xl">
              {profile.hero.subheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                View Work <ArrowRight size={18} />
              </Link>
              <a className="btn-ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                Download Resume
              </a>
              <Link to="/contact" className="btn-ghost">
                Contact
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <SocialLinks />
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <MiniStat label="Location" value={profile.location || "Your location"} />
              <MiniStat label="Focus" value="ServiceNow website + Website Management" />
              <MiniStat label="Strength" value="Product ownership + IT reliability" />
            </div>
          </FadeIn>
        </div>

        {/* Right: Personal card */}
        <div className="lg:col-span-5">
          <motion.div
            className="glass rounded-3xl p-6 sm:p-7 relative overflow-hidden"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute inset-0 opacity-30 shimmer" />
            <div className="relative space-y-5">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center">
                    <ImgWithFallback
                      src="/images/headshot.jpg"
                      alt="Headshot placeholder"
                      className="h-full w-full object-cover"
                    />
                    <div className="text-xs text-white/55 px-2 text-center">
                      Add<br />headshot
                    </div>
                  </div>
                  {/* <div className="absolute -bottom-2 -right-2 chip">
                    <MapPin size={14} /> {profile.location || "Location"}
                  </div> */}
                </div>

                <div className="flex-1">
                  <div className="text-sm font-semibold text-white/90">What I do</div>
                  <div className="mt-2 text-sm text-white/70 leading-relaxed">
                    I manage ServiceNow website portals and forms, keep content updated, handle tickets,
                    and ship improvements through clear product ownership and strong IT fundamentals.
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-white/90 flex items-center gap-2">
                    <Briefcase size={16} /> Specialty areas
                  </div>
                  <span className="chip">ServiceNow website</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/70 list-disc pl-5">
                  <li>ServiceNow website development + portal layouts</li>
                  <li>Form design, catalog items, approvals, automation</li>
                  <li>Tickets, content updates, and PDF uploads</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
  <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
    🎓 Certifications
  </div>

  <div className="mt-3 flex flex-wrap gap-2">
    <span className="chip">ServiceNow Fundamentals</span>
    <span className="chip">ITIL Foundations (Optional)</span>
    <span className="chip">Agile / Product Process</span>
  </div>
</div>


              <div className="hr" />
              {/* <div className="text-sm text-white/65">
                Tip: Update links in <span className="font-mono text-white/80">src/data/profile.js</span> and add images
                in <span className="font-mono text-white/80">public/images</span>.
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="space-y-6">
        <SectionHeader
          kicker="Capabilities"
          title="What you’ll see in my work"
          subtitle="Clear website ownership: consistent content, structured portals, and reliable operations."
        />

        <div className="grid md:grid-cols-3 gap-4">
          <Capability
            icon={LayoutPanelTop}
            title="ServiceNow website portals"
            text="Portal/website layout improvements with a focus on clarity, structure, and usability."
          />
          <Capability
            icon={ClipboardCheck}
            title="Tickets + product ownership"
            text="Stakeholder requests → requirements → backlog priority → UAT → release."
          />
          <Capability
            icon={FileUp}
            title="Content updates + PDF uploads"
            text="Keeping knowledge, attachments, and published content accurate and accessible."
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="space-y-6">
        <SectionHeader
          kicker="Selected work"
          title="Projects"
          subtitle="Add screenshots into /public/images for instant polish."
        />

        <div className="grid md:grid-cols-2 gap-4">
          <FeaturedProject
            title="ServiceNow Website Portal & Catalog Enhancements"
            description="ServiceNow website portal design + form building with approvals, automation, and structured user experience."
            tags={["ServiceNow website", "Forms", "Workflows", "Product Owner"]}
            image={`${import.meta.env.BASE_URL}images/ServiceNow.jpeg`}
            href="#"
          />
          <FeaturedProject
            title="Knowledge Base + PDF Publishing Workflow"
            description="Content updates, permissions, and uploading PDFs/resources so users always find current information."
            tags={["KB", "PDF Uploads", "Governance", "Access Control"]}
            image={`${import.meta.env.BASE_URL}images/ServiceNow.jpeg`}
            href="#"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="/projects" className="btn-primary">
            See all projects <ArrowRight size={18} />
          </Link>
          <Link to="/about" className="btn-ghost">
            More about me
          </Link>
        </div>
      </section>
    </div>
  );
}
