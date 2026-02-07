import React from "react";
import { Herodata } from "./heroData/Herodata";
import Banner from "../assets/heroAssets/Banner/HeroBanner.svg";
import { NavLink } from "react-router-dom";
// import background from "../assets/heroAssets/background/grid-desktop.svg"


export default function Hero() {
  return (
    
    <section className="w-full py-8 lg:py-12   p-3  bg-no-repeat bg-cover bg-center "
   style={{ backgroundImage: "url('/grid-desktop.svg')" }}>


      <div className="max-w-[1260px] mx-auto px-1 mb-5 text-xs text-[#686868] font-DM-Sans">
       <span>  
         / Blog   / Data Science 
         {/* <NavLink
              to="/Blog" reloadDocument 
              className={({ isActive }) =>
                isActive ? "text-[#D2B48C]" : "text-black"
              }
            >
             / Blog     
            </NavLink>

             <NavLink
              to="/DataScience" reloadDocument 
              className={({ isActive }) =>
                isActive ? "text-[#D2B48C]" : "text-black"
              }
            >
             / Data Science 
            </NavLink> */}
        </span>
      </div>
    
      {/* Container */}
      <div className=" flex flex-col lg:flex-row items-stretch
                        gap-y-13 lg:gap-4
                       bg-[#EEEDE9]
                        max-w-[1260px] mx-auto
                        px-2 lg:px-6
                         py-4 sm:py-6 lg:py-8 " >
        
        {Herodata.map((item, index) => (
          
          <React.Fragment key={index}>
            
            {/* Left-section */}
            <div className="flex-1 flex flex-col ">
              
              {/* Heading + SubHeading */}
              <div>
                  {/* Main-Heading */}
                <h1 className="max-w-[535px] font-DM-Sans
                  text-[#0D0F12] font-bold  md:font-semibold
                  text-[25px] sm:text-3xl lg:text-[40px] leading-tight md:leading-10.5
                  tracking-wide ">
                  {item.heading}
                </h1>
                  {/* Sub Heading */}
                <p className="max-w-[490px] mt-4 text-sm md:text-xl font-normal tracking-wide font-DM-Sans leading-tight md:leading-6.5 ">
                {item.subHeading}
                </p>
              </div>

              {/* Tags */}
              <div className=" flex flex-wrap gap-2 sm:gap-3 mt-5 lg:mt-auto ">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="
                      bg-[#D9D9D9] text-[#0D0F12]
                      font-DM-Sans
                      px-3 py-1
                      text-xs sm:text-sm
                      whitespace-nowrap
                      leading-6 " >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Right-section */}
            <div className=" flex-1 flex items-center justify-center md:p-0 pb-5">
              <img
                src={Banner}
                alt="Hero Banner"
                className="w-full md:max-w-[598px] h-auto object-cover " />
            </div>

          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
