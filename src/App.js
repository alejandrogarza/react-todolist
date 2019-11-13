import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  state = {
    input: '',
    tasks: [],
  }

  addTask = event => {
    event.preventDefault();
    const value = event.target.querySelector('input').value
    this.setState({
      input: value,
      tasks: [...this.state.tasks, {title: value, doneTask: false}]
    });
    document.forms[0].reset();
  };

  doneTask = index => {
    const { tasks } = this.state;
    const selected = tasks[index];
    this.setState({
      tasks: [
        ...tasks.slice(0, index), 
        Object.assign(selected, {doneTask: !selected.doneTask}),
        ...tasks.slice(index + 1)
      ]
    })
  };

  deleteTask = (event, index) => {
      event.stopPropagation();
      const newTasksState = [...this.state.tasks]
      newTasksState.splice(index, 1);
      this.setState({ tasks: newTasksState});
  };

  componentDidUpdate() {
    console.log(this.state.tasks);
  };

  render() {
    const {tasks} = this.state;
    const {addTask, deleteTask, doneTask} = this;

    return (
      <div className="todo-app">
        <TodoForm addTask={addTask} />
        <TodoList 
        tasks={tasks}
        deleteTask={deleteTask}
        doneTask={doneTask} />
      </div>
    );
  };
}

export default App;
