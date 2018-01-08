import React, { Component } from 'react';
import Task from './Task.js';

class TaskList extends Component {
  state = {items: []}

  constructor() {
    super();
    
    let taskList = [];
    taskList.push({title: 'Title1', description: 'Description1', done: false});
    taskList.push({title: 'Title2', description: 'Description2', done: false});
    taskList.push({title: 'Title3', description: 'Looooooooooooooooooooooong descriptipon here', done: true});
    this.state = {items: taskList};
  }

  render() {
    const items = this.state.items.map((x) => 
      <Task title={x.title} description={x.description} isDone={x.done} key={x.title}/>
    );

    return (
      <div>
        {items}
      </div>
    );
  }
}

export default TaskList;
