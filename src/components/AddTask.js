import React, { useState } from 'react';

const AddTask = ({ passObj }) => {

    // Setting up default values
    const [ text, setText ] = useState('');
    const [ date, setDate ] = useState('');
    const [ reminder, setReminder ] = useState(false);

    const onSubmit = e => {

        // Preventing form from being submitted
        e.preventDefault();

        // If task's text input is empty immediately stop the function
        if(!text) {
        alert('Task\'s name can\'t be empty!');
        return;
        }

        // Passing newly formed object to a parent
        const id = Math.floor(Math.random() * 10000) + 1;
        passObj({ id, text, date, reminder });

        // Clearing Data
        setText('');
        setDate('');
        setReminder(false);
    }


    return (
        <div className="add-task">
            <form onSubmit={ onSubmit }>

                <label>Task</label>
                <input
                type="text"
                value={ text }
                placeholder="Add Task..."
                onChange={ e => setText(e.target.value) }
                ></input>

                <label>Date</label>
                <input
                type="text"
                value={ date }
                placeholder="Set Date..."
                onChange={ e => setDate(e.target.value) }
                ></input>

                <label>Set Reminder</label>
                <input
                type="checkbox"
                checked={ reminder }
                onChange={ e => setReminder(e.currentTarget.checked) }>
                </input>

                <button type="submit">Save Task</button>

            </form>
        </div>
    )
}

export default AddTask
