import React from "react";
import html from "../icons/HTML.png"
import css from "../icons/Css.jpeg"
import javascript from "../icons/javascripts.png"
import react from "../icons/React.png"


function Skills(){
    return(
        <div name="skills" className=" w-full md:h-screen bg-[#0a192f] text-gray-300 pt-[100px] " >
             <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full ">
                 <div>
                     <p className="text-4xl font-bold border-b-4 inline border-gray-300 ">Skills</p>
                     <p className="py-4 ">These are the technologies i have worked with.</p>
                 </div>
              
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-center gap-5 py-8">
                  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      <img src= {html} alt="" className="w-20 mx-auto" />
                      <p className="py-4 font-bold">HTML</p>
                 </div>
                 <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      <img src= {css} alt="" className="w-20 mx-auto" />
                      <p className="py-4 font-bold">CSS</p>
                 </div>
                 <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      <img src= {javascript} alt="" className="w-20 mx-auto" />
                      <p className="py-4 font-bold">JAVASCRIPT</p>
                 </div>
                 <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                      <img src= {react} alt="" className="w-20 mx-auto" />
                      <p className="py-4 font-bold">REACT JS</p>
                 </div>
                 
                

              </div>

             </div>
           

             </div>

        
    )
}

export default Skills