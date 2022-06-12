import React from "react";

function About () {
    return(
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 pt-[100px]">
            <div className=" flex flex-col justify-center items-center w-full h-full">
             
            <div className="max-w-[1000px] w-full  px-4 grid grid-cols-2 gap-8">
                <div className="sm:text-right pl-2 pb-8 ">
                    <p className="text-4xl border-b-4  border-gray-400 inline">About</p>
                 </div>
                 <div></div>
                 </div>
            
                <div className=" max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
                    <div className="text-4xl sm:text-right font-bold  ">
                        <p>Hi,i am Muhyideen</p>
                        <p >Nice to meet you</p>
                        <p>Please take a look around. </p>
                        
                    </div>

                    <div>
                        <p  className="text-2xl"> i am a 2nd year university student, i aspire to be 
                                           a software Developer and a full-stack web developer,
                                          i am a front-end web developer with three years experience
                                         working with javascript and react-js.
                                       I love learning new things and working with new technologies, 
                                       i enjoy developing modern websites and applications,
                                       i'll  give you the best of my service. 
                        </p>
                    </div>

                </div>
            </div>
            </div>

        
    )

}

export default About