import React from "react";
import  ReactDOM  from "react-dom";
import Pet from "./Pet";

const App = () => {
  console.log('v app js');
  return React.createElement("div", {},[ 
    React.createElement("h1", {}, "Adopt Me!!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "havaniis",
    }),
    React.createElement(Pet, {
      name: "Peeper",
      animal: "Bird",
      breed: "havaniis",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Crodile",
      breed: "havaniis",
    }),
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
