import React from "react";
import image7 from "../Images/Mylogo.jpg"
import img1 from "../Images/Certificate.png"
import img2 from "../Images/img4.jpg"
 
function Work () {
    return(
   <div name="work" className="w-full h-[1100px] md:h-screen bg-[#0a192f] text-gray-300">
       <div className="max-w-[1000px] mx-auto p-4 justify-center flex flex-col w-full h-full">
           <div className="pb-8">
               <p className="inline border-b-4 text-4xl border-gray-300">Work</p>
               <p className="py-6 text-2xl">// check out some of my recent works</p>
           </div>
           {/* container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
             {/* grid item */}
              <div style={{backgroundImage:`url(${image7})`}} className="shadow-lg bg-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div  ">


                {/* hover efects */}

        <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold tracking-wider">
                React JS Application
                    </span>
                <div className="pt-8 text-center">
                    <a href="/"> 
                     <button className="bg-white text-gray-700 font-bold px-4 py-3 m-2 rounded-md text-center">CODE</button>
                     </a>
                     <a href="/"> 
                     <button className="bg-white text-gray-700 font-bold px-4 py-3 m-2 rounded-md text-center">DEMO</button>
                     </a>
            </div>
        </div>
</div>

<div style={{backgroundImage:`url(${img1})`}} className="shadow-lg bg-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div  ">


{/* hover efects */}

<div className="opacity-0 group-hover:opacity-100">
    <span className="text-2xl font-bold tracking-wider">
React JS Application
    </span>
<div className="pt-8 text-center">
    <a href="/"> 
     <button className="bg-white text-gray-700 font-bold px-4 py-3 m-2 rounded-md text-center">CODE</button>
     </a>
     <a href="/"> 
     <button className="bg-white text-gray-700 font-bold px-4 py-3 m-2 rounded-md text-center">DEMO</button>
     </a>
</div>
</div>
</div>      
               
<div style={{backgroundImage:`url(${img2})`}} className="shadow-lg bg-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div  ">


{/* hover efects */}

<div className="opacity-0 group-hover:opacity-100">
    <span className="text-2xl font-bold tracking-wider">
React JS Application
    </span>
<div className="pt-8 text-center">
    <a href="/"> 
     <button className="bg-white text-gray-700 font-bold px-4 py-3 m-2 rounded-md text-center">CODE</button>
     </a>
     <a href="/"> 
     <button className="bg-white text-gray-700 font-bold px-4 py-3 m-2 rounded-md text-center">DEMO</button>
     </a>
</div>
</div>
</div>



          </div>
       
       
       </div>

   </div>
    )

}

export default Work