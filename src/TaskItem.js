import React from 'react';

function TaskItem({ task, onTaskCompletion }) {
  const handleCheckboxChange = () => {
    onTaskCompletion(task.id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
    </div>
  );
}

export default TaskItem;
