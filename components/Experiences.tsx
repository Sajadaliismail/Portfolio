import { companies } from "@/data";
import { BackgroundGradient } from "./ui/CardWithbgGradient";

export default function Experience() {
  return (
    <section id="experience" className="bg-black-100">
      <h1 className="md:heading text-2xl text-center py-8 ">
        My work <span className="text-purple-400">Experience</span>
      </h1>
      <div className="flex flex-col mt-5 py-10 h-[80vh] md:flex-row w-full bg-black-100 justify-around items-center gap-5  ">
        {companies.map((company) => (
          <BackgroundGradient
            key={company.id}
            className="rounded-[22px] sm:max-w-lg w-full p-4  sm:p-6 sm:py-12 bg-black-100 mx-auto"
          >
            <p className="text-3xl sm:text-5xl mt-4 text-nowrap pt-5 text-neutral-200">
              {company.title}
            </p>
            <p className="text-base sm:text-2xl   text-neutral-200">
              {company.company}
            </p>
            <p className="flex flex-row justify-between">
              <span className="text-xs">{company.Place}</span>
              <span className="text-xs">{company.Dates}</span>
            </p>

            <p className="text-sm text-neutral-600 py-3 dark:text-neutral-400">
              {company.Description}
            </p>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
}
