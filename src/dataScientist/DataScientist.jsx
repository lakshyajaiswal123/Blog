import React, { useRef, useState } from "react";
import { Summarydata } from "../summary/summarydata/Summary";
import { ScientistData } from "./ScientistData/ScientistData";
import { ScrollableContent } from "./ScientistData/ScrollableContent";
import DeltaSharing from "../assets/deltasharing/DeltaSharingBanner.svg";
import CodeBlock from "../codeBlock/CodeBlock";
import dataAnalytics from "../assets/dataAnalytics/DataAnalyticsBanner.svg";

export default function DataScientist() {
  // reference
  const datascienceRef = useRef(null);
  const skillsRef = useRef(null);
  const roadmapRef = useRef(null);
  const databasesRef = useRef(null);

  // active state
  const [activeIndex, setActiveIndex] = useState(0);

  // sidebar items
  const storyItems = [
    { title: "What Does a Data Scientist Do?", ref: datascienceRef },
    { title: "What Skills Do Data Scientists Need?", ref: skillsRef },
    { title: "Data Scientist Roadmap", ref: roadmapRef },
    { title: "Understand databases", ref: databasesRef },
  ];

  // click handler
  const handleClick = (ref, index) => {
    setActiveIndex(index);
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="border-t border-[#D9D9D9] bg-[#EAEAEA]">
      {/* Container */}
      <div className="max-w-[1260px] mx-auto">
        {/* Left + Right section */}
        <div className="flex flex-col lg:flex-row md:p-0 p-2">

          {/* ================= LEFT SECTION ================= */}
          <div className="flex-1 py-8 space-y-6 pr-0 lg:pr-5 md:px-6 xl:px-0">

            {/* -------- Summary Section -------- */}
            <div className="w-full lg:max-w-[771px] md:p-0 p-3">
              <div className="font-DM-Sans font-bold bg-[#7833FE] text-white w-fit px-3 py-1 text-sm">
                Summary
              </div>

              {Summarydata.map((item, index) => (
                <div key={index} className="bg-[#EEEDE9] p-4 sm:p-6 md:p-8">
                  <ul className="flex flex-col gap-y-3 list-disc list-outside md:pl-4">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-[#0D0F12] lg:max-w-[587px] font-DM-Sans text-[12px] sm:text-[14px] md:text-[18px] leading-tight md:leading-[25px]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* -------- Scientist Content -------- */}
            {ScientistData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col font-DM-Sans gap-y-5 md:p-0 p-3"
              >
                {/* Heading */}
                <h1
                  ref={datascienceRef}
                  className="font-semibold text-[20px] md:text-[35px] text-[#0D0F12] max-w-[496px] leading-tight"
                >
                  {item.heading}
                </h1>

                {/* Paragraphs */}
                <div className="flex flex-col w-full lg:max-w-[740px] gap-y-5 text-[#0D0F12]">
                  {item.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="text-[#0D0F12] text-[16px] sm:text-[18px] md:text-[20px]"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Banner */}
                <div>
                  <img
                    src={DeltaSharing}
                    className="h-auto object-cover"
                    alt="Delta Sharing Banner"
                  />
                </div>

                {/* Skills Heading */}
                <h1
                  ref={skillsRef}
                  className="w-full lg:max-w-[496px] font-semibold text-[20px] md:text-[35px] text-[#0D0F12] leading-tight lg:whitespace-nowrap"
                >
                  {item.dataSkills}
                </h1>

                {/* Skills Text */}
                <div className="w-full lg:max-w-[685px] text-[16px] sm:text-[18px] md:text-[20px] text-[#0D0F12]">
                  <p>{item.primaryText}</p>
                  <CodeBlock />
                  <p>{item.secondaryText}</p>
                </div>

                {/* Roadmap + DB */}
                <div className="flex flex-col gap-y-4 w-full lg:max-w-[685px] text-[16px] sm:text-[18px] md:text-[20px] text-[#0D0F12]">

                  <h1
                    ref={roadmapRef}
                    className="font-semibold text-[20px] md:text-[35px] text-[#0D0F12] max-w-[496px] leading-tight"
                  >
                    {item.DataRoadmap}
                  </h1>

                  <p>{item.dummytext}</p>

                  <h1
                    ref={databasesRef}
                    className="font-semibold text-[20px] md:text-[35px] text-[#0D0F12] max-w-[496px] leading-tight"
                  >
                    {item.UnderStandDatabase}
                  </h1>

                  <p>{item.dummytext}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= DIVIDER ================= */}
          <div className="h-[1px] bg-[#D9D9D9] md:w-[1px] md:h-auto mx-4 lg:mx-8 shrink-0" />

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="w-full lg:max-w-[395px] lg:shrink-0 lg:pt-15">
            <div className="lg:sticky lg:top-20 flex flex-col gap-y-5">

              {/* Subscribe Box */}
              <div className="flex flex-col gap-y-3 bg-[#EEEDE9] p-8">
                <h3 className="font-DM-Sans text-[20px]">
                  <span>Let’s keep in touch!</span>
                </h3>

                <button
                  className="w-full bg-[#FFD21F] py-2 cursor-pointer font-semibold font-poppins text-[#0D0F12]
                  transition-all border border-[#0D0F12]
                  hover:-translate-y-1 hover:-translate-x-1
                  hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
                >
                  Subscribe
                </button>
              </div>

              {/* Story List */}
              {ScrollableContent.map((content, index) => (
                <div
                  key={index}
                  className="hidden lg:block bg-[#EEEDE9] p-4 font-DM-Sans max-w-[395px]"
                >
                  <h3 className="font-bold text-[20px] mb-4">
                    {content.heading}
                  </h3>

                  <ul className="flex flex-col gap-y-5 text-[14px]">
                    {storyItems.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => handleClick(item.ref, i)}
                        className={`
                          cursor-pointer pl-3 transition-all duration-200 hover:text-[#7833FE]
                          ${
                            activeIndex === i
                              ? "border-l-4 border-[#7833FE] text-[#7833FE] font-medium"
                              : "border-l-4 border-transparent text-[#686868]"
                          }
                        `}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Bottom Banner */}
              <div className="hidden lg:block">
                <img
                  src={dataAnalytics}
                  className="w-full object-cover"
                  alt="Data Analytics Banner"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
