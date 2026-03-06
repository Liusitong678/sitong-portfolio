import { useState } from "react";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:bg-white/[0.07]">
      {project.image ? (
        <div className="overflow-hidden border-b border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/9] object-cover transition duration-500 hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="flex h-56 items-center justify-center border-b border-white/10 bg-white/[0.03]">
          <div className="text-center">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-white/30">
              Project Preview
            </p>
            <p className="text-lg text-white/50">{project.title}</p>
          </div>
        </div>
      )}

      <div className="space-y-5 p-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            {project.company}
          </p>

          <h2 className="text-2xl font-medium text-white">
            {project.title}
          </h2>

          <div className="space-y-1 text-sm text-white/50">
            <p>{project.role}</p>
            <p>{project.location}</p>
          </div>
        </div>

        <p className="leading-7 text-white/70">
          {project.summary}
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="group inline-flex items-center gap-2 text-sm tracking-wide text-white/70 transition hover:text-white"
        >
          <span>{open ? "Hide Details" : "View Details"}</span>
          <span
            className={`transition duration-300 ${
              open ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </span>
        </button>

        <div
          className={`grid overflow-hidden transition-all duration-300 ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/10 pt-5">
              <ul className="space-y-3 text-white/65">
                {project.highlights.map((item, index) => (
                  <li key={index} className="leading-7">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;