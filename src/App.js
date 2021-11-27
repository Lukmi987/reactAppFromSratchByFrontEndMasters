import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import Pet from "./Pet";
import SearchParams from "./SearchParams";


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
      <SearchParams />
      <Pet name="Luna" animal="mars" breed="Hav" />
      <Pet name="JT" animal="dog" breed="Cockta" />
      <Pet name="FK" animal="bird" breed="Tree" />
    </div>
  );
};

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));
