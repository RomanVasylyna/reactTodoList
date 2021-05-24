import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function App() {

  // Getting tasks
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(true);

  // Open/Close Form
  const toggleForm = () => {
    setShowForm(!showForm)
  }

  // Add Task
  const addTask = newTask => {
    setTasks([...tasks, newTask]);
  }

  // Upon Doubleclick set reminder on/off
  const toggleReminder = id => {
  setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder } : task));
  }

  // Remove Task
  const removeTask = id => {
  setTasks(tasks.filter(task => task.id !== id));
  }

  useEffect(() => {

    setTasks([{
      id: 1,
      text: "Get pill from Corona",
      date: "Tuesday",
      reminder: true,
    },

    {
      id: 2,
      text: "Go To Gym",
      date: "Monday",
      reminder: false,
    },

    {
      id: 3,
      text: "Play Poker",
      date: "Saturday",
      reminder: true,
    },

    ]);

  }, []);

  return (
    <div className="App">

      {/* Header Component */}
      <Header showForm={ showForm }
        onToggleForm={ toggleForm } />

      {/* Toggle Form That Adds Tasks */}
      { showForm ? <AddTask passObj={ addTask } /> : ''}

      {/* Component that Displays Tasks */}

      { tasks.length ?
      <Tasks
      tasks={ tasks }
      onToggle={ toggleReminder }
      onDelete={ removeTask } />
      :
      'Currently there are no tasks...'
      }

    </div>
  );
}

export default App;
