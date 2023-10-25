import React from 'react';

const SinglePortfolio = () => {
    return (
        <div>
            
        </div>
    );
};

export default SinglePortfolio;


// import React, { useState } from "react";
// import "../Portfolio.css";
// import PortfolioModal from "../PortfolioModal";

// const SinglePortfolio = ({ portfolio }) => {
//   const { projectImg } = portfolio;
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <div
//         className="img"
//         style={{
//           transition: "background 3s ease",
//           backgroundImage: `url(${projectImg})`,
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <button onClick={() => setOpen(true)} className="btn-visit">
//           Visit
//         </button>
//         <PortfolioModal
//         portfolioData={portfolio}
//         tags={portfolio.tags}
//         Languages={portfolio.Languages}
//         open={open}
//         setOpen={setOpen}
//       />
//       </div>
//     </>
//   );
// };

// export default SinglePortfolio;