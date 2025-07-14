"use client";
import React from "react";
import courseData from "@/data/music-courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import { Button } from "./ui/moving-border";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="mt-27 bg-[#0e1422] mb-0 py-10">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          featured courses
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With The Best
        </p>
      </div>
      <div className="flex flex-wrap space-y-7 mt-9 mx-7 text-center items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-7">
          {featuredCourses.map((course: Course) => (
            <div className="flex justify-center gap-5 mb-9" key={course.id}>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full">
                <div className="grid grid-col p-4 sm:p-6 items-center text-center w-auto h-auto">
                  <img
                    src={course.image}
                    alt={course.title}
                    height="400"
                    width="400"
                    className="object-contain"
                  />
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                  <div className="flex justify-center w-full">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="rounded-full px-3 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button
          borderRadius="1.5rem"
          className="bg-black dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <Link
            href={"/courses"}
            className="h-full w-full flex justify-center items-center"
          >
            View All Courses
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default FeaturedCourses;
