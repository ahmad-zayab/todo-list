import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [view, setView] = useState('login'); 

 
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      setView('todo');
    }
  }, []);


  const handleRegister = async (userData) => {
    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      setUser(data.user);
      setToken(data.token);
      setView('todo');
    } catch (error) {
      alert(error.message);
    }
  };

 
  const handleLogin = async (userData) => {
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Invalid credentials!');
      }
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      setUser(data.user);
      setToken(data.token);
      setView('todo');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
    setView('login');
  };

  return (
    <div className="App">
      {view === 'register' && (
        <Register onRegister={handleRegister} switchToLogin={() => setView('login')} />
      )}
      {view === 'login' && (
        <Login onLogin={handleLogin} switchToRegister={() => setView('register')} />
      )}
      {view === 'todo' && <TodoList user={user} token={token} onLogout={handleLogout} />}
    </div>
  );
}

export default App;
