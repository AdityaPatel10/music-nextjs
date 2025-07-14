"use client";
import { HoverEffect } from "./ui/card-hover-effect";

import React from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export const upcomingWebinars = [
  {
    title: "Online Music Classes",
    description:
      "Interactive live and recorded sessions for instruments, vocals, and theory—available from beginner to advanced levels.",
    href: "webinar/online-music-classes",
  },
  {
    title: "Virtual Jam Sessions",
    description:
      "Collaborate and perform live with other students around the world using our real-time jamming platform.",
    href: "webinar/virtual-jam-sessions",
  },
  {
    title: "Music Production Lab",
    description:
      "Hands-on learning environment equipped with DAWs, MIDI tools, and professional mixing/mastering guidance.",
    href: "webinar/music-production-lab",
  },
  {
    title: "Certificate Programs",
    description:
      "Earn recognized certifications in music theory, performance, and production through structured learning paths.",
    href: "webinar/certificate-programs",
  },
  {
    title: "Student Showcase",
    description:
      "Monthly virtual concerts where students perform live and build confidence in front of a global audience.",
    href: "webinar/student-showcase",
  },
  {
    title: "Mentorship Program",
    description:
      "Get one-on-one mentorship from industry professionals to guide your music journey and career goals.",
    href: "webinar/mentorship-program",
  },
];

function Webinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            featured webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
      </div>
      <div className="mt-10">
        <HoverEffect
          items={upcomingWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: webinar.href,
          }))}
        />
      </div>
      <div className="mt-10 text-center">
        <Button
          borderRadius="1.75rem"
          className="bg-black dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <Link
            href={"/webinar"}
            className="h-full w-full flex justify-center items-center"
          >
            View All Webinars
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Webinars;
