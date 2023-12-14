// TaskContainer.js
import React from 'react';

const TaskContainer = () => {
  return (
    <div className='inner-container'>
      <div className="task-subtitle">
        <img src="images/sit_pusheen_86.png" alt="Sitting Pusheen Cat" />
        <span className="font-link">HIGHEST PURIORITY</span>
      </div>
      <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here" /></span>
      </label>
      <label>
        <input type="checkbox" onChange={() => {}} />
        <span><input type="text" placeholder="My task goes here" /></span>
      </label>

      {/* Repeat similar structure for other task categories */}
    </div>
  );
};

export default TaskContainer;
