import { useEffect, useState } from "react";
import './portfolio.css'

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import SinglePortfolio from "./SinglePortfolio";
// ..
AOS.init();

const Porttfolio = () => {

  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => setPortfolios(data));
  }, []);
  // console.log(portfolios.img1);

    return (
        <div className="grid justify-items-center mx-auto my-12 text-center ">
           <p id="portfolio" className="text-red-600  text-xl mb-5 ">
             Visit my portfolio and feedback to improve
           </p>
           <h2 className="text-5xl mb-5 font-bold text-gray-300">My Portfolio</h2>
           <div
           data-aos="zoom-in" data-aos-duration="2000"
           className="grid mx-auto gap-16 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
             {portfolios.map((portfolio) => (
               <SinglePortfolio
                 key={portfolio.id}
                 portfolios={portfolio}
               ></SinglePortfolio>
             ))}
           </div>
         </div>
    );
};

export default Porttfolio;

