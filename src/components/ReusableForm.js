import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Product Name' />
        <br />
        <br />
        <textarea
          name='description'
          placeholder='Item Description' />
        <br />
        <br />
        <input
          type='number'
          name='quantity'
          placeholder='quantity' />
        <br />
        <button type='submit'>Create!</button>
      </form>
    </React.Fragment>
  );
}
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;