import { motion } from "framer-motion";

export function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div className={`glass rounded-2xl p-5 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

export function BadgeRow({ items = [] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="chip">
          {t}
        </span>
      ))}
    </div>
  );
}

export function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="space-y-2">
      {kicker ? <div className="section-kicker">{kicker}</div> : null}
      <div className="section-title">{title}</div>
      {subtitle ? <div className="muted max-w-2xl">{subtitle}</div> : null}
    </div>
  );
}
