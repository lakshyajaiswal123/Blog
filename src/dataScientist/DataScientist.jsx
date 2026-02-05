import React, { useRef, useState } from "react";
import Summary from "../summary/Summary";
import { ScientistData } from "./ScientistData/ScientistData";
import { ScrollableContent } from "./ScientistData/ScrollableContent";
import DeltaSharing from "../assets/deltasharing/DeltaSharingBanner.svg"
import CodeBlock from "../codeBlock/CodeBlock";
import dataAnalytics from "../assets/dataAnalytics/DataAnalyticsBanner.svg"



export default function DataScientist() {
 
  //  reference
  const datascienceRef = useRef(null);
  const skillsRef = useRef(null);
  const roadmapRef = useRef(null);
  const databasesRef = useRef(null);

  // active state
  const [activeIndex, setActiveIndex] = useState(0);

  // sidebar items or points
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
    <section className="border-t border-[#D9D9D9]">

           {/* Container */}
      <div className="max-w-[1260px] mx-auto ">

        {/* Left and Right-section */}
        <div className="flex flex-col md:flex-row">

          {/* ---------------- Left Section ------------*/}
          <div className="flex-1 py-8 space-y-6 pr-5">

            {/* Summary */}
            <Summary />

   {/* DataScientist-section */}

 {ScientistData.map((item, index) => (
  <div key={index} className="flex flex-col font-DM-Sans gap-y-5 md:p-0 p-3">

    {/* Heading */}
    <h1 className="
      font-semibold
      text-[20px] md:text-[35px]
      text-[#0D0F12]
      max-w-[496px]
      leading-tight
    ">
      {item.heading}
    </h1>

    {/* Paragraphs */}
    <div ref={datascienceRef} className="flex flex-col gap-y-5 max-w-[740px] text-[#0D0F12]  ">

      {item.paragraphs.map((para, i) => (
        <p
          key={i}
          className="
            text-[#0D0F12]
            text-[16px] md:text-[20px]  "
        >
          {para}
        </p>
      ))}
    </div>

      {/* Delta Sharing Banner */}
      <div  ref={skillsRef}>
        <img src={DeltaSharing} className="h-auto object-cover" alt="Delta Sharing Banner" />
      </div>

      {/* Data Science Paragraph-section after delta sharing image */}
      <div className="max-w-[685px] text-[16px] md:text-[20px] text-[#0D0F12]">
        <p ref={roadmapRef} >{item.primaryText}</p>

        {/* Coding box */}
        <CodeBlock/>

      <p  ref={databasesRef} >{item.secondaryText}</p>

      </div>

  </div>
))}


</div>

          {/* ---------------- Right Section -sidebar ------------ */}
          <div className="md:block md:max-w-[340px] border-l border-[#D9D9D9] ">
            
            <div className="flex flex-col gap-y-5 sticky top-6 md:pl-2 md:pt-2 md:pr-0 md:pb-0 p-3  ">

            {/* Keep in Touch CTA-section */}
              <div className="bg-[#EEEDE9] p-4">
                <h3 className="font-semibold font-DM-Sans mb-3 text-[20px]">
                  Let’s keep in touch!
                </h3>
                <button className="w-full bg-[#FFD21F] py-2 cursor-pointer 
                 font-semibold font-poppins text-[#0D0F12] 
                 transition-all border-1 border-[#0D0F12]
                hover:-translate-y-1 hover:-translate-x-1
                 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                  Subscribe
                </button>
              </div>

            {/* Content in your Story-section */}
            {ScrollableContent.map((content,index) =>(

               <div key={index} className=" hidden md:block bg-[#EEEDE9] p-2 max-w-[395px] font-DM-Sans ">
               
               {/* Content Heading */}
                <h3 className="font-bold font-DM-Sans text-[#0D0F12] py-2 ">
                 <span className="px-2">{content.heading}</span>
                </h3>

             <ul className="space-y-3 text-sm">
                  {storyItems.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleClick(item.ref, index)}
                      className={`
                        cursor-pointer pl-2 transition-all
                        hover:text-purple-600 text-[#0D0F12]
                        ${
                          activeIndex === index
                            ? "border-l-3 border-purple-500 text-purple-600 font-medium"
                            : "border-l-2 border-transparent"
                        }
                      `}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>

            ))}
             

            {/* Data Analytics-Banner */}
            <div className="hidden md:block">
              <img src={dataAnalytics}
              className="w-full h-full object-cover" alt="Data Analytics Banner" />
            </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
