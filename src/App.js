import React, { useState } from 'react';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Faire les courses', completed: false },
    { id: 2, text: 'Apprendre React', completed: true },
    { id: 3, text: 'Faire de l\'exercice', completed: false },
  ]);

  const handleTaskCompletion = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <TaskList tasks={tasks} onTaskCompletion={handleTaskCompletion} />
    </div>
  );
}

export default App;
