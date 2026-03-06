import ExperienceItem from "../components/ExperienceItem";
import { experienceData } from "../data/experienceData";

function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-8 py-20 md:py-24">
      <div className="mb-12 md:mb-16">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/40">
          Career Journey
        </p>

        <h1 className="text-4xl font-medium text-white md:text-5xl">
          Experience
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-white/60">
          Selected professional experience in frontend development, with a focus
          on enterprise systems, responsive interfaces, and user-centered design.
        </p>
      </div>

      <div>
        {experienceData.map((item) => (
          <ExperienceItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Experience;