import React, { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import { FaSearch, FaRegMoon, FaPlus } from 'react-icons/fa';
import TaskComp from './Components/TaskComp';
import NewNote from './Components/NewNote';

function App() {
  const [showbox, setShowBox] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState([]);
  const [, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const next = !prev;
      document.body.classList.toggle('dark', next);
      return next;
    });
  };

  const addTask = (text) => {
    if (text.trim() === "") return;
    const newTask = { id: Date.now(), text: text, completed: false };
    setTasks([...tasks, newTask]);
    setShowBox(false);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.text.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === 'completed') return matchesSearch && task.completed;
    if (filter === 'incomplete') return matchesSearch && !task.completed;
    return matchesSearch;
  });

  return (
    <div className='App header'>
      <ReactMarkdown># TO DO LIST</ReactMarkdown>

      <div className='searchbar'>
        <div className="top-row">
          <select id='filterselect' value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>

          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              id="searchInput"
              placeholder='search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="moon-box">
            <button className='toggle ui-color' onClick={toggleDarkMode}>
              <FaRegMoon className="moon-icon" />
            </button>
          </div>
        </div>

        <div>
          <TaskComp
            tasks={filteredTasks}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </div>
      </div>

      <button className="add-button" onClick={() => setShowBox(prev => !prev)}>
        <FaPlus />
      </button>

      {showbox && (
        <NewNote
          onSave={addTask}
          onCancel={() => setShowBox(false)}
        />
      )}
    </div>
  );
}

export default App;
