import    { useState } from "react";
import "./Portfolio.css";
import PortfolioModals from "./PortfolioModals";


const SinglePortfolio = ({ portfolios }) => {
      console.log(portfolios)
  const [open, setOpen] = useState(false);
    return (
        <>
             <div
               className="img"
               style={{
                 transition: "background 3s ease",
                 backgroundImage: `url(${portfolios.projectImg})`,
                 backgroundRepeat: "no-repeat",
               }}
             >
               <button onClick={() => setOpen(true)} className="btn-visit">
                 Visit
               </button>
               <PortfolioModals
               portfolioData={portfolios}
               tech={portfolios.tech}
               Languages={portfolios.Languages}
               open={open}
               setOpen={setOpen}
             />
             </div>
           </>
    );
};

export default SinglePortfolio;
