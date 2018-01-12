import React, { Component } from 'react';
import Task from './Task.js';
import AddNewButton from './AddNewButton.js';
import NewTaskTemplate from './NewTaskTemplate.js';

class TaskList extends Component {
    state = { items: [], newTaskShown: false }

    constructor() {
        super();

        let taskList = [];
        taskList.push({ title: 'Title1', description: 'Description1', isDone: true });
        taskList.push({ title: 'Title2', description: 'Description2', isDone: false });
        taskList.push({ title: 'Title3', description: 'Looooooooooooooooooooooong descriptipon here', isDone: true });
        this.state = { items: taskList };
    }

    addNewButtonClick = () => {
        this.setState({ newTaskShown: true });
    }

    submitNewTask = (title, description) => {
        // TODO: can this be simplified by destructuring?
        const newTask = { title: title, description: description, isDone: false };

        this.setState(previousState => ({
            items: [ ...previousState.items, newTask ],
            newTaskShown: false
        }));
    }

    taskChanged = (title) => {
        debugger;
        const task = this.state.items.find(x => x.title === title);
        task.isDone = !task.isDone;
    }

    compare = (a,b) =>{
        if (a.isDone && !b.isDone)
            return 1
        if (!a.isDone && b.isDone)
            return -1
        return 0;
    }

    render() {
        // TODO: whats better to pass a whole object or each separate parameter?
        const items = this.state.items.sort(this.compare).map((x) =>
            <Task title={ x.title } description={ x.description } isDone={ x.isDone } key={ x.title } onTaskChanged={this.taskChanged}/>
        );

        return (
            <div>
                { items }
                <AddNewButton handleClick={ this.addNewButtonClick } />
                { this.state.newTaskShown ? <NewTaskTemplate saveInput={ this.submitNewTask } /> : null }
            </div>
        );
    }
}

export default TaskList;
