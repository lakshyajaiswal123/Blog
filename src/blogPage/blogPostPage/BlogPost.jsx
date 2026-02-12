import React, { useState,useEffect } from "react";
import { Categories } from "./blogCatgoriesData/BlogCategories";
import ArrowDown from "../../assets/blogAssets/blogPostAssets/ArrowDown.svg";
import SearchIcon from "../../assets/blogAssets/blogPostAssets/SearchIcon.svg";
import { BlogPostData } from "./PostData/BlogPostData";

const BlogPost = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [tempSearch, setTempSearch] = useState("");

  // Sort button open/close
  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState("new");

  // --- PAGINATION STATE ---
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // 1. BACK TO TOP STATE & LOGIC
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section ke niche (500px) jate hi button dikhega
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ---------------- FILTER ----------------
  // Filter method
const filteredPosts = BlogPostData.filter(post => {

  const matchCategory =
    activeCategory === "All" ||
    post.category === activeCategory ||
    //Nicche wali line tab use hoti h category array ho like -> category: ["Data Engineer","Data Scientist"]
    post.category?.includes?.(activeCategory);

    //SubHeading ki last word ko search krenge aur sreach qurery k dono ko matche krenge tab aage jana dega
  const matchSearch =
    post.SubHeading.toLowerCase()
      .includes(searchQuery.toLowerCase());

  return matchCategory && matchSearch;
});


  // ---------------- SORT ----------------
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return sortType === "new" ? b.id - a.id : a.id - b.id;
  });

  // --- PAGINATION LOGIC ---
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // Current page par dikhne wale posts
  const currentItems = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 500, behavior: 'smooth' }); // Grid par scroll back karega
  };

  return (
    <section className="bg-[#EAEAEA]">
    <div className="max-w-[1208px] mx-auto px-5 xl:px-0 py-1 min-h-screen ">

      {/* ---------------- CATEGORY FILTER BUTTONS ---------------- */}
      <div className="w-full max-w-6xl mt-8">
        <div className="overflow-x-auto no-scrollbar pb-3">

            
            <div className="flex max-w-[960px] mx-auto gap-3 sm:gap-4
            justify-start sm:justify-center items-center py-2
            font-DM-Sans font-normal
            w-max sm:w-full px-2 sm:px-0 ">
            {Categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  whitespace-nowrap text-sm sm:text-[14px]
                  py-2 px-3 rounded-[35px] border
                  transition-all duration-200 ease-out
                  cursor-pointer transform

                  ${
                    activeCategory === category
                      ? "bg-[#7833FE] text-white border-[#0D0F12]   shadow-[5px_5px_0px_black] -translate-y-1"
                      : "bg-[#EEEDE9] text-[#0D0F12] border-[#EEEDE9] hover:bg-[#7833FE] hover:text-[#FFFFFF] hover:border-[#0F0D12] transition-all duration-300"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- SEARCH and SORT section ---------------- */}
      <div className="flex flex-row justify-end gap-2 md:gap-6 pt-6">

        {/* Search Input Field*/}
        <div className="w-full md:max-w-[326px] flex items-center font-DM-Sans">
          <input
            type="text"
            placeholder="Search the topic"
            value={tempSearch}
            onChange={(e) => setTempSearch(e.target.value)}
            className="
              h-[40px] md:px-6 px-2 bg-[#EEEDE9] text-sm
              text-[#686868] placeholder-[#686868] outline-none
            "
          />

          {/* DeskTop Search Button */}
          <button
            onClick={() => setSearchQuery(tempSearch)}
            className="
              h-[40px] hidden sm:block px-8
              bg-[#7833FE] text-white font-bold text-sm
              border border-[#0D0F12]
            "
          >
            Search
          </button>
        
        {/* Mobile Section Button Search */}
          <button
            onClick={() => setSearchQuery(tempSearch)}
           className="sm:hidden flex items-center justify-center
              h-[40px] w-[45px] min-w-[45px]
              bg-[#7833FE] border border-[#0D0F12]" >
                
                {/* Search Logo */}
            <img src={SearchIcon} alt="search" />
          </button>
        </div>

        {/* Sort dropdown Section */}
        <div className="relative w-full max-w-[172px] border border-[#A7A7A7]">

          <button
            onClick={() => setSortOpen((p) => !p)}
            className="
              flex items-center justify-between
              h-[40px] w-full p-5 cursor-pointer
              bg-[#EEEDE9] text-[#0D0F12]
            "
          >
            <span className="font-DM-Sans text-[14px] md:text-[17px]">
              Sort
            </span>

            {/* Arrow Image */}
            <img src={ArrowDown}
             className={` w-[13px] h-[27px] transition-transform duration-300
                ${sortOpen ? "rotate-180" : "rotate-0"}`}
              alt="sort" />
          </button>

          {/* Dropdown */}
          <div
            className={`
              absolute top-full left-0 w-full bg-[#FFFFFF] shadow-lg z-50
              transition-all duration-200  mt-[1px]
              ${sortOpen ? "opacity-100 visible" : "opacity-0 invisible"}
            `}
          >
              {/* Newest Button */}
            <div
              onClick={() => {
                setSortType("new");
                setSortOpen(false);
              }}
              className="
                px-3 md:px-6 py-[11px]
                text-[12px] md:text-sm text-[#0F0D12]
                font-DM-Sans whitespace-nowrap 
                cursor-pointer hover:bg-[#7833FE] hover:text-white hover:font-bold
              "
            >
              Newest first
            </div>

              {/* Older Button */}
            <div
              onClick={() => {
                setSortType("old");
                setSortOpen(false);
              }}
              className="
                px-3 md:px-6 py-[11px]
                text-[12px] md:text-sm text-[#0F0D12]
                font-DM-Sans whitespace-nowrap
                cursor-pointer hover:bg-[#7833FE] hover:text-white hover:font-bold
              "
            >
              Oldest first
            </div>
          </div>

        </div>
      </div>

      {/* ---------------- BLOG CARDS ---------------- */}
      <div className="w-full mt-10">

        <span className="text-[#686868] text-[12px] block pb-4 font-DM-Sans">
          Recent Blog
        </span>

        <div className="flex flex-wrap gap-x-6 md:gap-y-10 gap-y-7">
          {currentItems.map((topics, index) => (
            <div
              key={index}
              className="
                flex flex-col md:gap-y-2 gap-y-5
                w-full
                sm:w-[calc(50%-12px)]
                lg:w-[calc(33.333%-16px)]
              "
            >
              <div className="w-full overflow-hidden">
                <img
                  src={topics.image}
                  alt={topics.SubHeading}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {topics.points?.map((point, i) => (
                  <span
                    key={i}
                    className="bg-[#D9D9D9] px-2 py-2 text-[12px] font-DM-Sans"
                  >
                    {point}
                  </span>
                ))}
              </div>

              <h2 className="
                max-w-[292px] text-[20px] leading-6.5
                font-DM-Sans text-[#0D0F12] cursor-pointer
              ">
                {topics.SubHeading}
              </h2>

            </div>
          ))}
        </div>

      </div>

              {/* --- One Page To NExt Page Section --- */}
      <div className="py-10 flex flex-col md:gap-0 gap-y-4  sm:flex-row md:items-center justify-between font-DM-Sans">
        <div className="flex items-center gap-2">
         
          {/* Page Buttons */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => paginate(num)}
              className={`w-10 h-10 flex items-center justify-center text-sm  transition-all
                ${currentPage === num ? "bg-[#7833FE] text-white" : "bg-[#EEEDE9] text-[#0D0F12] hover:bg-gray-300"}`}
            >
              {num}
            </button>
          ))}
          
          {totalPages > 4 && <div className="w-10 h-10 flex items-center justify-center bg-[#EEEDE9]">...</div>}
        </div>

        <div className="text-[#0D0F12] text-sm  font-DM-Sans ">
          Showing <span className="">{String(indexOfFirstPost + 1).padStart(2, '0')} – {String(Math.min(indexOfLastPost, sortedPosts.length)).padStart(2, '0')}</span> of <span className="font-DM-Sans">{sortedPosts.length}</span> results
        </div>
      </div>


    {/* BACK TO TOP BUTTON (PURPLE THEME) */}
<button
  onClick={scrollToTop}
  className={`fixed bottom-10 left-5 md:left-7 z-[100] transition-all duration-300 flex items-center justify-center
    ${showButton ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-10 invisible"}`}
>
  {/* Yahan bg-[#7833FE] wahi purple hai jo aapke search button ka hai */}
  <div className="w-[55px] h-[55px] rounded-full flex items-center justify-center bg-[#7833FE] 
                  shadow-[0_0_20px_rgba(120,51,254,0.4)]  
                  ">
      
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Upper Arrow */}
          <path 
            d="M6 13L12 7L18 13" 
            stroke="white" 
            strokeWidth="2" 
         
          />
          {/* Lower Arrow */}
          <path 
            d="M6 19L12 13L18 19" 
            stroke="white" 
            strokeWidth="2" 
             
          />
      </svg>
  </div>
</button>



      
    </div>
    </section>
  );
};

export default BlogPost;
