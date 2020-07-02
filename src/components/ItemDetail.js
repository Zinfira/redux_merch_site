import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickingDelete } = props;

  return(
    <React.Fragment> 
    <h1>Item Details</h1>
    <h3>Item name: {item.name}</h3>
    <p> Description: {item.description}</p>
    <h5>Available quantity: {item.quantity}</h5>
    <button onClick={()=> onClickingDelete(item.id) }>Out of Stock</button> 
    <button onClick={()=> props.onClickingEdit }>Update Item</button> 
    <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;