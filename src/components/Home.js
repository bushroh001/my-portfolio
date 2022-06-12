import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import {Link} from "react-scroll"

 
function Home ()
{
    return(
        <div name="home" className="w-full h-screen bg-[#0a192f]">
            {/* container */}
         <div className="max-w-[1000px] px-8 mx-auto flex flex-col justify-center w-full h-screen">
             <p className="text-gray-600 text-4xl sm:text-4xl font-bold">Hi, i am </p>
             <h1 className="text-4xl sm:text-7xl font-bold text-gray-100">Bello Muhyideeen</h1>
             <h2 className="text-4xl sm:text-7xl font-bold text-gray-400">i'm a Front-end Developer</h2>
             <p className="text-gray-400 py-4 max-w-[600px] text-2xl ">specialized in developing modern front-end websites and applications. </p>
             
             <div>
                 <button 
                 className=" text-white group border-2 px-4 py-2  
                 my-2 flex items-center hover:bg-slate-600 hover:border-slate-600" >
                   <Link to="work" smooth={true} duration={500} >View work</Link>  
                     <span className="group-hover:rotate-90 duration-300">
                     <HiArrowCircleRight className="ml-3"/>
                     </span>
                      </button>
             </div>
         </div>
        
        </div>
    )
}

export default Home