import React, { useState } from 'react';

const TodoList = ({tasks, deleteTask, doneTask }) => {
    return (
        <ul className="todo-list">
        {tasks.map((task, index) => (
            <li onClick={ () => { doneTask(index) } } key={index}>
                <button onClick={event => { deleteTask(event, index) }} className="todo-list__remove">X</button>
                <span className="todo-list__label">
                    { task.doneTask
                    ? <strike>{task.title}</strike>
                    : task.title }
                </span>
            </li>
        ))}
    </ul>
    );
}

export default TodoList;