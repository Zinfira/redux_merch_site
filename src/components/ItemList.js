import React from "react";
import Item from "./Item";

const masterItemList = [
  {
    name:"Cool Hat",
    description:"nice hoodie",
    quantity:"2" 
  },
  {
    name:"Sweet Sweater",
    description:"soft sweater",
    quantity:"5"
  }
];


function ItemList() {
  return (
    <React.Fragment>
     {masterItemList.map((item,index) =>
     <Item name = {item.name}
      description={item.description}
      quantity={item.quantity}
      key={index}/>
     )}
    </React.Fragment>
  );
}

export default ItemList;
