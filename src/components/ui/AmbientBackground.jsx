import { motion } from "framer-motion";

/**
 * Premium dark ambient backdrop:
 * - subtle radial glows
 * - grid texture
 * - vignette
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[#070A12]" />
      <div className="absolute inset-0 [background:radial-gradient(1200px_circle_at_20%_20%,rgba(99,102,241,0.22),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(16,185,129,0.14),transparent_55%),radial-gradient(1000px_circle_at_50%_90%,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_52%,transparent_75%)] bg-black/35" />
      <motion.div
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl bg-white/10"
        animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl bg-white/10"
        animate={{ y: [0, -14, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
