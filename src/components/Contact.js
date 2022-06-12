import React from "react";


function Contact() {
    return (
        <div name="contact" className="w-full h-[800px] bg-[#0a192f] flex justify-center items-center p-4">
          <form action="https://getform.io/f/facf0053-d35b-452e-ae9f-7837e0c804e3" method="POST"
          className="flex flex-col max-w-[500px] w-full pt-10">
                <div className="pb-4 text-gray-300 " >
                    <p className="text-4xl  font-bold inline border-b-4 border-gray-300" >Contact</p>
                    <p className="  py-4">// submit the form or shoot me an email- bellomuhyideen1000@gmail.com</p>
               </div>

               <input className=" bg-[#ccd6f6] p-2" type="text" placeholder="NAME" name="name"/>
               <input className=" bg-[#ccd6f6] my-4 p-2" type="text" placeholder="EMAIL" name="email"  />
               <textarea className="bg-[#ccd6f6] p-2 " name="message" placeholder="Enter your message" rows="10" />
               <button className="text-white border-2 hover:border-slate-800 bg-slate-800 px-4 py-3 my-8 mx-auto flex items-center">let's collaborate</button>
          </form>
        </div>
    )


}

export default Contact