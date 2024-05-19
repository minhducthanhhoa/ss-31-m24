import React from 'react'
import "./Bai12.css";
import Task from './Task';
import Modal from './Modal';
import EditModal from './EditModal';

interface TaskType {
  name: string;
  completed: boolean;
}
export default function Bai12() {
    const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<TaskType | null>(null);
  const [taskToEdit, setTaskToEdit] = useState<TaskType | null>(null);

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

  const editTask = (task: TaskType) => {
    setShowEditModal(true);
    setTaskToEdit(task);
  };

  const confirmEdit = (newName: string) => {
    if (taskToEdit) {
      if (!newName.trim()) {
        setError('Tên công việc không được để trống');
        return;
      }
      if (tasks.some(task => task.name === newName.trim() && task !== taskToEdit)) {
        setError('Tên công việc không được phép trùng');
        return;
      }
      setTasks(tasks.map(t => t === taskToEdit ? { ...t, name: newName.trim() } : t));
      setShowEditModal(false);
      setTaskToEdit(null);
      setError('');
    }
  };

  const toggleComplete = (task: TaskType) => {
    setTasks(tasks.map(t => t === task ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div>
        <h1>Bài 12</h1>
        const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<TaskType | null>(null);
  const [taskToEdit, setTaskToEdit] = useState<TaskType | null>(null);

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

  const editTask = (task: TaskType) => {
    setShowEditModal(true);
    setTaskToEdit(task);
  };

  const confirmEdit = (newName: string) => {
    if (taskToEdit) {
      if (!newName.trim()) {
        setError('Tên công việc không được để trống');
        return;
      }
      if (tasks.some(task => task.name === newName.trim() && task !== taskToEdit)) {
        setError('Tên công việc không được phép trùng');
        return;
      }
      setTasks(tasks.map(t => t === taskToEdit ? { ...t, name: newName.trim() } : t));
      setShowEditModal(false);
      setTaskToEdit(null);
      setError('');
    }
  };

  const toggleComplete = (task: TaskType) => {
    setTasks(tasks.map(t => t === task ? { ...t, completed: !t.completed } : t));
  };

    </div>
  )
}
