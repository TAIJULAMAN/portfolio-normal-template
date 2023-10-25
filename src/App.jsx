
import './App.css'

function App() {


  return (

  )
}

export default App



// import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PortfolioDetails from "./pages/Home/Portfolio/PortfolioDetails/PortfolioDetails";
// import HomeItems from "./pages/Home/HomeItems/HomeItems";
// import Navigation from "./pages/Shared/navigation/Navigation";
// import About from "./pages/Home/About/About";
// import Blog from "./pages/Home/Blog/Blog";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// import { useEffect, useState } from "react";

// function App() {
//   const [loading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 4000);
//   }, []);

//   return (
//     <div className="App">
//       <div className="bg-[#171C28] ">
//         {loading ? (
//           <div className="flex  h-screen justify-center items-center">
//             <ClimbingBoxLoader loading={loading} color={`#1986b1`} size={20} />
//           </div>
//         ) : (
//           <Router>
//             <Navigation />
//             <Switch>
//               <Route exact path="/">
//                 <HomeItems />
//               </Route>
//               <Route path="/home">
//                 <HomeItems />
//               </Route>
//               <Route path="/about">
//                 <About />
//               </Route>
//               <Route path="/blogs">
//                 <Blog />
//               </Route>
//               <Route path="/portfolio/:nameId">
//                 <PortfolioDetails />
//               </Route>
//             </Switch>
//           </Router>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
