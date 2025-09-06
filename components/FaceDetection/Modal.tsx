
"use client";
import React, { ReactNode } from "react";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 w-screen" onClick={onClose}>
      <div
        className="bg-white rounded-lg p-6 w-[80%] max-w-md transform transition-all duration-300 ease-in-out"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

