import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditItemForm (props) {
  const { item } = props;

 function handleEditItemFormSubmission(event) {
  event.preventDefault();
  props.onEditItem({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: item.id});

  return (
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler={handleEditItemFormSubmission}
        buttonText="Update Item" />
    </React.Fragment>
  );
}
EditItemForm.propTypes = {
  onEditItem: PropTypes.func
 };
}
export default EditItemForm;