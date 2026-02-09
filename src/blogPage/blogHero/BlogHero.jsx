import React from "react";
import { BlogHeroData } from "./blogHeroData/BlogHeroData";
// import Banner from "./assets/heroAssets/Banner/HeroBanner.svg"

export default function BlogHero() {
  return (
    <section
      className="w-full py-8 lg:py-12   p-3  bg-no-repeat bg-cover bg-center "
      //    style={{ backgroundImage: "url('/grid-desktop.svg')" }}
    >
      <div className="max-w-[1260px] mx-auto px-1 mb-5 text-xs text-[#686868] font-DM-Sans">
        <span>/ Blog</span>

        {/* Container */}
        <div className="max-w-[1260px] mx-auto ">
          {/* Left and Right-section */}
          <div className="flex flex-col lg:flex-row">
            {/* ---------------- Left Section ------------*/}
            <div className="flex-1 py-8 space-y-6 pr-0 lg:pr-5 md:px-6 lg:px-0">
              {/* Summary-section */}

              {/* Conatiner */}
              <div className="max-w-[771px]  md:p-0 p-3"></div>
            </div>

            {/* ---------------- Right Section -sidebar ------------ */}

            {/* ---------------- THE CENTERED BORDER DIV ------------ */}
            <div
              className="w-full h-[1px] mx-3 bg-[#D9D9D9]
                md:w-[1px] md:h-auto md:mx-12 shrink-0 "
            />

            {/* RIGHT Section */}
            <div className="w-full lg:w-[395px] shrink-0 ">
              <span>/ Trending Topics</span>

              <div className="flex flex-col gap-y-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
