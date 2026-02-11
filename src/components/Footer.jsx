import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-white/85">{profile.name}</div>
            <div className="text-sm text-white/55">
              Built with React, Tailwind, and Framer Motion.
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <a className="chip hover:bg-white/10" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="chip hover:bg-white/10" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="chip hover:bg-white/10" href={`mailto:${profile.email}`}>
              Email
            </a>
          </div>
        </div>

        <div className="hr my-6" />
        <div className="text-xs text-white/45">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
