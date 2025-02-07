import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import EcommcreStore from "@/assets/images/work-e.png";
import ChatApplication from "@/assets/images/work-c.png";
import FitnessExercise from "@/assets/images/work-f.png";



// const portfolioProjects = [
//   {
//     company: "Acme Corp",
//     year: "2022",
//     title: "Dark Saas Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/4k7IdSLxh6w",
//     image: darkSaasLandingPage,
//   },
//   {
//     company: "Innovative Co",
//     year: "2021",
//     title: "Light Saas Landing Page",
//     results: [
//       { title: "Boosted sales by 20%" },
//       { title: "Expanded customer reach by 35%" },
//       { title: "Increased brand awareness by 15%" },
//     ],
//     link: "https://youtu.be/7hi5zwO75yc",
//     image: lightSaasLandingPage,
//   },
//   {
//     company: "Quantum Dynamics",
//     year: "2023",
//     title: "AI Startup Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/Z7I5uSRHMHg",
//     image: aiStartupLandingPage,
//   },
// ];


const portfolioProjects = [
  {
    company: "E-Commerce Project",
    year: "2024",
    title: "Full-Stack E-Commerce Website",
    results: [
      { title: "Integrated MongoDB & Redis for scalability" },
      { title: "Enabled Stripe payment processing" },
      { title: "Developed secure authentication system with JWT" },
      { title: "Built product & category management system" },
      { title: "Implemented shopping cart & checkout features" },
      { title: "Designed with Tailwind CSS for responsiveness" },
      { title: "Developed admin dashboard with sales analytics" },
      { title: "Implemented coupon code system" },
      { title: "Optimized with Redis caching for performance" },
    ],
    link: "https://e-commerce-8438.onrender.com/",
    image: EcommcreStore,
  },
  {
    company: "Chat Application Project",
    year: "2024",
    title: "Real-Time Chat Application",
    results: [
      { title: "Built using MERN stack with Socket.io" },
      { title: "Integrated real-time messaging functionality" },
      { title: "Implemented user authentication & authorization with JWT" },
      { title: "Developed online user status feature" },
      { title: "Used Zustand for global state management" },
      { title: "Deployed the app for free using best practices" },
      { title: "Handled errors both on the server and client side" },
    ],
    link: "https://https://snappy-real-time-chat-1.onrender.com/",
    image: ChatApplication,
  },
  {
    company: "Fitness Tracker App",
    year: "2024",
    title: "Fitness Tracking Exercise Application",
    results: [
      { title: "Built frontend using Tailwind CSS for sleek design" },
      { title: "Integrated third-party API (RapidAPI) for exercise data" },
      { title: "Enabled users to track their fitness exercises" },
      { title: "Optimized for mobile and desktop use" },
      { title: "Added user-friendly interface for managing exercises" },
    ],
    link: "https://fitness-gym-exercise.vercel.app/",
    image: FitnessExercise,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center  ">
          <p className="uppercase text-2xl font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mb-3">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg text-white/60 lg:text-xl mt-4 max-w-md mx-auto">
          See how I transformed concept into enagaging digital experience.
        </p>
        <div className="flex md:mt-20 flex-col mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="  md:pt-12 md:px-10 lg:pt-16 lg:px-20 px-8 pt-8  sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 ">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm 
                text-transparent bg-clip-text
               "
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white  text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl cursor-pointer font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowIcon className="4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0  
                     lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
