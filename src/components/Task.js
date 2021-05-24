import React from 'react';

const Task = ({ task, onToggle, onDelete }) => {

    return (
        <div
        className={ task.reminder ? 'single-task active' : 'single-task'}
        onDoubleClick={ () => onToggle(task.id) }
        >

            <div className="task-info">
                <h3>{task.text}</h3>
                <button onClick={ () => onDelete(task.id) }>x</button>
            </div>

            <p>{task.date}</p>

        </div>
    )
}

export default Task
