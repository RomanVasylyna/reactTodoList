import React from 'react'

const Task = ({ task }) => {
    return (
        <div className="single-task active">

            <div className="task-info">
            <h3>{task.text}</h3><button>x</button>
            </div>
            
            <p>{task.date}</p>

        </div>
    )
}

export default Task
