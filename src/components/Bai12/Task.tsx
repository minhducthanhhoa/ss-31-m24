import React from 'react';

interface TaskProps {
  task: {
    name: string;
    completed: boolean;
  };
  onDelete: () => void;
  onEdit: () => void;
  onToggleComplete: () => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete, onEdit, onToggleComplete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggleComplete}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={onEdit}>✏️</button>
      <button onClick={onDelete}>🗑️</button>
    </li>
  );
};

export default Task;
