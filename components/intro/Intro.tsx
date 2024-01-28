"use client";
import React from "react";
import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 items-center justify-between gap-1 page-margin">
        <div>
          <h1
            tabIndex={0}
            className="md:text-5xl text-4xl font-bold uppercase tracking-normal leading-normal font-sans"
          >
            Hello, I'm Bam Kadayat.
          </h1>

          <div>
            <p className="mt-6 flex items-center">
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 1.2,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
              >
                <FaLaptopCode color="#FFA324" className="mr-4" size={60} />
              </motion.span>

              <span className="md:text-3xl text-2xl uppercase tracking-normal leading-normal font-sans">
                Front-end, UI/UX developer
              </span>
            </p>
            <div className="md:grid md:grid-cols-2 mt-8 gap-4 md:w-[780px]">
              <div className="flex items-center gap-4 mt-4">
                <button className="bg-transparent hover:bg-[#FFA324] text-white-700 font-semibold hover:text-white py-2 px-4 border border-[#FFA324] hover:border-transparent rounded uppercase whitespace-nowrap">
                  <Link
                    href={`/contact`}
                    className="flex items-center md:gap-4 gap-1"
                  >
                    <BsArrowRight size={20} />
                    <span className="text-[12px] md:text-[16px]">
                      {" "}
                      Contact me
                    </span>
                  </Link>
                </button>
                <button className="bg-transparent hover:none text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:none rounded uppercase whitespace-nowrap">
                  <a
                    href="/bam-kadayat-cv.pdf"
                    download
                    className="flex items-center md:gap-4 gap-1"
                  >
                    <IoMdDownload size={20} />

                    <span className="text-[12px] md:text-[16px]">
                      Download cv
                    </span>
                  </a>
                </button>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a
                  className="border inline-block border-[#FFA324] p-4 text-gray-700 hover:text-gray-950 rounded-full focus:scale-[1.15] hover:scale-[1.1] active:scale-80 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://www.linkedin.com/in/bam-kadayat"
                  target="_blank"
                >
                  <BsLinkedin color="#FFA324" />
                </a>

                <a
                  className="inline-block border border-[#FFA324] p-4 text-gray-700  rounded-full focus:scale-[1.1] hover:scale-[1.1] hover:text-gray-950 active:scale-80 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://github.com/bamkadayat"
                  target="_blank"
                >
                  <FaGithubSquare color="#FFA324" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-self-end">
          <Image
            src="/images/hero.svg"
            width={500}
            height={500}
            quality={100}
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
}
