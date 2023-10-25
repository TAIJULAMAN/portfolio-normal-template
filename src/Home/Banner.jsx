
import Typical from "react-typical";
import banner from "../assets/Images/aman.png";
import myFile from "../assets/cv/aman's cv.pdf";
import './Banner.css'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
          <div id="home">
       <div className="grid grid-cols-1  lg:grid-cols-2 md:grid-cols-2  pt-8">
         <div className="pl-8 order-last lg:order-1">
           <div className="some-text ">
             <h2 className="text-3xl lg:text-5xl py-4 font-two  ">
               Hi, I am <br /> <span style={{ color: "#ff014f" }}>Md.Shah Aman</span>
             </h2>

             <h2 className=" text-3xl lg:text-4xl  font-bold py-4">
               <span className="pr-4">A</span> 
               <Typical
                 className=" text-3xl lg:text-4xl  font-bold"
                 steps={[
                   "Mern Stack Developer.",
                   4000,
                   "Front End Developer.",
                   4000,
                   "Full Stack Developer.",
                   4000,
                   "Back End Developer.",
                   4000,
                   "Programmer.",
                   3000,
                 ]}
                 loop={Infinity}
                 wrapper="b"
               />
             </h2>
             <p className="text-xl">
               My main goal is to discover something new and move forward by
               solving problems. The new technology inspires me to learn
               something new by jumping on it to discover.
             </p>
           </div>

           <button className="px-6 py-3 rounded-lg shadow-lg mt-4 bg-purple-700">
             <a
               href={myFile}
               download
               target="_blank"
               rel="noreferrer"
             >
               Download Resume
             </a>
           </button>

           <div className="mt-8">
             <div>
               <p className="uppercase text-md  text-gray-400">
                 Find Me Here
               </p>
             </div>
             <div className="flex mt-2">
               <div className="m-1 px-6 py-4 custom-bg hover:bg-black rounded-lg shadow-xl">
                 <a
                   href="https://www.linkedin.com/in/shahamanpatwary/"
                   target="_blank"
                   rel="noreferrer"
                 >
                 
                   <FaLinkedin></FaLinkedin>
                 </a>
               </div>

               <div className="m-1 px-6 py-4 custom-bg hover:bg-black rounded-lg shadow-xl">
                 <a
                   href="https://www.facebook.com/taijulamanbsl/"
                   target="_blank"
                   rel="noreferrer"
                 >
                   <FaFacebook></FaFacebook>
                 </a>
               </div>
               <div className="m-1 px-6 py-4 custom-bg hover:bg-black rounded-lg shadow-xl">
                 <a
                   href="https://github.com/TAIJULAMAN"
                   target="_blank"
                   rel="noreferrer"
                 >
                 <FaGithub></FaGithub>
                 </a>
               </div>
             </div>
           </div>
         </div>
         <div className="flex justify-center order-1">
           <div className="mt-2 flex items-center">
           <div className=" inner-shadow rounded-full p-3 headerImage">
             <img
               className=" outer-shadow-0  rounded-full "
               src={banner}
               alt=""
               style={{
                 width: "280px",
               }}
             />
           </div>
           </div>
         </div>
       </div>
     </div>
    );
};

export default Banner;


// import React from "react";
// import Typical from "react-typical";
// import banner from "../../../images/banner.png";
// import myFile from "../../../images/Resume_of_MD_MONIRUZZAMAN.pdf";
// import './Banner.css'

// const Banner = () => {
//   return (
//     <div id="home">
//       <div className="grid grid-cols-1  lg:grid-cols-2 md:grid-cols-2  pt-8">
//         <div className="pl-8 order-last lg:order-1">
//           <div className="some-text ">
//             <h4 className="text-xl pt-16 ">Welcome To My World</h4>
//             <h2 className="text-3xl lg:text-5xl py-4 font-two  ">
//               Hi, I'm <br /> <span style={{ color: "#ff014f" }}>Md. Moniruzzaman</span>
//             </h2>

//             <h2 className=" text-3xl lg:text-4xl  font-bold py-4">
//               <span className="pr-4">A</span> 
//               <Typical
//                 className=" text-3xl lg:text-4xl  font-bold"
//                 steps={[
//                   "Mern Stack Developer.",
//                   4000,
//                   "Front End Developer.",
//                   4000,
//                   "Full Stack Developer.",
//                   4000,
//                   "Back End Developer.",
//                   4000,
//                   "Programmer.",
//                   3000,
//                 ]}
//                 loop={Infinity}
//                 wrapper="b"
//               />
//             </h2>
//             <p className="text-xl">
//               My main goal is to discover something new and move forward by
//               solving problems. The new technology inspires me to learn
//               something new by jumping on it to discover.
//             </p>
//           </div>

//           <button className="px-6 py-3 rounded-lg shadow-lg mt-4 bg-purple-700">
//             <a
//               href={myFile}
//               download
//               target="_blank"
//               rel="noreferrer"
//             >
//               Download Resume
//             </a>
//           </button>

//           <div className="mt-8">
//             <div>
//               <p className="uppercase text-md  text-gray-400">
//                 Find Me Here
//               </p>
//             </div>
//             <div className="flex mt-2">
//               <div className="m-1 px-6 py-4 custom-bg hover:bg-black rounded-lg shadow-xl">
//                 <a
//                   href="https://www.linkedin.com/in/mdmoniruzzamanbappy/"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//               </div>

//               <div className="m-1 px-6 py-4 custom-bg hover:bg-black rounded-lg shadow-xl">
//                 <a
//                   href="https://www.facebook.com/moniruzzamanbappymd/"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <i class="fa-brands fa-facebook"></i>
//                 </a>
//               </div>
//               <div className="m-1 px-6 py-4 custom-bg hover:bg-black rounded-lg shadow-xl">
//                 <a
//                   href="https://github.com/MoniruzzamanBappy"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                  <i class="fa-brands fa-github"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center order-1">
//           <div className="mt-2 flex items-center">
//           <div className=" inner-shadow rounded-full p-3 headerImage">
//             <img
//               className=" outer-shadow-0  rounded-full "
//               src={banner}
//               alt=""
//               style={{
//                 width: "280px",
//               }}
//             />
//           </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
