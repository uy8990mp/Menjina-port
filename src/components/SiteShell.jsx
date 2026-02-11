import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import AmbientBackground from "./ui/AmbientBackground.jsx";
import { useLocation } from "react-router-dom";

export default function SiteShell({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Scroll the ONLY scroll container to top on route change
    const scroller = document.getElementById("app-scroll");
    if (scroller) scroller.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    // No overflow utilities here. No h-screen. No scroll.
    <div className="relative overflow-x-hidden">
      <AmbientBackground />
      <Navbar />

      <main className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}
