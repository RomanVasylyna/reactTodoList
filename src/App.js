import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function App() {

  // Getting tasks
  const [tasks, setTasks] = useState([]);

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
      <Header />
      <AddTask />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
