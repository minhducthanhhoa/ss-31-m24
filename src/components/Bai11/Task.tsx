import React from 'react'
interface TaskProps {
    task: {
      name: string;
      completed: boolean;
    };
    onDelete: () => void;
    onToggleComplete: () => void;
  }

export default function Task({ task, onDelete, onToggleComplete }) {
  return (
    <div>
        <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggleComplete}
      />
      {task.name}
      <button onClick={onDelete}>🗑️</button>
    </li>
    </div>
  )
}
