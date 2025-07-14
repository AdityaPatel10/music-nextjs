"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicTestimonials = [
  {
    quote:
      "Joining this music academy reignited my passion for the piano. The instructors are incredibly patient and knowledgeable—I've made more progress here in 3 months than years of learning alone.",
    name: "Ananya Sharma",
    title: "Piano Student",
  },
  {
    quote:
      "The live guitar classes are super interactive and engaging. I love how I can get real-time feedback and jam with other students virtually. It feels like I'm on stage already!",
    name: "Rohit Verma",
    title: "Guitar Enthusiast",
  },
  {
    quote:
      "The vocal training I received here completely transformed my confidence. I used to hesitate singing in public—now I'm prepping for my first live show!",
    name: "Meera Nair",
    title: "Vocal Student",
  },
  {
    quote:
      "From beat making to full-track production, this academy has everything a budding producer needs. The DAW tutorials are super clear, and the instructors are industry pros.",
    name: "Karan Yadav",
    title: "Electronic Music Producer",
  },
  {
    quote:
      "As a working professional, the flexible class timings and recorded sessions made it possible for me to finally pursue drumming. Learning here is fun and motivating.",
    name: "Nikita Rao",
    title: "Drumming Hobbyist",
  },
];

const TestimonialCards = () => {
  return (
    
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <h2 className="text-3xl font-bold text-center mb-8 z-10 mt-[242px]">
        Hear our Harmony: Voices of success
      </h2>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-transparent dark:bg-grid-white/[0.05] items-center relative overflow-hidden ">
        <InfiniteMovingCards
          items={musicTestimonials}
          direction="right"
          speed="fast"
        />
      </div>
    </div>
  );
};

export default TestimonialCards;
