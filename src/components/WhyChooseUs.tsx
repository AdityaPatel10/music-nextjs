"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import myMusicAcademy from "@/data/why-choose-me.json";
const musicAcademy = [
  {
    title: "Live Instrument Classes",
    description:
      "Learn guitar, piano, drums, and more with live, interactive sessions guided by expert musicians. Our hands-on teaching method helps you build real-world skills in a fun and engaging way.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/live-instrument-classes.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="live-instrument-classes"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Feedback",
    description:
      "Get immediate feedback during practice and assessments. Our instructors monitor your progress and provide personalized suggestions so you can improve faster and more effectively.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/realtime-mentoring.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="real-time feedback"
        />
      </div>
    ),
  },
  {
    title: "Performance Tracking",
    description:
      "Track your learning journey through regular assessments, progress dashboards, and recorded sessions. Stay motivated and see how far you've come with every note you master.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/performance-tracking.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="performance-tracking"
        />
      </div>
    ),
  },
  {
    title: "Collaborative Band Practice",
    description:
      "Join virtual or in-person group sessions to rehearse with fellow students. Learn teamwork, timing, and musical synergy as you prepare for student concerts and live showcases.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/collaborative-band-practice.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-md"
          alt="collaborative-band-practice"
        />
      </div>
    ),
  },
];

// interface Item {
//   title: string;
//   description: string;
//   image?: string;
// }

const WhyChooseUs = () => {
  // const content: Item[] = myMusicAcademy.musicAcademy.map((item: Item) => ({
  //   title: item.title,
  //   description: item.description,
  //   image: item.image,
  // }));
  return (
    <div className="h-full w-full rounded-none">
      <StickyScroll content={musicAcademy} />
    </div>
  );
};

export default WhyChooseUs;
