import React, { Component } from 'react';
import propTypes from 'prop-types';

class NewTaskTemplate extends Component {
    state = {};

	saveButtonClick = () => {
		console.log(this.state);
		console.log('this.state.title');
		console.log(this.state.title);
		this.props.saveInput(this.state.title, this.state.description)
	}

	handleInputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	}
	
   render() {
    return (
      <div className='Task'>
		  <input type="text" name='title' placeholder='title' onChange={this.handleInputChange} />
		  <input type="text" name='description' placeholder='description' onChange={this.handleInputChange}/>
		  
	  	<button onClick={this.saveButtonClick}>
			Save
		</button>
		  
      </div>
    );
  }
}

NewTaskTemplate.propTypes ={
    saveInput: propTypes.func.isRequired,
}

export default NewTaskTemplate;
