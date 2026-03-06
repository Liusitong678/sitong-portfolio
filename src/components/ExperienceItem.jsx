import { useState } from "react";

function ExperienceItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 px-0 py-6 text-left"
      >
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            {item.period}
          </p>

          <h3 className="text-2xl font-medium text-white">
            {item.company}
          </h3>

          <p className="text-base text-white/70">
            {item.role}
          </p>

          <p className="text-sm text-white/40">
            {item.location}
          </p>
        </div>

        <span
          className={`mt-2 text-2xl text-white/60 transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-5 border-l border-white/10 pl-6">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/40">
                Key Responsibilities
              </p>

              <ul className="space-y-3 text-white/75">
                {item.details.map((detail, index) => (
                  <li key={index} className="leading-7">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/40">
                Tech Stack
              </p>

              <div className="flex flex-wrap gap-3">
                {item.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;