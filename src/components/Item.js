import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  
  return (
    <React.Fragment>
      <p>Item name: {props.name}</p>
      <p>Item description: {props.description}</p>
      <p>Item quantity: {props.quantity}</p>
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  name:PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Item;