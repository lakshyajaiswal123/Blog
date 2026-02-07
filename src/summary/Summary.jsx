// import React from "react";
// import { Summarydata } from "./summarydata/Summary";

// export default function Summary() {
//   return (
//     <div >

//       {/* Conatiner */}
//       <div className="max-w-[771px] md:p-0 p-3 ">

//         {/* Top Heading */}
//         <div className="font-DM-Sans font-bold bg-[#7833FE] text-white w-fit px-3 py-1 text-sm">
//           Summary
//         </div>

//         {/* Summary-Points-section */}
//         {Summarydata.map((item, index) => (
//           <div key={index} className="bg-[#EEEDE9] p-6 md:p-8">
            
//             {/* Summary-Points */}
//             <ul
//               className=" flex flex-col gap-y-3
//               list-disc
//               list-outside
//               md:pl-4 "
//             >
//               {item.points.map((point, i) => (
//                 <li
//                   key={i}
//                   className=" 
//                     text-[#0D0F12]
//                      max-w-[587px]
//                     font-DM-Sans
//                    text-[12px] md:text-[18px]
//                   leading-tight md:leading-[25px]
                    
//                   "
//                 >
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }
