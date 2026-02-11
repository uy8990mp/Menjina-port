import { profile } from "../data/profile.js";
import { Card, FadeIn, SectionHeader } from "../components/ui/Primitives.jsx";

export default function About() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <SectionHeader
          kicker="About"
          title="Website management + product ownership with strong IT foundations."
          subtitle="My work is centered on ServiceNow website development, portal design, and reliable operations — from tickets to content updates."
        />
      </FadeIn>

      <div className="grid lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-7 space-y-4">
          {profile.about.paragraphs.map((p, idx) => (
            <p key={idx} className="text-white/75 leading-relaxed">
              {p}
            </p>
          ))}
        </Card>

        <Card className="lg:col-span-5 space-y-3">
          <div className="text-sm font-semibold text-white/90">What I do on ServiceNow website work</div>
          <ul className="list-disc pl-5 space-y-2 text-white/70">
            <li>ServiceNow website portal updates, layout improvements, and content publishing</li>
            <li>Designing forms and service catalog items (fields, validation, approvals)</li>
            <li>Managing tickets and stakeholder requests from intake to completion</li>
            <li>Uploading PDFs/attachments, maintaining Knowledge Base accuracy and access</li>
            <li>Supporting UAT and documenting changes for long-term maintainability</li>
          </ul>
        </Card>
      </div>

      <Card>
        <div className="text-sm font-semibold text-white/90">Experience</div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {profile.experience.map((e) => (
            <div key={e.company} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-semibold text-white/90">{e.company}</div>
                  <div className="text-sm text-white/60">{e.role}</div>
                </div>
                <div className="chip">{e.period}</div>
              </div>
              <ul className="mt-4 space-y-2 text-white/70 list-disc pl-5">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
