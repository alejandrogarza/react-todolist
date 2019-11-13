import React from 'react';

const TodoForm = ({addTask}) => {
    return (
        <form onSubmit={addTask}>
            <input name="value" type="text" />
            <button type="submit">+</button>
        </form>
    );  
}

export default TodoForm;