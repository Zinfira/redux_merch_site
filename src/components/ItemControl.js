import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class ItemControl extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = { 
    formVisibleOnPage: false,
    selectedItem: null,
    editing: false
    };
  }

handleClick = () => {
  if (this.state.selectedItem != null ){
    this.setState({
      formVisibleOnPage: false,
      selectedItem: null,
      editing: false
    });
  } else {
  this.setState(prevState => ({
    formVisibleOnPage: !prevState.formVisibleOnPage
  }));
 }
}
handleEditClick = () => {
  console.log("handleEditClick reached!");
  this.setState({editing: true});
}


////////-----
handleAddingNewItemToList = (newItem) => {
  const { dispatch } = this.props;
  const { id, name, description, quantity } = newItem;
  const action = {
    type: 'ADD_ITEM',
    id: id,
    name: name,
    description: description,
    quantity: quantity,
  }
  dispatch(action);
  this.setState({formVisibleOnPage: false});
} 

handleChangingSelectedItem = (id) => {
  const selectedItem = this.props.masterItemList[id];
  this.setState({selectedItem: selectedItem});
} 

handleDeletingItem = (id) => {
  const { dispatch } = this.props;
  const action = {
    type: 'DELETE_ITEM',
    id: id
  }
  dispatch(action);
  this.setState({selectedItem: null});
}

 handleEditingItemInList = (itemToEdit) => {
  const { dispatch } = this.props;
  const { id, name, description, quantity } = itemToEdit;
  const action = {
    type: 'ADD_ITEM',
    id: id,
    name: name,
    description: description,
    quantity: quantity,
  }
  dispatch(action);
  this.setState({
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
    currentlyVisibleState = <ItemList itemList={this.props.masterItemList} 
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

ItemControl.propTypes = {
  masterItemList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterItemList: state
  }
}

ItemControl = connect(mapStateToProps)(ItemControl);

export default ItemControl;







