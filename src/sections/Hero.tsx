import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-30 relative z-0">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-15}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-12 text-emerald-300/20" />
        </HeroOrbit>



        <HeroOrbit
          size={430}
          rotation={-15}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-12 text-emerald-300/20" />
        </HeroOrbit>



        <HeroOrbit
          size={430}
          rotation={-15}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-12 text-emerald-300/20" />
        </HeroOrbit>



        <HeroOrbit
          size={530}
          rotation={60}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-12 text-emerald-300/20" />
        </HeroOrbit>



        <HeroOrbit
          size={560}
          rotation={90}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-12 text-emerald-300/20" />
        </HeroOrbit>




        <HeroOrbit
          size={650}
          rotation={196}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-12 text-emerald-300/20" />
        </HeroOrbit>




        <HeroOrbit
          size={880}
          rotation={-5}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-12 text-emerald-300/20" />
        </HeroOrbit>
        {/* Other HeroOrbit components... */}
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind a laptop"
          />
          <div className="bg-gray-900 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/50 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>

          {/* Download Resume button with changes */}
          <a
            href="/Nitin.Goley.pdf"  // Direct link to the file in the public folder
            download="Nitin_Resume.pdf"  // File will be downloaded as this name
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-gray-200 focus:outline-none"
            style={{ position: "relative", zIndex: 10 }}  // Ensure button is clickable
          >
            <span className="font-semibold">👋</span>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};
