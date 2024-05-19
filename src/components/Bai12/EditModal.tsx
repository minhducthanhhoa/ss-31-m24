import React, { useState } from 'react';

interface EditModalProps {
  task: {
    name: string;
    completed: boolean;
  };
  onCancel: () => void;
  onConfirm: (newName: string) => void;
}

const EditModal: React.FC<EditModalProps> = ({ task, onCancel, onConfirm }) => {
  const [newName, setNewName] = useState(task.name);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Cập nhật công việc</h2>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={onCancel}>Hủy</button>
        <button onClick={() => onConfirm(newName)}>Đồng ý</button>
      </div>
    </div>
  );
};

export default EditModal;
