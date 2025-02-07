"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import Html5Icon from "@/assets/icons/html5.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import Chrome from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import MapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItem } from "@/components/ToolBoxItem";
import {motion} from "framer-motion";
import { useRef } from "react";

const toolboxItmes = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: Html5Icon,
  },
  {
    title: "CSS3",
    iconType: CSS3Icon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: Chrome,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📚",
    left: "5%",
    top: "5%",
  },
  {
    title: "Coding Challenges",
    emoji: "💻",
    left: "50%",
    top: "5%",
  },
  {
    title: "Traveling",
    emoji: "🌍",
    left: "10%",
    top: "35%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Blogging",
    emoji: "✍️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about" ref={constraintRef}>
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Beyond the Code"
          description="Discover my journey, passions, and the experiences that shape me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5  gap-8">
          <Card className="h-[320px] md:col-span-2">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={BookImage} alt="Cover book name" />
            </div>
          </Card>

          <Card className="h-[320px] p-0  md:col-span-3 ">
            <CardHeader
              title="My Toolbox"
              description=" A collection of technologies and tools that power my development
                journey."
              className="mt-6"
            />

            <ToolBoxItem items={toolboxItmes} className="-mt-6" 
             itemsWrapperClassName="animate-move-left [animation-duration:20s]"
            />
            <ToolBoxItem
              items={toolboxItmes}
              className="mt-6 "
              itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:20s]"
              
            />
          </Card>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5  ">
          <Card className="h-[320px] p-0 flex flex-col col-span-3">
            <CardHeader
              title="Beyond the Code"
              description=" Discover my passions outside the screen—whether it's solving
                puzzles, exploring new places, or diving into creative projects."
              className="px-6 py-6"
            />

            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag 
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative col-span-2">
            <Image
              src={MapImage}
              alt="Map Image"
              className="h-full w-full object-cover object-left-top"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full 
             after:content-[''] after:absolute after:outline-2 after:inset-0 after:outline  after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 
            ">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400  -z-20 animate-ping
                [animation-duration:2s]
               "></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400  -z-10"></div>
              <Image src={smileEmoji} alt="Smile Image" className="size-20 " />
            </div>
          </Card>
        </div>
        </div>
       
      </div>
    </div>
  );
};
