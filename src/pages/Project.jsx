import { projectData } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-20 md:py-24">
      <div className="mb-14 max-w-3xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/35">
          Selected Work
        </p>

        <h1 className="text-4xl font-medium text-white md:text-5xl">
          Projects
        </h1>

        <p className="mt-5 leading-8 text-white/60">
          A selection of professional projects focused on frontend systems,
          real-time monitoring platforms, and user-centered product interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;