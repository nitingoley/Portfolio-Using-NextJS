import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const services = [
  "WebDev",
  "Frontend",
  "Backend",
  "FullStack",
  "MERN",
  "Ecommerce",
  "Database",
  "API",
  "UI/UX",
  "Responsive",
  "Authentication",
  "Security",
  "Optimization",
  "Cloud",
  "VersionControl",
  "DevOps",
  "Automation",
  "SDLC",
  "Agile",
  "ProjectManagement",
  "ProblemSolving",
  "Consulting",
  "CodeReview",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 -translate-x-1/2  pr-4 animate-move-left [animation-duration:30s] ">
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {services.map((word) => (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span className="text-gray-900 uppercase font-extrabold text-sm">
                        {word}
                      </span>
                      <StarIcon className="size-4 text-gray-900 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
