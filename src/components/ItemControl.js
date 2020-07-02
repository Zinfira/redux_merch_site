import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';


class ItemControl extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
    formVisibleOnPage: false,
    masterItemList: [], 
    selectedItem: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

handleClick = () => {
  if (this.state.selectedItem != null ){
    this.setState({
      formVisibleOnPage: false,
      selectedItem: null
    });
  } else {
  this.setState(prevState => ({
    formVisibleOnPage: !prevState.formVisibleOnPage
  }));
 }
}

handleAddingNewItemToList = (newItem) => {
  const newMasterItemList = this.state.masterItemList.concat(newItem);
  this.setState({
    masterItemList: newMasterItemList,
    formVisibleOnPage: false 
  });
} //newMasterItemList -> Array

handleChangingSelectedItem = (id) => {
  const selectedItem = this.state.masterItemList.filter(item => item.id ===id)[0];
  this.setState({selectedItem: selectedItem});
}  // update item, choosing one item only

 handleDeletingItem = (id) => {
    const newMasterItemList = this.state.masterItemList.filter(item =>  item.id !== id);
    this.setState({
      masterItemList: newMasterItemList,
      selectedItem: null
    });
 }

render(){
  let currentlyVisibleState = null; 
  let buttonText = null;

  if (this.state.selectedItem != null) {
    currentlyVisibleState = <ItemDetail 
    item = {this.state.selectedItem} onClickingDelete = {this.handleDeletingItem} /> // passing prop of a selected item to ItemDetail.js
    buttonText = "Return to Item List"; 
  }
  else if (this.state.formVisibleOnPage) {
    currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/> // passing prop of array to NewItemForm.js
    buttonText = "Return to Item List";
  } else {
    currentlyVisibleState = <ItemList itemList={this.state.masterItemList} 
    onItemSelection={this.handleChangingSelectedItem}/>;
    buttonText = "Add Item";
  } 
  return (
    <React.Fragment>
    {currentlyVisibleState}
    <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  }

}
export default ItemControl;







