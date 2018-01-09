import React, { Component } from 'react';
import './Task.css'

class Task extends Component {
    state = {};

    componentDidMount = () => {
        this.setState({isDone: this.props.isDone});
    }

    // handleChange = event => {
    //     this.setState({isDone: event.target.value});
    // }
  //spomechange
    handleChange = event => {
        this.setState({isDone: !this.state.isDone});
    }

   render() {
    return (
      <div className='Task'>
          <p>Task title: {this.props.title} </p>
          <p>Task description: {this.props.description}, 
            IsDone: {this.state.isDone ? '+' : '-'} </p>
            <form>
                <label> Is done </label>
                <input
                    type="checkbox"
                    checked={this.state.isDone}
                    onChange={this.handleChange} />
            </form>
      </div>
    );
  }
}

Task.defaultProps ={
    title: 'Default title',
    description: 'Default description',
    isDone: false
}

export default Task;
