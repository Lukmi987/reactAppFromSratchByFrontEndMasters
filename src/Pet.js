import React from "react";


// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h2", {}, props.name),
//       React.createElement("h3", {}, props.animal),
//       React.createElement("h4", {}, props.breed),
//     ]);
//   };

// export default Pet;

// the same thing as above, in reality we are writing JS here that imitates markup
// The browser does not speak JSX engine, it expetcs html,
// we have babel, parcel and so on to transpile it and output result above
const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{animal}</h3>
      <h3>{breed}</h3>
    </div>
  );
};

export default Pet;
