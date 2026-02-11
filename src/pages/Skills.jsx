import { Card, FadeIn, SectionHeader, BadgeRow } from "../components/ui/Primitives.jsx";
import {
  Globe,
  LayoutPanelTop,
  Paintbrush,
  Wrench,
  AppWindow,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

function SkillCard({ icon: Icon, title, subtitle, items }) {
  return (
    <Card className="space-y-3">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
          <Icon size={18} />
        </div>
        <div>
          <div className="text-sm font-semibold text-white/90">{title}</div>
          {subtitle ? <div className="text-sm text-white/60 mt-1">{subtitle}</div> : null}
        </div>
      </div>
      <BadgeRow items={items} />
    </Card>
  );
}

export default function Skills() {
  const skills = {
    websiteCms: [
      "ServiceNow website (Portals)",
      "CMS content updates",
      "Catalog items & form design",
      "UI Policies & validations",
      "Approvals & workflows",
      "Knowledge Base updates",
      "PDF/attachment uploads",
      "Ticket-based changes",
      "Access control / roles",
      "Publishing standards",
    ],
    graphicDesign: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe XD",
      "Layout & typography",
      "Brand consistency",
      "Resizing & image editing",
      "Posters & flyers",
      "Digital signage assets",
    ],
    productProcess: [
      "Requirements gathering",
      "Backlog prioritization",
      "Stakeholder communication",
      "UAT / validation",
      "Documentation",
      "Agile ceremonies",
      "Process improvement",
    ],
    tools: [
      "ServiceNow",
      "Jira",
      "Confluence",
      "GitHub",
      "Tableau",
      "MS Excel (Pivots/Charts)",
      "MS Word",
      "MS PowerPoint",
    ],
    apps: [
      "Microsoft Office Suite",
      "Adobe Creative Suite",
      "Ticketing systems",
      "Email + newsletters",
      "Collaboration tools",
      "Windows administration",
    ],
    itSupport: [
      "Troubleshooting & diagnostics",
      "Tiered ticket escalation",
      "User access (StarID / roles)",
      "Hardware/software setup",
      "Network basics",
      "Documentation & training",
    ],
  };

  return (
    <div className="space-y-10">
      <FadeIn>
        <SectionHeader
          kicker="Skills"
          title="Skills that match real website operations"
          subtitle="Structured as separate cards: ServiceNow website CMS, graphic design, tools, apps, and the product/IT foundation behind reliable platforms."
        />
      </FadeIn>

      <div className="grid lg:grid-cols-2 gap-4">
        <SkillCard
          icon={LayoutPanelTop}
          title="Website Management & CMS (ServiceNow website)"
          subtitle="Portal upkeep, content updates, forms, workflows, and publishing operations"
          items={skills.websiteCms}
        />

        <SkillCard
          icon={Paintbrush}
          title="Graphic Design"
          subtitle="Assets for events, digital signage, and content-ready visuals"
          items={skills.graphicDesign}
        />

        <SkillCard
          icon={ClipboardList}
          title="Product Ownership & Process"
          subtitle="From requirements to backlog to UAT and clean releases"
          items={skills.productProcess}
        />

        <SkillCard
          icon={Wrench}
          title="Tools"
          subtitle="Platforms used for delivery, documentation, and reporting"
          items={skills.tools}
        />

        <SkillCard
          icon={AppWindow}
          title="Apps"
          subtitle="Day-to-day applications used to support website/content workflows"
          items={skills.apps}
        />

        <SkillCard
          icon={ShieldCheck}
          title="IT Support Foundation"
          subtitle="Reliability mindset: access, troubleshooting, and structured ticket work"
          items={skills.itSupport}
        />
      </div>

      {/* <div className="glass rounded-2xl p-6">
        <div className="text-sm font-semibold text-white/90">Make it feel even more “premium”</div>
        <div className="text-sm text-white/65 mt-2">
          If you want, we can add proficiency levels (Beginner/Intermediate/Advanced) or add
          a “tools used per role” section tied to the Experience cards.
        </div>
      </div> */}
    </div>
  );
}
