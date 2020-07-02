import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';

class ItemControl extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
    formVisibleOnPage: false,
    masterItemList: [], 
    selectedItem: null,
    editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

handleClick = () => {
  if (this.state.selectedItem != null ){
    this.setState({
      formVisibleOnPage: false,
      selectedItem: null,
      editing:false
    });
  } else {
  this.setState(prevState => ({
    formVisibleOnPage: !prevState.formVisibleOnPage
  }));
 }
}
handleEditClick = () => {
  this.setState({editing: true});
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
 handleEditingItemInList = (itemToEdit) => {
  const editedMasterItemList = this.state.masterItemList
    .filter(item => item.id !== this.state.selectedItem.id)
    .concat(itemToEdit);
  this.setState({
      masterItemList: editedMasterItemList,
      editing: false,
      selectedItem: null
    });
}


render(){
  let currentlyVisibleState = null; 
  let buttonText = null;


  if (this.state.editing) {
    currentlyVisibleState = <EditItemForm 
    item = {this.state.selectedItem}
    onEditItem = {this.handleEditingItemInList} /> 
    buttonText = "Return to item List "
  }
  else if (this.state.selectedItem != null) {
    currentlyVisibleState = <ItemDetail 
    item = {this.state.selectedItem} 
    onClickingDelete = {this.handleDeletingItem}
    onClickingEdit = {this.handleEditClick} /> 
    // passing prop of a selected item to ItemDetail.js
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







