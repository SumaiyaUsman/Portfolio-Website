"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Java</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML/CSS</li>
          <li>React.js, Node.js, Next.js</li>
          <li>Firebase</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Drexel University<br />
            Philadelphia, PA<br />
            B.S. in Computer Science </li>
          <li>Heriot-Watt University<br />
            Dubai, UAE<br />
            Degree Entry Program (Foundation Year) in Engineering and Computing</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-2">
          <li>Headstarter AI<br />
            Building 5+ AI Apps and APIs using Nextjs, OpenAI, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users<br />
            Developing projects from design to deployment leading 4+ engineering fellows using MVC design patterns<br />
            Coaching by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice patterns</li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab (id);
        });
    };

  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/me.JPG" width={500} height={500} alt="Sumaiya Usman" />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                    Hi, my name is Sumaiya Usman. I am an upcoming sophomore at Drexel University, majoring in Computer Science. I have experience working with Java, JavaScript, React, Python, HTML/CSS, and Git. I am passionate about software engineering and the exciting fields of AI and machine learning. Additionally, I am dedicated to advocating for more women in STEM fields, aiming to inspire and support the next generation of female tech leaders.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;