import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Project = lazy(() => import("./pages/Project"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));

function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center text-white/60">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;