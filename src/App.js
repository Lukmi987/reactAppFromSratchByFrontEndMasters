import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

// const App = () => {
//   console.log('v app js');
//   return React.createElement("div", {},[
//     React.createElement("h1", {}, "Adopt Me!!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "dog",
//       breed: "havaniis",
//     }),
//     React.createElement(Pet, {
//       name: "Peeper",
//       animal: "Bird",
//       breed: "havaniis",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Crodile",
//       breed: "havaniis",
//     }),
//   ]);
// }

const App = () => {
  console.log("v app js");
  return (
    <div>
      <Router>
        {/* Switch solves the problem with displaying more components which match the route even partialy */}
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>

        {/* <Pet name="Luna" animal="mars" breed="Hav" />  */}
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
