import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';

function App() {

  // Getting tasks
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask />
    </div>
  );
}

export default App;
