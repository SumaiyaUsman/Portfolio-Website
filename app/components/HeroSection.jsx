"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello, I&apos;m {""}
            </span>
            <br></br>
            <TypeAnimation
                sequence={[
                    'Sumaiya',
                    1000,
                    'a Student',
                    1000,
                    'a Programmer',
                    1000,
                    'a Web/ App Developer',
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Innovating with code and exploring new technologies
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                Hire Me
            </button>
            <a 
              href="/sumaiya_resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full sm:w-fit mt-3"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Resume</span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex justify-center items-center relative">
            <Image 
              src="/images/memoji.png" 
              alt="sumaiya avatar" 
              width={300} 
              height={300} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
