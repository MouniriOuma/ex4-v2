import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onTaskCompletion }) {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onTaskCompletion={onTaskCompletion} />
      ))}
    </div>
  );
}

export default TaskList;

