import React, { useState, useEffect} from 'react'
import "./Bai11.css";
import Task from './Task';
import Modal from './Modal';
interface TaskType {
    name: string;
    completed: boolean;
  }

export default function Bai11() {
    const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<TaskType | null>(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as TaskType[];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) {
      setError('Tên công việc không được để trống');
      return;
    }
    if (tasks.some(task => task.name === newTask.trim())) {
      setError('Tên công việc không được phép trùng');
      return;
    }
    setTasks([...tasks, { name: newTask.trim(), completed: false }]);
    setNewTask('');
    setError('');
  };

  const deleteTask = (task: TaskType) => {
    setShowModal(true);
    setTaskToDelete(task);
  };

  const confirmDelete = () => {
    if (taskToDelete) {
      setTasks(tasks.filter(t => t !== taskToDelete));
      setShowModal(false);
      setTaskToDelete(null);
    }
  };

  const toggleComplete = (task: TaskType) => {
    setTasks(tasks.map(t => t === task ? { ...t, completed: !t.completed } : t));
  };
  return (
    <div>
        <h1>Bài 11</h1>
        <div className="App">
      <h3>Danh sách công việc</h3>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nhập tên công việc"
        />
        <button onClick={addTask}>Thêm</button>
      </div>
      {error && <p className="error">{error}</p>}
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onDelete={() => deleteTask(task)}
            onToggleComplete={() => toggleComplete(task)}
          />
        ))}
      </ul>
      <p>Công việc đã hoàn thành: {tasks.filter(task => task.completed).length} / {tasks.length}</p>
      {showModal && taskToDelete && (
        <Modal
          task={taskToDelete}
          onCancel={() => setShowModal(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
    </div>
  )
}
