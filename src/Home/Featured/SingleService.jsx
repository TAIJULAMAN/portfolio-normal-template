import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const SingleService = ({ service }) => {
  const {
    name,
    responsibility1,
    responsibility2,
    responsibility3,
    responsibility4,
  } = service;
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="py-16 px-12 text-gray-400 border border-gray-900 hover:bg-black shadow-xl rounded-lg"
    >
      <img
        className="w-8 "
        src="https://i.ibb.co/022y4yD/web-development.png"
        alt=""
      />

      <h2 className="text-2xl font-bold font-two pt-4">{name}</h2>
      <ul className="text-left list-disc my-5">
        <li>{responsibility1}</li>
        <li>{responsibility2}</li>
        <li>{responsibility3}</li>
        <li>{responsibility4}</li>
      </ul>
    </div>
  );
};

export default SingleService;

// import React from "react";
// //added
// import AOS from "aos";
// import "aos/dist/aos.css"; // You can also use <link> for styles
// // ..
// AOS.init();

// const SingleService = ({ service }) => {
//   const { name, img, description } = service;
//   return (
//     <div
//       data-aos="zoom-in"
//       data-aos-duration="2000"
//       className="py-16 px-12 text-gray-400 border border-gray-900 hover:bg-black shadow-xl rounded-lg"
//     >
//       <img className="w-8 " src={img} alt="" />

//       <h2 className="text-2xl font-bold font-two pt-4">{name}</h2>
//       <p className="text-lg font-one mt-4">{description}</p>
//     </div>
//   );
// };

// export default SingleService;
