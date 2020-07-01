import React from "react";

function Item() {
  const name = "Tony";
  const name2 = "Chee";
  return (
    <React.Fragment>
      <h3>3a</h3>
      <h3>{name} and {name2}</h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Item