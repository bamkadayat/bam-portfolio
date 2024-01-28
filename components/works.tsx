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

        <p className="text-xl mb-8 mt-4 md:w-[600px]">
          A look at what I have done while we continue to imagine the things I
          can do
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
