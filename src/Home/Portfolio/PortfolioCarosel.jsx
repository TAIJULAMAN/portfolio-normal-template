// import React from 'react';
// import "./PortfolioDetails.css"


const PortfolioCarosel = ({item}) => {
    const {img, type} = item;
    return (
        <div className="person">
           <img src={img} alt="" className="person-pic"/>
           <div className="person-info">
               <h2>{type}</h2>
           </div>
       </div>
    );
};

export default PortfolioCarosel;



// import React from 'react';
// import "./PortfolioDetails.css"

// const PortfolioCarosel = ({item}) => {
//     const {img, type} = item;
//     return (
//         <div class="person">
//         <img src={img} alt="" class="person-pic"/>
//         <div class="person-info">
//             <h2>{type}</h2>
//         </div>
//     </div>
//     );
// };

// export default PortfolioCarosel;