import { profile } from "../data/profile.js";
import { FadeIn, SectionHeader, Card } from "../components/ui/Primitives.jsx";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <SectionHeader
          kicker="Contact"
          title="Let’s build something clean and fast."
          subtitle="Send a message, or connect via LinkedIn/GitHub. This form is frontend-only by default — you can wire it to EmailJS, a serverless function, or an API later."
        />
      </FadeIn>

      <div className="grid lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-7 space-y-4">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted (demo). Connect this to an API to send emails.");
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-white/70">Name</label>
                <input
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/25"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70">Email</label>
                <input
                  type="email"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/25"
                  placeholder="you@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white/70">Message</label>
              <textarea
                className="w-full min-h-[140px] rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/25"
                placeholder="Tell me what you're building…"
                required
              />
            </div>

            <button className="btn-primary" type="submit">
              Send <ArrowRight size={18} />
            </button>
          </form>
        </Card>

        <Card className="lg:col-span-5 space-y-4">
          <div className="text-sm font-semibold text-white/90">Direct links</div>

          <a className="btn-ghost w-full justify-start" href={`mailto:${profile.email}`}>
            <Mail size={18} /> {profile.email}
          </a>
          <a className="btn-ghost w-full justify-start" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub
          </a>
          <a className="btn-ghost w-full justify-start" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} /> LinkedIn
          </a>

          {/* <div className="hr" />
          <div className="text-sm text-white/65">
            Tip: Replace the placeholder URLs in{" "}
            <span className="font-mono text-white/80">src/data/profile.js</span>.
          </div> */}
        </Card>
      </div>
    </div>
  );
}
