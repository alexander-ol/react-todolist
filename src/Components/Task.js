import React, { Component } from 'react';
import './Task.css'

class Task extends Component {
    state = {};

    componentDidMount = () => {
        //TODO: we dont  need this state actually, can use state in tasklist
        this.setState({ isDone: this.props.isDone });
    }

    // handleChange = event => {
    //     this.setState({isDone: event.target.value});
    // }

    handleClick = event => {
        this.setState({ isDone: !this.state.isDone });
        this.props.onTaskChanged(this.props.title);
    }

    render() {
        return (
            <div className='Task' onClick={ this.handleClick }>
                <p>"{ this.props.title }" </p>
                <form>
                    <label> Is done </label>
                    <input
                        type="checkbox"
                        checked={ this.state.isDone }
                        onChange={ this.handleClick } />
                </form>
                <p>Description: { this.props.description }</p>
            </div>
        );
    }
}

Task.defaultProps = {
    title: 'Default title',
    description: 'Default description',
    isDone: false
}

export default Task;
