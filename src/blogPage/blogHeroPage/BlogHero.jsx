import React from "react";
import { BlogHeroData, TrendingTopics } from "../blogPageData/BlogData";

export default function BlogHero() {
  const item = BlogHeroData;

  return (
    <section className="w-full py-4 lg:py-6 px-5 bg-[#EAEAEA] ">
      <div className="max-w-[1208px] mx-auto font-DM-Sans">

        {/* Top Label Blog */}
        <span className="px-1 mb-5 text-xs text-[#686868]">
          Blog
        </span>

        {/* Container */}
        <div className="max-w-[1260px] mx-auto mt-5 border-b border-[#D9D9D9] ">

          {/* Main Flex */}
          <div className="flex flex-col lg:flex-row gap-3 ">

            {/* ------------------- LEFT SECTION ------------------- */}
            <div className="lg:max-w-[815px] flex-1">
              <div className="flex flex-col gap-y-6">

                {/* Banner */}
                <img
                  className="w-full h-full object-cover"
                  src={item.mainBanner}
                  alt="Blog Banner"
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-4 text-[#0D0F12]">
                  {item.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#D9D9D9] px-4 py-2 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Heading */}
                <div className="max-w-[639px]">
                  <h2 className="font-bold md:text-[35px] text-[#0D0F12] md:leading-[42px]">
                    {item.heading}
                  </h2>
                </div>

              </div>
            </div>

            {/* -------- Center Border-------------------*/}
            <div className="h-px w-full bg-[#D9D9D9]
                md:w-[1px] lg:h-[656px] md:mx-3 
                shrink-0 "/>

            {/* ------------------- RIGHT SECTION ------------------- */}
            <div className="w-full lg:w-[315px] shrink-0 mt-4 md:mt-0">

              {/* Trending Header */}
              <span className="text-[#686868] text-[12px]">
                Trending Topics
              </span>

              {/* Trending List */}
              {TrendingTopics.map((topics, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-y-3 pt-3 pb-3 md:pb-0"
                >
                  {/* Image */}
                  <img
                    className="w-full h-full object-cover"
                    src={topics.image}
                    alt="Trending Banner"
                  />

                  {/* Points */}
                  <div className="flex flex-wrap gap-4 text-[#0D0F12]">
                    {topics.points?.map((point, i) => (
                      <span
                        key={i}
                        className="bg-[#D9D9D9] px-5 py-2 text-xs"
                      >
                        {point}
                      </span>
                    ))}
                  </div>

                  {/* SubHeading */}
                  <div className="max-w-[292px]">
                    <h2 className="text-[16px] font-DM-Sans text-[#0F0D12]">
                      {topics.SubHeading}
                    </h2>
                  </div>
                </div>
              ))}

            </div>
            {/* ------------------- RIGHT END -------------------*/}

          </div>
        </div>
      </div>
    </section>
  );
}
