import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Filter from './Filter';
import SearchBar from './SearchBar';
import './TodoList.css';

function TodoList({ user, token, onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); 
  const [search, setSearch] = useState('');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  };

  // Fetch tasks for the logged-in user
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/tasks/', {
        headers,
      });
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTask = async (taskName) => {
    try {
      const response = await fetch('http://localhost:8000/api/tasks/', {
        method: 'POST',
        headers,
        body: JSON.stringify({ name: taskName }),
      });
      if (response.ok) {
        const newTask = await response.json();
        setTasks([...tasks, newTask]);
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleComplete = async (taskId) => {
    // Find the task to update
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;
    try {
      const response = await fetch(`http://localhost:8000/api/tasks/${taskId}/`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({ name: task.name, completed: !task.completed }),
      });
      if (response.ok) {
        const updatedTask = await response.json();
        setTasks(tasks.map((t) => (t.id === taskId ? updatedTask : t)));
      }
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/tasks/${taskId}/`, {
        method: 'DELETE',
        headers,
      });
      if (response.ok) {
        setTasks(tasks.filter((t) => t.id !== taskId));
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const filteredTasks = tasks
    .filter((task) => (filter === 'completed' ? task.completed : true))
    .filter((task) => (search.trim() === '' ? true : task.name.toLowerCase().includes(search.toLowerCase())));

  return (
    <div className="todo-container">
      <header>
        <h2>{user.username}'s To‑Do List</h2>
        <button onClick={onLogout}>Logout</button>
      </header>
      <AddTask addTask={addTask} />
      <div className="controls">
        <Filter setFilter={setFilter} currentFilter={filter} />
        <SearchBar setSearch={setSearch} />
      </div>
      <TaskList tasks={filteredTasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default TodoList;
