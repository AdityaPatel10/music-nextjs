"use client";
"use client";
import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";

function page() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 mt-15">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We're here to help you with any questions about our courses, programs,
          or events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>
        <input
          type="email"
          placeholder="Your email address"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-4"
        />
        <textarea
          cols={50}
          rows={4}
          placeholder="Your message"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-4"
        />
        <div className="m-4 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Send Message</span>
          </HoverBorderGradient>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default page;
