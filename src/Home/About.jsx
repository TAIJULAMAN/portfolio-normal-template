

const About = () => {
    return (
         <>
      <h2 className="text-center text-4xl text-red-500  my-8">
        About Me
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
        <div className="flex justify-center">
          <img
            className=" mx-2 md:mx-4 h-screen"
            src="https://i.ibb.co/sys4gPL/bappy.jpg"
            alt=""
          />
        </div>
        <div className="my-8  mx-8 justify-center  flex items-center">
          <div className="">
            <h2 className="text-2xl font-bold">
              Name : Md. Moniruzzaman
            </h2>
            <h4 className="my-4">
              Title : <span className="  font-bold">Junior web developer</span>
            </h4>
            <p className="my-2 w-4/6 md:w-full lg:w-full sm:w-5/6 ">
              About : My main goal is to discover something new and move forward
              by solving problems. The new technology inspires me to learn
              something new by jumping on it to discover.
            </p>
            <p className="font-semibold mb-4">
              Email : mdmoniruzzamanbappy@gmail.com
            </p>
            <h3>Services I provide : </h3>
            <div className="font-bold text-lg text-red-400">
              <p>Web development</p>
              <p>Problem Solving</p>
            </div>
            <br />
            <div>
              <h2>
                Details about{" "}
                <strong className="text-red-500">Md. Moniruzzaman</strong>
              </h2>
              <br />
              <p>
                <strong>Md. Moniruzzaman</strong> was born in 1996 in
                Dhaka. He has completed B. Sc in 2019 and web development course
                in 2022. He likes to code a lot when get free times. Traveling
                is his best hobby and he loves to explore a lot.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default About;


// import React from "react";

// const About = () => {
//   return (
//     <>
//       <h2 className="text-center text-4xl text-red-500  my-8">
//         About Me
//       </h2>
//       <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
//         <div className="flex justify-center">
//           <img
//             className=" mx-2 md:mx-4 h-screen"
//             src="https://i.ibb.co/sys4gPL/bappy.jpg"
//             alt=""
//           />
//         </div>
//         <div className="my-8  mx-8 justify-center  flex items-center">
//           <div className="">
//             <h2 className="text-2xl font-bold">
//               Name : Md. Moniruzzaman
//             </h2>
//             <h4 className="my-4">
//               Title : <span className="  font-bold">Junior web developer</span>
//             </h4>
//             <p className="my-2 w-4/6 md:w-full lg:w-full sm:w-5/6 ">
//               About : My main goal is to discover something new and move forward
//               by solving problems. The new technology inspires me to learn
//               something new by jumping on it to discover.
//             </p>
//             <p className="font-semibold mb-4">
//               Email : mdmoniruzzamanbappy@gmail.com
//             </p>
//             <h3>Services I provide : </h3>
//             <div className="font-bold text-lg text-red-400">
//               <p>Web development</p>
//               <p>Problem Solving</p>
//             </div>
//             <br />
//             <div>
//               <h2>
//                 Details about{" "}
//                 <strong className="text-red-500">Md. Moniruzzaman</strong>
//               </h2>
//               <br />
//               <p>
//                 <strong>Md. Moniruzzaman</strong> was born in 1996 in
//                 Dhaka. He has completed B. Sc in 2019 and web development course
//                 in 2022. He likes to code a lot when get free times. Traveling
//                 is his best hobby and he loves to explore a lot.{" "}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;
