import React from 'react'

const AddTask = () => {
    return (
        <div className="add-task">
            <form>
                
                <label>Task</label>
                <input type="text" placeholder="Add Task..."></input>

                <label>Date</label>
                <input type="text" placeholder="Set Date..."></input>

                <label>Set Reminder</label>
                <input type="checkbox"></input>

            </form>
        </div>
    )
}

export default AddTask
