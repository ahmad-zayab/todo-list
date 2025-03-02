import React from 'react';
import './Filter.css';

function Filter({ setFilter, currentFilter }) {
  return (
    <div className="filter-container">
      <button
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={currentFilter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default Filter;
