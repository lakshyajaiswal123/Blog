import React, { useState } from "react";
import { Categories } from "./blogCatgoriesData/BlogCategories";
import ArrowDown from "../../assets/blogAssets/blogPostAssets/ArrowDown.svg";
import SearchIcon from "../../assets/blogAssets/blogPostAssets/SearchIcon.svg";
import { BlogPostData } from "./PostData/BlogPostData";

const BlogPost = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-[1260px] mx-auto px-4 py-8 min-h-screen">

      {/* ----------------- CATEGORY FILTERS -----------------  */}
      <div className="w-full max-w-6xl mt-8">
        <div className="overflow-x-auto no-scrollbar pb-3">
          <div className="flex max-w-[960px] mx-auto gap-3 sm:gap-4
                          justify-start sm:justify-center items-center
                          font-DM-Sans font-normal
                          w-max sm:w-full px-2 sm:px-0">

            {Categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  whitespace-nowrap text-sm sm:text-[14px]
                  py-2 px-4 rounded-[35px] border
                  transition-all duration-300 cursor-pointer

                  ${activeCategory === category
                    ? "bg-[#7833FE] text-white shadow-[5px_5px_0px_black] border-[#0D0F12]"
                    : "bg-[#EEEDE9] text-[#0D0F12] border-[#EEEDE9] hover:bg-[#7833FE] hover:text-white hover:border-[#0D0F12]"
                  }
                `}
              >
                {category}
              </button>
            ))}

          </div>
        </div>
      </div>

      {/* ----------------- SEARCH and SORT section-----------------*/}
      <div className="flex flex-row justify-end gap-6 bg-white pt-6">

        {/* Search */}
        <div className="w-full md:max-w-[326px] flex items-center font-DM-Sans">
          <input
            type="text"
            placeholder="Search the topic"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-[40px] px-6 bg-[#EEEDE9] text-sm
                       text-[#686868] placeholder-[#686868] outline-none"
          />

          {/* Desktop button */}
          <button className="h-[40px] hidden sm:block px-8
                             bg-[#7833FE] text-white font-bold text-sm
                             border border-[#0D0F12]">
            Search
          </button>

          {/* Mobile button */}
          <button className="sm:hidden flex items-center justify-center
                             h-[40px] w-[45px] min-w-[45px]
                             bg-[#7833FE] border border-[#0D0F12]">
            <img src={SearchIcon} alt="search" />
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="relative group w-full max-w-[172px]">
          <button className="flex items-center justify-between
                             h-[40px] w-full px-6
                             bg-[#F1F0EC] text-[#0D0F12]">

            <span className="font-DM-Sans text-[17px]">Sort</span>
            <img src={ArrowDown} alt="sort" />
          </button>

          {/* Hover menu */}
          <div className="absolute top-full left-0 w-full bg-white
                          shadow-lg opacity-0 invisible
                          group-hover:opacity-100 group-hover:visible
                          transition-all duration-200 z-50">

            <div className="px-6 py-3 text-sm cursor-pointer
                            hover:bg-[#7833FE] hover:text-white hover:font-bold">
              Newest first
            </div>

            <div className="px-6 py-3 text-sm cursor-pointer
                            hover:bg-[#7833FE] hover:text-white hover:font-bold">
              Oldest first
            </div>
          </div>
        </div>
      </div>

      {/* -----------------BLOG GRID ----------------- */}
      <div className="w-full mt-10">
        <span className="text-[#686868] text-[12px] block pb-4 font-DM-Sans">
          Recent Blog
        </span>

        <div className="flex flex-wrap gap-x-6 gap-y-10">

          {BlogPostData.map((topics, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-4
                        md:max-w-[380px] w-full "
            >
              {/* Image */}
              <div className="w-full overflow-hidden ">
                <img
                  src={topics.image}
                  alt={topics.SubHeading}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {topics.points?.map((point, i) => (
                  <span
                    key={i}
                    className="bg-[#D9D9D9] px-2 py-2
                               text-[12px] font-DM-Sans"
                  >
                    {point}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className=" max-w-[292px] text-[20px] leading-6.5 font-DM-Sans text-[#0D0F12]
                              cursor-pointer">
                {topics.SubHeading}
              </h2>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default BlogPost;
