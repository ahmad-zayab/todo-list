import React from 'react';
import './TaskItem.css';

function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(task.id)}>{task.name}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
