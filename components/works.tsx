"use client";

import React from "react";

import { worksData } from "@/lib/data";
import Work from "./work";
import { MdWorkHistory } from "react-icons/md";

export default function Works() {
  return (
    <section className="page-margin">
      <div>
        <div className="flex items-center gap-4">
          <MdWorkHistory color="#FFA324" size={40} />
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-normal leading-normal font-sans">
            My work
          </h1>
        </div>

        <p className="text-xl mb-8 mt-4 md:w-[800px]">
          Check out my work page! I highlight my frontend, backend, and UI/UX
          design projects. I have worked on a variety of projects, from small to
          large web applications. I am passionate about creating beautiful,
          user-friendly interfaces and writing clean, maintainable code. I am
          always looking for new opportunities to learn and grow as a developer.
        </p>
        <div className="grid md:grid-cols-2 gap-2">
          {worksData.map((project, index) => (
            <React.Fragment key={index}>
              <Work {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
