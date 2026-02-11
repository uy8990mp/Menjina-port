import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { profile } from "../data/profile.js";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const activeClass =
    "text-white bg-white/10 border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]";
  const baseClass =
    "px-3 py-2 rounded-xl text-sm border border-transparent hover:border-white/10 hover:bg-white/5 transition";

  const links = useMemo(
    () =>
      nav.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={() => setOpen(false)}
          className={({ isActive }) => cx(baseClass, isActive && activeClass)}
        >
          {item.label}
        </NavLink>
      )),
    []
  );

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#070A12]/55 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl glass">
              <Code2 size={18} />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-white/90">
                {profile.name}
              </div>
              <div className="text-xs text-white/55">{profile.title}</div>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">{links}</nav>

          <div className="hidden md:flex items-center gap-2">
            <a className="btn-ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a className="btn-primary" href="/contact">
              Contact
            </a>
          </div>

          <button
            className="md:hidden btn-ghost px-3 py-2"
            onClick={() => setOpen((s) => !s)}
            aria-label="Open menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t border-white/10"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">{links}</div>
            <div className="hr my-2" />
            <div className="flex gap-2">
              <a className="btn-ghost flex-1" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                Resume
              </a>
              <a className="btn-primary flex-1" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
