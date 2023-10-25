
import Services from './Services';

const Featured = () => {
    return (
        <div id="features" className="mx-8 my-16 transition ease-in duration-700">
           {/* <p className="text-lg " style={{ color: "#ff014f" }}>
             Features
           </p> */}
           <h2 className="text-5xl font-two mt-4">What I do</h2>
           <Services></Services>
         </div>
    );
};

export default Featured;



// import React from "react";
// import Services from "./services/Services";

// const Featured = () => {
//   return (
//     <div id="features" className="mx-8 my-16 transition ease-in duration-700">
//       <p className="text-lg " style={{ color: "#ff014f" }}>
//         Features
//       </p>
//       <h2 className="text-5xl font-two mt-4">What I do</h2>
//       <Services />
//     </div>
//   );
// };

// export default Featured;