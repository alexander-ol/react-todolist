import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddNewButton.css'

// TODO: should be a pure component here
class AddNewButton extends Component {

   render() {
    return (
      <div>
	  	<button className='leftAligned' onClick={this.props.handleClick}>
			Add new
		</button>
      </div>
    );
  }
}

AddNewButton.propTypes ={
    handleClick: PropTypes.func.isRequired
}

export default AddNewButton;
