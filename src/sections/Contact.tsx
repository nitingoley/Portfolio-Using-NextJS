import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div className="py-16 lg:py-24 lg:pt-20 pt-14">
    <div className="container">
   <div className="bg-gradient-to-r from-emerald-300 to-sky-400 relative overflow-hidden z-0 text-gray-950 py-8 px-10
    text-center md:text-left
   rounded-3xl">
   <div className="absolute inset-0 opacity-5 -z-10" 
    style={{
      backgroundImage: `url(${grainImage.src})`
    }}
   ></div>
   <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
    <div>
    <h2 className="text-2xl md:text-3xl font-serif">Let&rsquo;s Build Something Incredible Together</h2>
    <p className="text-sm md:text-base mt-2">
        Have an idea in mind? Whether it's a web application, a unique project, or just a tech discussion, let's connect and turn ideas into reality.
      </p>
    </div>
      <div>
      <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2  w-max border border-gray-900">
        <span className="font-semibold">Contact Me</span>
        <ArrowUpRightIcon className="size-4" />
      </button>
      </div>
   </div>
   </div>
    </div>
    </div>
  );
};

