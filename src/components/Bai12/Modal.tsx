import React from 'react';

interface ModalProps {
  task: {
    name: string;
    completed: boolean;
  };
  onCancel: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ task, onCancel, onConfirm }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Xác nhận</h2>
        <p>Bạn có xác nhận xóa công việc <strong>{task.name}</strong> không?</p>
        <button onClick={onCancel}>Hủy</button>
        <button onClick={onConfirm}>Đồng ý</button>
      </div>
    </div>
  );
};

export default Modal;
