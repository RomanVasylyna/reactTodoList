import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, onToggle, onDelete }) => {
    return (
        <>
        { tasks.map( (task, index) =>
        <Task
        task={ task }
        key={ index }
        onToggle={ onToggle }
        onDelete={ onDelete }
        />) }
        </>
    )
}

export default Tasks;
