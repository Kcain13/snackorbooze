// import React, { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
// import "./App.css";
// import HomePage from "./pages/HomePage";
// import SnackOrBoozeApi from "./utils/Api";
// import NavBar from "./components/NavBar";
// import { Route, Switch } from "react-router-dom";
// import Menu from "./components/Menu";
// import MenuItem from "./components/MenuItem";
// import AddItemPage from "./pages/AddItemPage";
// import NotFoundPage from "./pages/NotFoundPage";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [snacks, setSnacks] = useState([]);
//   const [drinks, setDrinks] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         let snacks = await SnackOrBoozeApi.getItems("snacks");
//         let drinks = await SnackOrBoozeApi.getItems("drinks");
//         setSnacks(snacks);
//         setDrinks(drinks);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <p>Loading &hellip;</p>;
//   }

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar />
//         <main>
//           <Switch>
//             <Route exact path="/">
//               <HomePage snacks={snacks} drinks={drinks} />
//             </Route>
//             <Route exact path="/snacks">
//               <Menu items={snacks} title="Snacks" />
//             </Route>
//             <Route exact path="/drinks">
//               <Menu items={drinks} title="Drinks" />
//             </Route>
//             <Route path="/snacks/:id">
//               <MenuItem items={snacks} cantFind="/snacks" />
//             </Route>
//             <Route path="/drinks/:id">
//               <MenuItem items={drinks} cantFind="/drinks" />
//             </Route>
//             <Route exact path="/add-item">
//               <AddItemPage />
//             </Route>
//             <Route>
//               <NotFoundPage />
//             </Route>
//           </Switch>
//         </main>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddItemPage from './pages/AddItemPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/add" component={AddItemPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
