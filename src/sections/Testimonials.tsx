import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Nitin was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Nitin was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Nitin's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Nitin is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Nitin's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="mt-16">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="Professional, skilled, and highly responsive. Their expertise in web development made a huge difference in our project."
        />
        <div className="mt-16 flex justify-center ">
          <div className="flex flex-wrap justify-center gap-8 ">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="size-14 bg-gray-700 flex items-center justify-center rounded-full">
                    <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full md:p-8 md:max-w-md" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">{testimonial.position}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
